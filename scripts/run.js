const hre = require('hardhat');

async function main() {
  const [owner, randomPerson] = await hre.ethers.getSigners();
  const guestbookContractFactory = await hre.ethers.getContractFactory(
    'Guestbook'
  );
  const guestbookContract = await guestbookContractFactory.deploy();
  await guestbookContract.deployed();

  console.log('Contract deployed to:', guestbookContract.address);
  console.log('Contract deployed by:', owner.address);

  let signCount;
  signCount = await guestbookContract.getTotalSigns();

  let signTxn = await guestbookContract.sign('I signed the guestbook!');
  await signTxn.wait();
  signCount = await guestbookContract.getTotalSigns();

  signTxn = await guestbookContract
    .connect(randomPerson)
    .sign('I also signed!');
  await signTxn.wait();
  signCount = await guestbookContract.getTotalSigns();
  return await guestbookContract.getAllMessages();
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
