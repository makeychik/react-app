import { createContext } from 'react';
import { CryptoContextState } from './CryptoProvider';

export const CryptoContext = createContext<CryptoContextState | undefined>(
  undefined
);
