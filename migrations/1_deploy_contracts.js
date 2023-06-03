// const Calculator = artifacts.require("Calculator");

// module.exports = function (deployer) {
//   deployer.deploy(Calculator);
// };

const Hello = artifacts.require("Hello");

module.exports = function (deployer) {
  deployer.deploy(Hello);
};