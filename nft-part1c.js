Create a Custom Fee Schedule
Let’s start by defining the custom fees for the NFT. Custom fees are distributed to the specified accounts each time the token is transferred. Depending on the token type (fungible or non-fungible), you can specify a custom fee to be fixed, fractional, or a royalty. An NFT can only have fixed or royalty fees, so in this example, we’ll go with a royalty fee. This enables collecting a fraction of the value exchanged for the NFT when ownership is transferred from one person to another.

  Code
// DEFINE CUSTOM FEE SCHEDULE
let nftCustomFee = await new CustomRoyaltyFee()
  .setNumerator(1)
  .setDenominator(10)
  .setFeeCollectorAccountId(treasuryId)
  .setFallbackFee(new CustomFixedFee().setHbarAmount(new Hbar(200)));
