import { useEffect, useState } from 'react';

export default function useMetamask() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [account, setAccount] = useState(null);

  useEffect(async () => {
    if (!window.ethereum) {
      console.warn('Metamask not detected');
      return;
    } else {
      setWalletConnected(true);
      const accounts = await window.ethereum.request({
        method: 'eth_accounts',
      });

      if (accounts.length === 0) {
        console.warn('No authorized account found');
        return;
      }

      const [account] = accounts; // Take the first account.
      setAccount(account);
    }
  });

  const connectWallet = async () => {
    try {
      if (!window.ethereum) {
        alert('Please install the Metamask browser extension!');
        return;
      }

      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });

      const [account] = accounts; // Take the first account.
      setAccount(account);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    isWalletConnected: walletConnected,
    account,
    connectWallet,
  };
}
