require("dotenv").config();
const {MNEMONIC, PROJECT_ID} = process.env;
const HDWalletProvider = require("@truffle/hdwallet-provider");

module.exports = {
  networks: {
    sepolia: {
      provider: () => {
        new HDWalletProvider(MNEMONIC, API_KEY);
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
