const LogitechToken = artifacts.require("LogitechToken");

module.exports = function (deployer) {
  deployer.deploy(LogitechToken, "LogitechToken", "LOG", 1000);
};
