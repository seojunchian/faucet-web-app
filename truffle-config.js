require("dotenv").config();
// const {MNEMONIC, API_KEY} = process.env;
const HDWalletProvider = require("@truffle/hdwallet-provider");

module.exports = {
  networks: {
    sepolia: {
      provider: () => {
        return new HDWalletProvider(process.env.MNEMONIC, process.env.API_KEY);
      },
      network_id: 11155111,
    },
  },
  compilers: {
    solc: {
      version: "0.8.19",
    },
  },
};
