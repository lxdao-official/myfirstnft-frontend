import React, { useState } from 'react';

export const WalletContext = React.createContext();

export default function useWallet() {
  const [address, setAddress] = useState(null);
  const [fullAddress, setFullAddress] = useState(null);

  return {
    address,
    setAddress,
    fullAddress,
    setFullAddress,
  };
}
