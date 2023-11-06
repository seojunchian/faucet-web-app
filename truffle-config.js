require("dotenv").config();
const mnemonic = process.env["mnemonic"];
const api_key = process.env["api_key"];
const HDWalletProvider = require("@truffle/hdwallet-provider");

module.exports = {
  networks: {
    sepolia: {
      provider: () => new HDWalletProvider(mnemonic, api_key),
      network_id: 11155111,
    },
  },

  compilers: {
    solc: {
      version: "0.8.19",
    },
  },
};
