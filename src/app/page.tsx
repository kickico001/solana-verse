"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [solanaPrice, setSolanaPrice] = useState<{
    usd: number;
    usd_24h_change: number;
  } | null>(null);
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);

  useEffect(() => {
    const fetchSolanaPrice = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd&include_24hr_change=true'
        );
        const data = await response.json();
        setSolanaPrice(data.solana);
      } catch (error) {
        console.error('Error fetching Solana price:', error);
      }
    };

    fetchSolanaPrice();
    const interval = setInterval(fetchSolanaPrice, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="flex items-center justify-between p-6">
        <div className="flex items-center gap-2">
          <Image
            src="/solana-logo.svg"
            alt="Solana Logo"
            width={40}
            height={40}
            className="dark:invert"
          />
          <span className="text-xl font-bold">SolanaVerse</span>
        </div>
        <button 
          onClick={() => setIsWalletModalOpen(true)}
          className="rounded-full bg-[#9945FF] text-white px-6 py-2 font-semibold hover:bg-[#7C3ACD] transition-colors"
        >
          Connect Wallet
        </button>

        {/* Wallet Modal */}
        {isWalletModalOpen && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/10 w-full max-w-md mx-4">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">Connect Wallet</h3>
                <button 
                  onClick={() => setIsWalletModalOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="space-y-4">
                <button 
                  className="w-full bg-white/5 hover:bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/10 flex items-center gap-4 transition-colors"
                  onClick={() => {
                    console.log('Connecting to Phantom...');
                    setIsWalletModalOpen(false);
                  }}
                >
                  <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <Image
                      src="/phantom-icon.svg"
                      alt="Phantom"
                      width={24}
                      height={24}
                      className="dark:invert"
                    />
                  </div>
                  <span className="text-lg font-semibold">Phantom</span>
                </button>

                <button 
                  className="w-full bg-white/5 hover:bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/10 flex items-center gap-4 transition-colors"
                  onClick={() => {
                    console.log('Connecting to Solflare...');
                    setIsWalletModalOpen(false);
                  }}
                >
                  <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center">
                    <Image
                      src="/solflare-icon.svg"
                      alt="Solflare"
                      width={24}
                      height={24}
                      className="dark:invert"
                    />
                  </div>
                  <span className="text-lg font-semibold">Solflare</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Welcome to SolanaVerse</h1>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {/* Staking Card */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                <Image
                  src="/stake-icon.svg"
                  alt="Staking"
                  width={24}
                  height={24}
                  className="dark:invert"
                />
              </div>
              <h3 className="text-xl font-semibold">Staking</h3>
            </div>
            <p className="text-gray-400">Stake your SOL tokens and earn rewards while securing the network</p>
          </div>

          {/* Meme Token Card */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center">
                <Image
                  src="/meme-icon.svg"
                  alt="Meme Tokens"
                  width={24}
                  height={24}
                  className="dark:invert"
                />
              </div>
              <h3 className="text-xl font-semibold">Meme Tokens</h3>
            </div>
            <p className="text-gray-400">Explore and interact with popular Solana meme tokens</p>
          </div>

          {/* Governance Card */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                <Image
                  src="/governance-icon.svg"
                  alt="DRep Governance"
                  width={24}
                  height={24}
                  className="dark:invert"
                />
              </div>
              <h3 className="text-xl font-semibold">DRep Governance</h3>
            </div>
            <p className="text-gray-400">Participate in decentralized governance decisions</p>
          </div>

          {/* Rewards Card */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                <Image
                  src="/rewards-icon.svg"
                  alt="Rewards"
                  width={24}
                  height={24}
                  className="dark:invert"
                />
              </div>
              <h3 className="text-xl font-semibold">Rewards</h3>
            </div>
            <p className="text-gray-400">Track and manage your staking rewards</p>
          </div>

          {/* Pool Management Card */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center">
                <Image
                  src="/pool-icon.svg"
                  alt="Pool Management"
                  width={24}
                  height={24}
                  className="dark:invert"
                />
              </div>
              <h3 className="text-xl font-semibold">Pool Management</h3>
            </div>
            <p className="text-gray-400">Manage your staking pools and delegations</p>
          </div>

          {/* Undelegation Card */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                <Image
                  src="/undelegate-icon.svg"
                  alt="Undelegation"
                  width={24}
                  height={24}
                  className="dark:invert"
                />
              </div>
              <h3 className="text-xl font-semibold">Undelegation</h3>
            </div>
            <p className="text-gray-400">Safely undelegate your staked tokens</p>
          </div>
        </div>

        {/* Market Statistics */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Market Statistics</h2>
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold mb-2">
                ${solanaPrice?.usd.toFixed(2) ?? '-.--'}
              </div>
              <div className={`text-lg ${solanaPrice?.usd_24h_change && solanaPrice.usd_24h_change > 0 ? 'text-green-400' : 'text-red-400'}`}>
                {solanaPrice?.usd_24h_change ? `${solanaPrice.usd_24h_change.toFixed(2)}%` : '-.--'} (24h)
              </div>
            </div>
          </div>
        </div>

        {/* Network Statistics */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Network Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-2">TPS</h3>
              <p className="text-3xl font-bold">4,128</p>
              <p className="text-gray-400 mt-1">Transactions per second</p>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-2">Total Validators</h3>
              <p className="text-3xl font-bold">1,785</p>
              <p className="text-gray-400 mt-1">Active validators</p>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-2">Total Stake</h3>
              <p className="text-3xl font-bold">372M SOL</p>
              <p className="text-gray-400 mt-1">Total value staked</p>
            </div>
          </div>
        </div>

        {/* Trending Tokens */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Trending Tokens</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <span className="text-2xl">🌟</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">BONK</h3>
                  <p className="text-green-400">+15.8%</p>
                </div>
                <div className="ml-auto">
                  <p className="text-xl font-bold">$0.00001234</p>
                  <p className="text-gray-400 text-right">$1.2M Vol</p>
                </div>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">WEN</h3>
                  <p className="text-red-400">-5.2%</p>
                </div>
                <div className="ml-auto">
                  <p className="text-xl font-bold">$0.00000789</p>
                  <p className="text-gray-400 text-right">$890K Vol</p>
                </div>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                  <span className="text-2xl">📊</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">PYTH</h3>
                  <p className="text-green-400">+8.3%</p>
                </div>
                <div className="ml-auto">
                  <p className="text-xl font-bold">$0.45678</p>
                  <p className="text-gray-400 text-right">$3.5M Vol</p>
                </div>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center">
                  <span className="text-2xl">💫</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">RAY</h3>
                  <p className="text-red-400">-3.7%</p>
                </div>
                <div className="ml-auto">
                  <p className="text-xl font-bold">$0.89012</p>
                  <p className="text-gray-400 text-right">$2.8M Vol</p>
                </div>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">MEME</h3>
                  <p className="text-green-400">+12.4%</p>
                </div>
                <div className="ml-auto">
                  <p className="text-xl font-bold">$0.00002345</p>
                  <p className="text-gray-400 text-right">$950K Vol</p>
                </div>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center">
                  <span className="text-2xl">🔥</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">SAMO</h3>
                  <p className="text-green-400">+6.9%</p>
                </div>
                <div className="ml-auto">
                  <p className="text-xl font-bold">$0.00003456</p>
                  <p className="text-gray-400 text-right">$1.5M Vol</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
