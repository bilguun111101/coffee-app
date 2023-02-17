import React, { createContext, useContext, useState } from 'react';

const DetailData = createContext();

export const DetailDataProvider = ({ children }) => {
    const [detailData, setDetailData] = useState({});
    const [addiction, setAddiction] = useState([]);
  return (
    <DetailData.Provider value={{ detailData, setDetailData, addiction, setAddiction }}>
      { children }
    </DetailData.Provider>
  );
}

export const useDetailData = () => useContext(DetailData);
