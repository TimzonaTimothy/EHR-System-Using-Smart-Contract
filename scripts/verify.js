const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
require("@nomiclabs/hardhat-etherscan");
async function main() {
  // Verify the contract after deploying
  await hre.run("verify:verify", {
    address: "0xB8f1ed9Adca8c6863B3da364B1b332B51462BA06",
    // constructorArguments: ["0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"],
  });
}
// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });





//   const { ethers } = require("hardhat");
//   require("dotenv").config({ path: ".env" });
//   require("@nomiclabs/hardhat-etherscan");
//   async function main() {
//   // Verify the contract after deploying
//   await hre.run("verify:verify", {
//   address: "address-of-your-smart-contract",
//   constructorArguments: ["parameter1","parameter2"],
//   // for example, if your constructor argument took an address, do something like constructorArguments: ["0xABCDEF..."],
//   });
//   }
//   // Call the main function and catch if there is any error
//   main()
//   .then(() => process.exit(0))
//   .catch((error) => {
//   console.error(error);
//   process.exit(1);
//   });