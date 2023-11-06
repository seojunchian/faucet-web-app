const LogitechToken = artifacts.require("LogitechToken");

module.exports = function (deployer) {
  deployer.deploy(LogitechToken);
};
