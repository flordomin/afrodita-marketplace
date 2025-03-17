"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ethers } from "ethers";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const NFTMarketplace = () => {
  const [walletConnected, setWalletConnected] = useState(false);
  
  const connectWallet = async () => {
    if (typeof window !== "undefined" && (window as any).ethereum) {
      const provider = new ethers.providers.Web3Provider((window as any).ethereum);
      await provider.send("eth_requestAccounts", []);
      setWalletConnected(true);
    } else {
      alert("Please install MetaMask!");
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <motion.h1 className="text-4xl font-bold mb-6" animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1 }}>
        Mi NFT Marketplace 🎨
      </motion.h1>
      
      <div className="flex gap-4 mb-6">
        <Button onClick={connectWallet} className="bg-blue-500 text-white p-2 rounded-lg">
          {walletConnected ? "Wallet Conectado" : "Conectar MetaMask"}
        </Button>
        <WalletMultiButton />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((nft) => (
          <Card key={nft} className="rounded-xl shadow-lg">
            <CardContent className="p-4">
              <img src="https://via.placeholder.com/300?text=NFT+${nft}" alt="NFT ${nft}" className="rounded-lg mb-4" />
              <h3 className="text-xl font-semibold">NFT #${nft}</h3>
              <p className="text-gray-500">Precio: 0.1 ETH</p>
              <Button className="mt-4 w-full bg-green-500 text-white">Comprar</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default NFTMarketplace;
