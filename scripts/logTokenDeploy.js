const hre = require("hardhat");

async function main() {
  const LogitechToken = await hre.ethers.getContractFactory("LogitechToken");
  const logitechToken = await LogitechToken.deploy("LogitechToken", "LOG");

  console.log(`Contract deployed to ${await logitechToken.getAddress()}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
