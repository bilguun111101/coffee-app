import React, { createContext, useContext, useState } from 'react';

const DetailData = createContext();

export const DetailDataProvider = ({ children }) => {
    const [detailData, setDetailData] = useState({});
  return (
    <DetailData.Provider value={{ detailData, setDetailData }}>
      { children }
    </DetailData.Provider>
  );
}

export const useDetailData = () => useContext(DetailData);
