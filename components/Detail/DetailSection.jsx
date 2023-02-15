import React from 'react';
import { DetailProvider } from '../context';
import { Detail } from './Detail';

export const DetailSection = () => {
  return (
    <DetailProvider>
        <Detail />
    </DetailProvider>
  )
}
