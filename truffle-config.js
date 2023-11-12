require("dotenv").config();
// const {MNEMONIC, API_KEY} = process.env;
const HDWalletProvider = require("@truffle/hdwallet-provider");

module.exports = {
  networks: {
    sepolia: {
      provider: () => {
        return new HDWalletProvider(
          process.env.SENDER_MNEMONIC,
          process.env.SEPOLIA_API_KEY
        );
      },
      network_id: 11155111,
    },
    mumbai: {
      provider: () => {
        return new HDWalletProvider(
          process.env.SENDER_MNEMONIC,
          process.env.MUMBAI_API_KEY
        );
      },
      network_id: 80001,
    },
  },
  compilers: {
    solc: {
      version: "0.8.19",
    },
  },
};
