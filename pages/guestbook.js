import { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';

import useMetamask from 'hooks/useMetamask';
import Header from 'components/Header';
import Layout from 'layouts/Layout';
import { ethers } from 'ethers';
import GuestbookContract from '../hardhat/artifacts/contracts/Guestbook.sol/Guestbook.json';
import LoadingSpinner from 'components/LoadingSpinner';
import { format } from 'date-fns';

export default function Guestbook() {
  const guestbookAddress = '0x62a046E02387A45c633eE0C6CC11B5DE224f95eC';

  const [signs, setSigns] = useState([]);
  const [loading, setLoading] = useState(false);
  const messageRef = useRef(null);
  const { isWalletConnected, account, connectWallet } = useMetamask();

  useEffect(async () => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const guestbookContract = new ethers.Contract(
        guestbookAddress,
        GuestbookContract.abi,
        signer
      );

      const signs = await guestbookContract.getAllSigns();
      const sortedSigns = signs
        .map(sign => ({
          signer: sign.signer,
          timestamp: sign.timestamp,
          message: sign.message,
        }))
        .sort((a, b) =>
          a.timestamp > b.timestamp ? (a.timestamp < b.timestamp ? 0 : -1) : 1
        );
      setSigns(sortedSigns);
    }
  }, []);

  useEffect(() => {
    let guestbookContract;
    const handleNewSign = (from, timestamp, message) => {
      setSigns(oldSigns => [
        {
          signer: from,
          timestamp,
          message,
        },
        ...oldSigns,
      ]);
    };

    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      guestbookContract = new ethers.Contract(
        guestbookAddress,
        GuestbookContract.abi,
        signer
      );
      guestbookContract.on('SignGuestbook', handleNewSign);
    }

    return () => {
      if (guestbookContract) {
        guestbookContract.off('SignGuestbook', handleNewSign);
      }
    };
  }, []);

  const sign = async e => {
    e.preventDefault();
    const message = messageRef.current.value;
    if (!message) {
      toast.error('Please write something! :)');
      return;
    }
    setLoading(true);
    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const guestbookContract = new ethers.Contract(
          guestbookAddress,
          GuestbookContract.abi,
          signer
        );

        const signTxn = await guestbookContract.sign(message, {
          gasLimit: 300000,
        });

        const waitPromise = signTxn.wait();
        toast.promise(
          waitPromise,
          {
            loading: 'Mining... 👷‍♂️',
            success: 'Minted! Thanks for signing!',
          },
          {
            success: {
              icon: '✅',
            },
          }
        );
        await waitPromise;
        messageRef.current.value = '';
        setLoading(false);
      }
    } catch (error) {
      toast.error('Oops, something went wrong trying to sign!');
      setLoading(false);
      console.error(error.message);
    }
  };

  return (
    <Layout>
      <Header>
        <div className="p-5 flex flex-col items-center max-w-4xl m-auto space-y-4">
          <h1>Guestbook</h1>
          <p>
            Inspired by{' '}
            <a className="link" href="https://leerob.io/guestbook">
              Lee Rob's guestbook
            </a>{' '}
            but with a Web3 twist! Your comments will be stored on the Ethereum
            blockchain with a chance at winning ETH!
          </p>
          {isWalletConnected ? (
            <p className="bg-green-50 text-green-900 py-1 px-2 rounded-lg font-semibold dark:bg-green-800 dark:text-green-50">
              Connected! ✅
            </p>
          ) : (
            <button
              onClick={connectWallet}
              className="flex items-center justify-center font-bold bg-cool-gray-800 text-white rounded-full px-4 py-2 self-center focus:outline-none dark:bg-blue-900"
            >
              Connect Wallet
            </button>
          )}
          <form
            onSubmit={sign}
            className="flex flex-col items-center w-full space-y-2"
          >
            <textarea
              ref={messageRef}
              rows="5"
              cols="20"
              className="textarea w-full"
              placeholder="Sign the guestbook!"
            ></textarea>
            <button
              type="submit"
              className="flex items-center justify-center w-28 font-bold bg-cool-gray-800 text-white rounded-full p-2 self-center focus:outline-none dark:bg-blue-900"
            >
              {loading ? <LoadingSpinner /> : 'Sign'}
            </button>
          </form>

          {signs.map(({ message, signer, timestamp }, idx) => (
            <div
              key={idx}
              className="flex flex-col text-sm items-start p-2 rounded w-full md:w-[500px] dark:text-white"
            >
              <div className="mb-2 md:text-left">{message}</div>
              <div className="flex space-x-4">
                <div className="mb-1 bg-gray-100 rounded-full px-1 text-sm text-gray-800 dark:text-gray-300 dark:bg-cool-gray-900">
                  {`${signer.substring(0, 2)}...${signer.substring(
                    signer.length - 4,
                    signer.length
                  )}`}
                </div>
                <div className="text-sm text-gray-700">
                  {format(
                    new Date(timestamp * 1000),
                    "d MMM yyyy 'at' h:mm bb"
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Header>
    </Layout>
  );
}
