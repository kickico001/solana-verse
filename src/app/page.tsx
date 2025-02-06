import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <header className="flex justify-between items-center p-6">
        <div className="flex items-center gap-2">
          <Image
            src="/solana-logo.svg"
            alt="Solana Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-xl font-bold">SolanaVerse</span>
        </div>
        <Button
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full"
        >
          Connect Wallet
        </Button>
      </header>

      <main className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">
          Your Gateway to Solana Network
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Staking Card */}
          <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition">
            <h2 className="text-xl font-semibold mb-4">Staking</h2>
            <p className="text-gray-300 mb-4">Stake your SOL tokens and earn rewards</p>
            <Button className="w-full bg-purple-600 hover:bg-purple-700">
              Stake Now
            </Button>
          </div>

          {/* Validation Card */}
          <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition">
            <h2 className="text-xl font-semibold mb-4">Validation</h2>
            <p className="text-gray-300 mb-4">Become a validator and secure the network</p>
            <Button className="w-full bg-purple-600 hover:bg-purple-700">
              Start Validating
            </Button>
          </div>

          {/* Undelegation Card */}
          <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition">
            <h2 className="text-xl font-semibold mb-4">Undelegation</h2>
            <p className="text-gray-300 mb-4">Manage your staked tokens</p>
            <Button className="w-full bg-purple-600 hover:bg-purple-700">
              Undelegate
            </Button>
          </div>

          {/* Reward Allocation Card */}
          <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition">
            <h2 className="text-xl font-semibold mb-4">Reward Allocation</h2>
            <p className="text-gray-300 mb-4">Track and manage your staking rewards</p>
            <Button className="w-full bg-purple-600 hover:bg-purple-700">
              View Rewards
            </Button>
          </div>

          {/* DRep Governance Card */}
          <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition">
            <h2 className="text-xl font-semibold mb-4">DRep Governance</h2>
            <p className="text-gray-300 mb-4">Participate in decentralized governance</p>
            <Button className="w-full bg-purple-600 hover:bg-purple-700">
              Vote Now
            </Button>
          </div>

          {/* Change Pool Card */}
          <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition">
            <h2 className="text-xl font-semibold mb-4">Change Pool</h2>
            <p className="text-gray-300 mb-4">Switch between different staking pools</p>
            <Button className="w-full bg-purple-600 hover:bg-purple-700">
              Change Pool
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
