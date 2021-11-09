const hre = require('hardhat');

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  const accountBalance = await deployer.getBalance();

  console.log('Deploying contracts with account:', deployer.address);
  console.log('Account balance:', accountBalance.toString());

  const guestbookContractFactory = await hre.ethers.getContractFactory('Guestbook');
  const guestbookContract = await guestbookContractFactory.deploy({
    value: hre.ethers.utils.parseEther('0.0001'),
  });
  await guestbookContract.deployed();

  console.log('Guestbook address:', guestbookContract.address);
}

const runmain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runmain();
