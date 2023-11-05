const {Web3} = require("web3");
require("dotenv").config();

async function main() {
  const web3 = new Web3(process.env.SEPOLIA_URL);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
