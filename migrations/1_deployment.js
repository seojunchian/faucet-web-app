const ERC20 = artifacts.require("ERC20");

module.exports = (deployment) => {
  deployment.deploy(ERC20);
};
