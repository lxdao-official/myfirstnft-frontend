import React, { useState, useEffect } from 'react';

export const MintDataContext = React.createContext();

export default function useMintData() {
  const [mintData, setMintData] = useState([]);

  useEffect(() => {
    const mintData = JSON.parse(localStorage.getItem('mintData') || '[]');
    setMintData(mintData);
  }, []);

  useEffect(() => {
    localStorage.setItem('mintData', JSON.stringify(mintData));
  }, [mintData]);

  return {
    mintData,
    setMintData,
  };
}
