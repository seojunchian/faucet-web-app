const Logitech = artifacts.require("Logitech");

module.exports = (deployment) => {
  deployment.deploy(Logitech);
};
