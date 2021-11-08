import { useEffect, useRef, useState } from 'react';

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
      setSigns(signs);
    }
  }, []);

  const sign = async e => {
    setLoading(true);
    e.preventDefault();
    const message = messageRef.current.value;
    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const guestbookContract = new ethers.Contract(
          guestbookAddress,
          GuestbookContract.abi,
          signer
        );

        const signTxn = await guestbookContract.sign(message);
        console.log('Mining...', signTxn.hash);
        await signTxn.wait();
        console.log('Minted:', signTxn.hash);

        let count = await guestbookContract.getTotalSignCount();
        let messages = await guestbookContract.getAllSigns();
        console.log(count);
        console.log(messages);
        messageRef.current.value = '';
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout>
      <Header>
        <div className="p-5 flex flex-col items-center max-w-4xl m-auto space-y-8">
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
              className="bg-gray-100 p-4 rounded dark:bg-gray-800 dark:text-white"
            >
              <div>{message}</div>
              <div className="flex justify-between">
                <div className="text-xs">{signer}</div>
                {/* <div>{format(new Date(timestamp.toString()), 'yyyyMMdd')}</div> */}
              </div>
            </div>
          ))}
        </div>
      </Header>
    </Layout>
  );
}
