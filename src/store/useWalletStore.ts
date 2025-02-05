import create from 'zustand';
import { Connection, PublicKey, LAMPORTS_PER_SOL } from '@solana/web3.js';

interface WalletState {
  publicKey: PublicKey | null;
  connected: boolean;
  balance: number;
  setPublicKey: (publicKey: PublicKey | null) => void;
  setConnected: (connected: boolean) => void;
  setBalance: (balance: number) => void;
  disconnect: () => void;
  fetchBalance: (connection: Connection) => Promise<void>;
}

export const useWalletStore = create<WalletState>((set) => ({
  publicKey: null,
  connected: false,
  balance: 0,
  setPublicKey: (publicKey) => set({ publicKey }),
  setConnected: (connected) => set({ connected }),
  setBalance: (balance) => set({ balance }),
  disconnect: () => set({ publicKey: null, connected: false, balance: 0 }),
  fetchBalance: async (connection) => {
    try {
      const publicKey = useWalletStore.getState().publicKey;
      if (!publicKey) return;

      const balance = await connection.getBalance(publicKey);
      set({ balance: balance / LAMPORTS_PER_SOL });
    } catch (error) {
      console.error('Error fetching balance:', error);
    }
  },
}));