import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-black text-white">
      {/* Header */}
      <header className="flex justify-between items-center p-6">
        <div className="flex items-center gap-2">
          <Image src="/vercel.svg" alt="Logo" width={32} height={32} className="invert" />
          <span className="text-xl font-bold">SolanaVerse</span>
        </div>
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full transition-colors">
          Connect Wallet
        </button>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Your Gateway to Solana Network</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Staking Card */}
          <div className="bg-purple-800/30 backdrop-blur-sm p-6 rounded-xl hover:transform hover:scale-105 transition-all">
            <div className="flex items-center gap-4 mb-4">
              <svg className="w-8 h-8 text-purple-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h2 className="text-xl font-bold">Staking</h2>
            </div>
            <p className="text-gray-300">Stake your SOL tokens and earn rewards while securing the network</p>
          </div>

          {/* Meme Token Card */}
          <div className="bg-purple-800/30 backdrop-blur-sm p-6 rounded-xl hover:transform hover:scale-105 transition-all">
            <div className="flex items-center gap-4 mb-4">
              <svg className="w-8 h-8 text-pink-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M9 9H9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M15 9H15.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <h2 className="text-xl font-bold">Meme Tokens</h2>
            </div>
            <p className="text-gray-300">Explore and trade the latest trending meme tokens on Solana</p>
          </div>

          {/* Delegation Management */}
          <div className="bg-purple-800/30 backdrop-blur-sm p-6 rounded-xl hover:transform hover:scale-105 transition-all">
            <div className="flex items-center gap-4 mb-4">
              <svg className="w-8 h-8 text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h2 className="text-xl font-bold">Delegation</h2>
            </div>
            <p className="text-gray-300">Manage your delegations and undelegations efficiently</p>
          </div>

          {/* Reward Allocation */}
          <div className="bg-purple-800/30 backdrop-blur-sm p-6 rounded-xl hover:transform hover:scale-105 transition-all">
            <div className="flex items-center gap-4 mb-4">
              <svg className="w-8 h-8 text-yellow-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h2 className="text-xl font-bold">Rewards</h2>
            </div>
            <p className="text-gray-300">Track and manage your staking rewards and allocations</p>
          </div>

          {/* DRep Governance */}
          <div className="bg-purple-800/30 backdrop-blur-sm p-6 rounded-xl hover:transform hover:scale-105 transition-all">
            <div className="flex items-center gap-4 mb-4">
              <svg className="w-8 h-8 text-green-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h2 className="text-xl font-bold">DRep Governance</h2>
            </div>
            <p className="text-gray-300">Participate in decentralized governance decisions</p>
          </div>

          {/* Pool Management */}
          <div className="bg-purple-800/30 backdrop-blur-sm p-6 rounded-xl hover:transform hover:scale-105 transition-all">
            <div className="flex items-center gap-4 mb-4">
              <svg className="w-8 h-8 text-indigo-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 12H18L15 21L9 3L6 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h2 className="text-xl font-bold">Pool Management</h2>
            </div>
            <p className="text-gray-300">Create and manage your staking pools with ease</p>
          </div>
        </div>
        {/* Market Data Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Market Overview</h2>
          <div className="bg-purple-800/30 backdrop-blur-sm p-8 rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <p className="text-gray-300 mb-2">Current Price</p>
                <p className="text-3xl font-bold text-green-400">$95.23</p>
                <p className="text-green-400">+5.67%</p>
              </div>
              <div className="text-center">
                <p className="text-gray-300 mb-2">24h Volume</p>
                <p className="text-2xl font-bold">$2.1B</p>
              </div>
              <div className="text-center">
                <p className="text-gray-300 mb-2">Market Cap</p>
                <p className="text-2xl font-bold">$41.2B</p>
              </div>
              <div className="text-center">
                <p className="text-gray-300 mb-2">Circulating Supply</p>
                <p className="text-2xl font-bold">432.2M SOL</p>
              </div>
            </div>
            <div className="h-64 bg-purple-900/50 rounded-lg p-4">
              {/* Price Chart Placeholder */}
              <p className="text-center text-gray-300">Price Chart Coming Soon</p>
            </div>
          </div>
        </div>

        {/* Latest News Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-purple-800/30 backdrop-blur-sm p-6 rounded-xl hover:transform hover:scale-105 transition-all">
              <p className="text-sm text-purple-400 mb-2">3 hours ago</p>
              <h3 className="text-xl font-bold mb-2">Solana DeFi Ecosystem Reaches New Milestone</h3>
              <p className="text-gray-300">Total Value Locked in Solana DeFi protocols surpasses $10 billion mark...</p>
            </div>
            <div className="bg-purple-800/30 backdrop-blur-sm p-6 rounded-xl hover:transform hover:scale-105 transition-all">
              <p className="text-sm text-purple-400 mb-2">6 hours ago</p>
              <h3 className="text-xl font-bold mb-2">New NFT Marketplace Launches on Solana</h3>
              <p className="text-gray-300">Revolutionary NFT platform promises zero gas fees and instant transactions...</p>
            </div>
            <div className="bg-purple-800/30 backdrop-blur-sm p-6 rounded-xl hover:transform hover:scale-105 transition-all">
              <p className="text-sm text-purple-400 mb-2">12 hours ago</p>
              <h3 className="text-xl font-bold mb-2">Solana Foundation Announces Developer Grants</h3>
              <p className="text-gray-300">$10 million allocated to support innovative projects building on Solana...</p>
            </div>
          </div>
        </div>

        {/* Trending Projects */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Trending Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-purple-800/30 backdrop-blur-sm p-6 rounded-xl hover:transform hover:scale-105 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-600 rounded-full"></div>
                <div>
                  <h3 className="font-bold">Jupiter</h3>
                  <p className="text-purple-400">DEX Aggregator</p>
                </div>
              </div>
              <p className="text-gray-300">$234M TVL</p>
            </div>
            <div className="bg-purple-800/30 backdrop-blur-sm p-6 rounded-xl hover:transform hover:scale-105 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-pink-600 rounded-full"></div>
                <div>
                  <h3 className="font-bold">Marinade</h3>
                  <p className="text-purple-400">Liquid Staking</p>
                </div>
              </div>
              <p className="text-gray-300">$180M TVL</p>
            </div>
            <div className="bg-purple-800/30 backdrop-blur-sm p-6 rounded-xl hover:transform hover:scale-105 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full"></div>
                <div>
                  <h3 className="font-bold">Orca</h3>
                  <p className="text-purple-400">DEX Protocol</p>
                </div>
              </div>
              <p className="text-gray-300">$156M TVL</p>
            </div>
            <div className="bg-purple-800/30 backdrop-blur-sm p-6 rounded-xl hover:transform hover:scale-105 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-full"></div>
                <div>
                  <h3 className="font-bold">Raydium</h3>
                  <p className="text-purple-400">AMM Protocol</p>
                </div>
              </div>
              <p className="text-gray-300">$142M TVL</p>
            </div>
          </div>
        </div>

        {/* Community Section */}
        <div className="mt-16 mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Join Our Community</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="#" className="bg-purple-800/30 backdrop-blur-sm p-6 rounded-xl hover:transform hover:scale-105 transition-all flex items-center justify-center gap-4">
              <svg className="w-8 h-8 text-purple-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753C20.18 7.773 21.692 5.25 22 4.009z"/>
              </svg>
              <span className="text-xl font-bold">Twitter</span>
            </a>
            <a href="#" className="bg-purple-800/30 backdrop-blur-sm p-6 rounded-xl hover:transform hover:scale-105 transition-all flex items-center justify-center gap-4">
              <svg className="w-8 h-8 text-purple-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3847-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
              </svg>
              <span className="text-xl font-bold">Discord</span>
            </a>
            <a href="#" className="bg-purple-800/30 backdrop-blur-sm p-6 rounded-xl hover:transform hover:scale-105 transition-all flex items-center justify-center gap-4">
              <svg className="w-8 h-8 text-purple-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
              <span className="text-xl font-bold">GitHub</span>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
