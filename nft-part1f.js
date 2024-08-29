Now, let’s create the token. Use TokenCreateTransaction() to configure and set the token properties. At a minimum, this constructor requires setting a name, symbol, and treasury account ID. All other fields are optional, so default values are used if they’re not specified. For instance, not specifying an admin key, makes a token immutable (can’t change or add properties); not specifying a supply key, makes a token supply fixed (can’t mint new or burn existing tokens); not specifying a token type, makes a token fungible; for more info on the defaults check out the documentation.

After submitting the transaction to the Hedera network, you can obtain the new token ID by requesting the receipt. This token ID represents an NFT class.


Copy
// CREATE NFT WITH CUSTOM FEE
let nftCreateTx = await new TokenCreateTransaction()
    .setTokenName("Fall Collection")
    .setTokenSymbol("LEAF")
    .setTokenType(TokenType.NonFungibleUnique)
    .setDecimals(0)
    .setInitialSupply(0)
    .setTreasuryAccountId(treasuryId)
    .setSupplyType(TokenSupplyType.Finite)
    .setMaxSupply(CIDs.length)
    .setCustomFees([nftCustomFee])
    .setAdminKey(adminKey)
    .setSupplyKey(supplyKey)
    .setPauseKey(pauseKey)
    .setFreezeKey(freezeKey)
    .setWipeKey(wipeKey)
    .freezeWith(client)
    .sign(treasuryKey);

let nftCreateTxSign = await nftCreateTx.sign(adminKey)
let nftCreateSubmit = await nftCreateTxSign.execute(client);
let nftCreateRx = await nftCreateSubmit.getReceipt(client);
let tokenId = nftCreateRx.tokenId;
console.log(`\n- Created NFT with Token ID: ${tokenId}`);
console.log(
  `- See: https://hashscan.io/${network}/transaction/${nftCreateSubmit.transactionId}`
);

// TOKEN QUERY TO CHECK THAT THE CUSTOM FEE SCHEDULE IS ASSOCIATED WITH NFT
var tokenInfo = await new TokenInfoQuery().setTokenId(tokenId).execute(client);
console.log(` `);
console.table(tokenInfo.customFees[0]);
