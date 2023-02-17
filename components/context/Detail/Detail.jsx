import React, { createContext, DetailedHTMLFactory, useContext, useEffect, useState } from 'react';
import length from "../../Detail/coffee-amount.json";

const DetailCreate = createContext();

export const DetailProvider = ({ children }) => {
  const [choose, setChoose] = useState( new Array(length.length).fill(false) )
  const [total, setTotal] = useState();
  const [order, setOrder] = useState({});
  return (
    <DetailCreate.Provider value={{ choose, setChoose, order, setOrder, setTotal, total }}>
      { children }
    </DetailCreate.Provider>
  );
}

export const useDetail = () => useContext(DetailCreate);
