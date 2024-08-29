// ACCOUNT CREATOR FUNCTION ==========================================
async function accountCreateFcn(pvKey, iBal, client) {
  const response = await new AccountCreateTransaction()
    .setInitialBalance(iBal)
    .setKey(pvKey.publicKey)
    .setMaxAutomaticTokenAssociations(10)
    .execute(client);
  const receipt = await response.getReceipt(client);
  return [receipt.status, receipt.accountId];
}
