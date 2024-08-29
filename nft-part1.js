// CREATE NEW HEDERA ACCOUNTS TO REPRESENT OTHER USERS
const initBalance = new Hbar(200);
const treasuryKey = PrivateKey.generateECDSA();
const [treasurySt, treasuryId] = await accountCreateFcn(
  treasuryKey,
  initBalance,
  client
);
console.log(`- Treasury's account: https://hashscan.io/testnet/account/${treasuryId}`);
const aliceKey = PrivateKey.generateECDSA();
const [aliceSt, aliceId] = await accountCreateFcn(aliceKey, initBalance, client);
console.log(`- Alice's account: https://hashscan.io/testnet/account/${aliceId}`);
const bobKey = PrivateKey.generateECDSA();
const [bobSt, bobId] = await accountCreateFcn(bobKey, initBalance, client);
console.log(`- Bob's account: https://hashscan.io/testnet/account/${bobId}`);

// GENERATE KEYS TO MANAGE FUNCTIONAL ASPECTS OF THE TOKEN
const supplyKey = PrivateKey.generate();
const adminKey = PrivateKey.generate();
const pauseKey = PrivateKey.generate();
const freezeKey = PrivateKey.generate();
const wipeKey = PrivateKey.generate();
const kycKey = PrivateKey.generate();
const newKycKey = PrivateKey.generate();
