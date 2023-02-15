import React, { createContext, DetailedHTMLFactory, useContext, useState } from 'react';
import length from "../../Detail/coffee-amount.json";

const DetailCreate = createContext();

export const DetailProvider = ({ children }) => {
  const [choose, setChoose] = useState( new Array(length.length).fill(false) )
  const [order, setOrder] = useState({});
  return (
    <DetailCreate.Provider value={{ choose, setChoose, order, setOrder }}>
      { children }
    </DetailCreate.Provider>
  );
}

export const useDetail = () => useContext(DetailCreate);
