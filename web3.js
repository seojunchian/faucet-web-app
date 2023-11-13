/**
 * provider
 * privateKeyToAccount Function
 * add an account to webjs with web3.eth.wallet.add(private_key)
 * estimate gas with estimateGas()
 * create tx object
 * from, to, value, gas, maxPriorityFeePerGas, maxFeePerGas needed in tx object
 * sign transaction with signTransaction Function => parameter (tx, private_key)
 * send signed transaction with sendSignedTransaction(signedTx.rawTransaction) assign to a value receipt
 * can write to console => .once("transactionHash", (txHash) => {console.log(txHash)})
 * receipt.blockNumber()
 */
const {Web3} = require("web3");
require("dotenv").config();

async function main() {
  const web3 = new Web3(
    new Web3.providers.HttpProvider(process.env.SEPOLIA_API_KEY)
  );
  const signer = web3.eth.accounts.privateKeyToAccount(
    process.env.SENDER_PRIVATE_KEY
  );
  const receiver = process.env.RECEIVER_PUBLIC_KEY;
  web3.eth.accounts.wallet.add(signer);
  const estimated = await web3.eth.estimateGas(
    {
      from: signer.address,
      to: receiver,
      value: web3.utils.toWei("0.01", "ether"),
    },
    "latest"
  );
  const tx = {
    from: signer.address,
    to: receiver,
    value: web3.utils.toWei("0.01", "ether"),
    gas: estimated, //
    maxPriorityFeePerGas: web3.utils.toWei("3", "gwei"), //
    maxFeePerGas: web3.utils.toWei("3", "gwei"), //
  };
  signedTx = await web3.eth.accounts.signTransaction(tx, signer.privateKey);
  console.log("Raw transaction data: " + signedTx.rawTransaction);
  const receipt = await web3.eth
    .sendSignedTransaction(signedTx.rawTransaction)
    .once("transactionHash", (txhash) => {
      console.log(`Mining transaction ...`);
      console.log(`https://sepolia.etherscan.io/tx/${txhash}`);
    });
  // The transaction is now on chain!
  console.log(`Mined in block ${receipt.blockNumber}`);
}

main().catch((error) => console.log(error));
