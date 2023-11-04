const {Web3} = require("web3");
require("dotenv").config();

async function main() {
  const web3 = new Web3(new Web3.providers.HttpProvider(process.env.RPC_URL));
  console.log(await web3.eth.getBlockNumber());

  const accounts = await web3.eth.getAccounts();

  await web3.eth.sendTransaction({
    from: accounts[0],
    to: accounts[1],
    value: web3.utils.toWei("1", "ether"),
  });

  const logitechToken = web3.eth.Contract("../contracts/LogitechToken.sol");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
