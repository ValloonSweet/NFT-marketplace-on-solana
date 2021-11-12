export type FairLaunchIDL = {"version":"0.0.0","name":"fair_launch","instructions":[{"name":"initializeFairLaunch","accounts":[{"name":"fairLaunch","isMut":true,"isSigner":false},{"name":"tokenMint","isMut":true,"isSigner":false},{"name":"treasury","isMut":true,"isSigner":false},{"name":"authority","isMut":false,"isSigner":false},{"name":"payer","isMut":true,"isSigner":true},{"name":"tokenProgram","isMut":false,"isSigner":false},{"name":"systemProgram","isMut":false,"isSigner":false},{"name":"rent","isMut":false,"isSigner":false}],"args":[{"name":"bump","type":"u8"},{"name":"treasuryBump","type":"u8"},{"name":"tokenMintBump","type":"u8"},{"name":"data","type":{"defined":"FairLaunchData"}}]},{"name":"updateFairLaunch","accounts":[{"name":"fairLaunch","isMut":true,"isSigner":false},{"name":"authority","isMut":false,"isSigner":true},{"name":"clock","isMut":false,"isSigner":false}],"args":[{"name":"data","type":{"defined":"FairLaunchData"}}]},{"name":"startPhaseThree","accounts":[{"name":"fairLaunch","isMut":true,"isSigner":false},{"name":"fairLaunchLotteryBitmap","isMut":false,"isSigner":false},{"name":"authority","isMut":false,"isSigner":true},{"name":"tokenMint","isMut":true,"isSigner":false}],"args":[]},{"name":"updateFairLaunchLotteryBitmap","accounts":[{"name":"fairLaunch","isMut":false,"isSigner":false},{"name":"fairLaunchLotteryBitmap","isMut":true,"isSigner":false},{"name":"authority","isMut":false,"isSigner":true}],"args":[{"name":"index","type":"u32"},{"name":"bytes","type":"bytes"}]},{"name":"createFairLaunchLotteryBitmap","accounts":[{"name":"fairLaunch","isMut":false,"isSigner":false},{"name":"fairLaunchLotteryBitmap","isMut":true,"isSigner":false},{"name":"authority","isMut":false,"isSigner":true},{"name":"payer","isMut":true,"isSigner":true},{"name":"systemProgram","isMut":false,"isSigner":false},{"name":"rent","isMut":false,"isSigner":false},{"name":"clock","isMut":false,"isSigner":false}],"args":[{"name":"bump","type":"u8"}]},{"name":"purchaseTicket","accounts":[{"name":"fairLaunchTicket","isMut":true,"isSigner":false},{"name":"fairLaunch","isMut":true,"isSigner":false},{"name":"treasury","isMut":true,"isSigner":false},{"name":"buyer","isMut":true,"isSigner":true},{"name":"payer","isMut":true,"isSigner":true},{"name":"systemProgram","isMut":false,"isSigner":false},{"name":"rent","isMut":false,"isSigner":false},{"name":"clock","isMut":false,"isSigner":false}],"args":[{"name":"bump","type":"u8"},{"name":"amount","type":"u64"}]},{"name":"createTicketSeq","accounts":[{"name":"fairLaunchTicketSeqLookup","isMut":true,"isSigner":false},{"name":"fairLaunch","isMut":true,"isSigner":false},{"name":"fairLaunchTicket","isMut":true,"isSigner":false},{"name":"payer","isMut":true,"isSigner":true},{"name":"systemProgram","isMut":false,"isSigner":false},{"name":"rent","isMut":false,"isSigner":false}],"args":[{"name":"bump","type":"u8"}]},{"name":"adjustTicket","accounts":[{"name":"fairLaunchTicket","isMut":true,"isSigner":false},{"name":"fairLaunch","isMut":true,"isSigner":false},{"name":"fairLaunchLotteryBitmap","isMut":false,"isSigner":false},{"name":"treasury","isMut":true,"isSigner":false},{"name":"systemProgram","isMut":false,"isSigner":false},{"name":"clock","isMut":false,"isSigner":false}],"args":[{"name":"amount","type":"u64"}]},{"name":"punchTicket","accounts":[{"name":"fairLaunchTicket","isMut":true,"isSigner":false},{"name":"fairLaunch","isMut":true,"isSigner":false},{"name":"fairLaunchLotteryBitmap","isMut":false,"isSigner":false},{"name":"payer","isMut":true,"isSigner":true},{"name":"buyerTokenAccount","isMut":true,"isSigner":false},{"name":"tokenMint","isMut":true,"isSigner":false},{"name":"tokenProgram","isMut":false,"isSigner":false}],"args":[]},{"name":"withdrawFunds","accounts":[{"name":"fairLaunch","isMut":true,"isSigner":false},{"name":"treasury","isMut":true,"isSigner":false},{"name":"authority","isMut":true,"isSigner":true},{"name":"tokenMint","isMut":true,"isSigner":false},{"name":"systemProgram","isMut":false,"isSigner":false}],"args":[]},{"name":"receiveRefund","accounts":[{"name":"fairLaunch","isMut":true,"isSigner":false},{"name":"treasury","isMut":true,"isSigner":false},{"name":"buyer","isMut":true,"isSigner":false},{"name":"buyerTokenAccount","isMut":true,"isSigner":false},{"name":"transferAuthority","isMut":false,"isSigner":true},{"name":"tokenMint","isMut":true,"isSigner":false},{"name":"tokenProgram","isMut":false,"isSigner":false},{"name":"systemProgram","isMut":false,"isSigner":false},{"name":"clock","isMut":false,"isSigner":false}],"args":[]},{"name":"restartPhaseTwo","accounts":[{"name":"fairLaunch","isMut":true,"isSigner":false},{"name":"clock","isMut":false,"isSigner":false}],"args":[]},{"name":"setTokenMetadata","accounts":[{"name":"fairLaunch","isMut":true,"isSigner":false},{"name":"authority","isMut":true,"isSigner":true},{"name":"payer","isMut":true,"isSigner":true},{"name":"metadata","isMut":true,"isSigner":false},{"name":"tokenMint","isMut":true,"isSigner":false},{"name":"tokenMetadataProgram","isMut":false,"isSigner":false},{"name":"tokenProgram","isMut":false,"isSigner":false},{"name":"systemProgram","isMut":false,"isSigner":false},{"name":"rent","isMut":false,"isSigner":false},{"name":"clock","isMut":false,"isSigner":false}],"args":[{"name":"data","type":{"defined":"TokenMetadata"}}]},{"name":"setParticipationNft","accounts":[{"name":"fairLaunch","isMut":true,"isSigner":false},{"name":"authority","isMut":false,"isSigner":true},{"name":"payer","isMut":true,"isSigner":true},{"name":"participationMint","isMut":true,"isSigner":false},{"name":"participationTokenAccount","isMut":true,"isSigner":false},{"name":"metadata","isMut":true,"isSigner":false},{"name":"masterEdition","isMut":true,"isSigner":false},{"name":"tokenMetadataProgram","isMut":false,"isSigner":false},{"name":"tokenProgram","isMut":false,"isSigner":false},{"name":"systemProgram","isMut":false,"isSigner":false},{"name":"rent","isMut":false,"isSigner":false},{"name":"clock","isMut":false,"isSigner":false}],"args":[{"name":"participationMintBump","type":"u8"},{"name":"participationTokenBump","type":"u8"},{"name":"participationModulo","type":"u8"},{"name":"data","type":{"defined":"TokenMetadata"}}]},{"name":"updateParticipationNft","accounts":[{"name":"fairLaunch","isMut":true,"isSigner":false},{"name":"authority","isMut":false,"isSigner":true},{"name":"metadata","isMut":true,"isSigner":false},{"name":"tokenMetadataProgram","isMut":false,"isSigner":false},{"name":"tokenProgram","isMut":false,"isSigner":false}],"args":[{"name":"participationModulo","type":"u8"},{"name":"data","type":{"defined":"TokenMetadata"}}]},{"name":"mintParticipationNft","accounts":[{"name":"fairLaunch","isMut":false,"isSigner":false},{"name":"fairLaunchTicket","isMut":true,"isSigner":false},{"name":"payer","isMut":true,"isSigner":true},{"name":"participationMint","isMut":true,"isSigner":false},{"name":"participationTokenAccount","isMut":true,"isSigner":false},{"name":"buyer","isMut":false,"isSigner":false},{"name":"buyerNftTokenAccount","isMut":false,"isSigner":false},{"name":"newMetadata","isMut":true,"isSigner":false},{"name":"newEdition","isMut":true,"isSigner":false},{"name":"newMint","isMut":true,"isSigner":false},{"name":"newMintAuthority","isMut":false,"isSigner":true},{"name":"metadata","isMut":true,"isSigner":false},{"name":"masterEdition","isMut":true,"isSigner":false},{"name":"editionMarkPda","isMut":true,"isSigner":false},{"name":"tokenMetadataProgram","isMut":false,"isSigner":false},{"name":"tokenProgram","isMut":false,"isSigner":false},{"name":"systemProgram","isMut":false,"isSigner":false},{"name":"rent","isMut":false,"isSigner":false}],"args":[]},{"name":"mintTokens","accounts":[{"name":"fairLaunch","isMut":true,"isSigner":false},{"name":"authority","isMut":false,"isSigner":true},{"name":"tokenAccount","isMut":true,"isSigner":false},{"name":"tokenProgram","isMut":false,"isSigner":false},{"name":"tokenMint","isMut":true,"isSigner":false}],"args":[{"name":"amount","type":"u64"}]}],"accounts":[{"name":"fairLaunch","type":{"kind":"struct","fields":[{"name":"tokenMint","type":"publicKey"},{"name":"treasury","type":"publicKey"},{"name":"treasuryMint","type":{"option":"publicKey"}},{"name":"authority","type":"publicKey"},{"name":"bump","type":"u8"},{"name":"treasuryBump","type":"u8"},{"name":"tokenMintBump","type":"u8"},{"name":"data","type":{"defined":"FairLaunchData"}},{"name":"numberTicketsUnSeqed","type":"u64"},{"name":"numberTicketsSold","type":"u64"},{"name":"numberTicketsDropped","type":"u64"},{"name":"numberTicketsPunched","type":"u64"},{"name":"numberTokensBurnedForRefunds","type":"u64"},{"name":"numberTokensPreminted","type":"u64"},{"name":"phaseThreeStarted","type":"bool"},{"name":"treasurySnapshot","type":{"option":"u64"}},{"name":"currentEligibleHolders","type":"u64"},{"name":"currentMedian","type":"u64"},{"name":"countsAtEachTick","type":{"vec":"u64"}},{"name":"participationModulo","type":"u8"},{"name":"participationMintBump","type":"u8"},{"name":"participationTokenBump","type":"u8"},{"name":"participationMint","type":{"option":"publicKey"}}]}},{"name":"fairLaunchLotteryBitmap","type":{"kind":"struct","fields":[{"name":"fairLaunch","type":"publicKey"},{"name":"bump","type":"u8"},{"name":"bitmapOnes","type":"u64"}]}},{"name":"fairLaunchTicket","type":{"kind":"struct","fields":[{"name":"fairLaunch","type":"publicKey"},{"name":"buyer","type":"publicKey"},{"name":"amount","type":"u64"},{"name":"state","type":{"defined":"FairLaunchTicketState"}},{"name":"bump","type":"u8"},{"name":"seq","type":"u64"},{"name":"gottenParticipation","type":"bool"}]}},{"name":"fairLaunchTicketSeqLookup","type":{"kind":"struct","fields":[{"name":"fairLaunchTicket","type":"publicKey"},{"name":"buyer","type":"publicKey"},{"name":"seq","type":"u64"},{"name":"bump","type":"u8"}]}}],"types":[{"name":"Creator","type":{"kind":"struct","fields":[{"name":"address","type":"publicKey"},{"name":"verified","type":"bool"},{"name":"share","type":"u8"}]}},{"name":"TokenMetadata","type":{"kind":"struct","fields":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"uri","type":"string"},{"name":"sellerFeeBasisPoints","type":"u16"},{"name":"creators","type":{"option":{"vec":{"defined":"Creator"}}}},{"name":"isMutable","type":"bool"}]}},{"name":"AntiRugSetting","type":{"kind":"struct","fields":[{"name":"reserveBp","type":"u16"},{"name":"tokenRequirement","type":"u64"},{"name":"selfDestructDate","type":"i64"}]}},{"name":"FairLaunchData","type":{"kind":"struct","fields":[{"name":"uuid","type":"string"},{"name":"priceRangeStart","type":"u64"},{"name":"priceRangeEnd","type":"u64"},{"name":"phaseOneStart","type":"i64"},{"name":"phaseOneEnd","type":"i64"},{"name":"phaseTwoEnd","type":"i64"},{"name":"lotteryDuration","type":"i64"},{"name":"tickSize","type":"u64"},{"name":"numberOfTokens","type":"u64"},{"name":"fee","type":"u64"},{"name":"antiRugSetting","type":{"option":{"defined":"AntiRugSetting"}}}]}},{"name":"FairLaunchTicketState","type":{"kind":"enum","variants":[{"name":"NoSequenceStruct"},{"name":"Unpunched"},{"name":"Punched"},{"name":"Withdrawn"}]}}],"errors":[{"code":300,"name":"IncorrectOwner","msg":"Account does not have correct owner!"},{"code":301,"name":"Uninitialized","msg":"Account is not initialized!"},{"code":302,"name":"MintMismatch","msg":"Mint Mismatch!"},{"code":303,"name":"TokenTransferFailed","msg":"Token transfer failed"},{"code":304,"name":"NumericalOverflowError","msg":"Numerical overflow error"},{"code":305,"name":"TimestampsDontLineUp","msg":"Timestamps of phases should line up"},{"code":306,"name":"CantSetPhaseThreeDatesYet","msg":"Cant set phase 3 dates yet"},{"code":307,"name":"UuidMustBeExactly6Length","msg":"Uuid must be exactly of 6 length"},{"code":308,"name":"TickSizeTooSmall","msg":"Tick size too small"},{"code":309,"name":"CannotGiveZeroTokens","msg":"Cannot give zero tokens"},{"code":310,"name":"InvalidPriceRanges","msg":"Invalid price ranges"},{"code":311,"name":"TooMuchGranularityInRange","msg":"With this tick size and price range, you will have too many ticks(>"},{"code":312,"name":"CannotUseTickSizeThatGivesRemainder","msg":"Cannot use a tick size with a price range that results in a remainder when doing (end-start)/ticksize"},{"code":313,"name":"DerivedKeyInvalid","msg":"Derived key invalid"},{"code":314,"name":"TreasuryAlreadyExists","msg":"Treasury Already Exists"},{"code":315,"name":"LotteryBitmapOnesMustEqualNumberOfTicketsSold","msg":"The number of ones in the lottery must equal the number of tickets sold in phase 1"},{"code":316,"name":"InvalidPurchaseAmount","msg":"Amount must be between price ranges and at a tick mark"},{"code":317,"name":"TreasuryMintMismatch","msg":"Treasury mint does not match"},{"code":318,"name":"NotEnoughTokens","msg":"Not enough tokens to pay for this minting"},{"code":319,"name":"NotEnoughSOL","msg":"Not enough SOL to pay for this minting"},{"code":320,"name":"InvalidTokenProgram","msg":"Sent up invalid token program"},{"code":321,"name":"CannotBuyTicketsOutsidePhaseOne","msg":"Cannot buy tickets outside phase one"},{"code":322,"name":"CannotCreateFairLaunchLotteryBitmapBeforePhaseTwoEnd","msg":"Cannot create the bitmap before phase two end"},{"code":323,"name":"CannotUpdateFairLaunchLotteryOncePhaseThreeLocked","msg":"Cannot update fair launch lottery once phase three locked"},{"code":324,"name":"SeqAlreadyExists","msg":"Seq already exists"},{"code":325,"name":"CannotSetFairLaunchLotteryUntilAllTicketsAreSequenced","msg":"Cannot set lottery until all tickets have sequence lookups using permissionless crank endpoint. Use CLI to make."},{"code":326,"name":"CanOnlySubmitZeroDuringPhaseThree","msg":"During phase three, since you did not pay up to the median, you can only withdraw your funds"},{"code":327,"name":"CanOnlySubmitDifferenceDuringPhaseThree","msg":"During phase three, since you paid above median, you can only withdraw the difference"},{"code":328,"name":"DidNotWinLotteryCanOnlyWithdraw","msg":"You did not win the lottery, therefore you can only withdraw your funds"},{"code":329,"name":"AccountShouldHaveNoDelegates","msg":"This account should have no delegates"},{"code":330,"name":"TokenMintToFailed","msg":"Token minting failed"},{"code":331,"name":"DuringPhaseTwoAndOneBuyerMustBeSigner","msg":"During phase two and one buyer must be signer"},{"code":332,"name":"InvalidFairLaunchTicketState","msg":"Invalid fair launch ticket state for this operation"},{"code":333,"name":"CannotCashOutUntilAllRefundsAndPunchesHaveBeenProcessed","msg":"Cannot cash out until all refunds and punches (permissionless calls) have been processed. Use the CLI."},{"code":334,"name":"CannotCashOutUntilPhaseThree","msg":"Cannot cash out until phase three"},{"code":335,"name":"CannotUpdateFairLaunchDataOnceInProgress","msg":"Cannot update fair launch variables once it is in progress"},{"code":336,"name":"PhaseTwoEnded","msg":"Not able to adjust tickets between phase two and three"},{"code":337,"name":"CannotPunchTicketWhenHavingPaidLessThanMedian","msg":"Cannot punch ticket when having paid less than median."},{"code":338,"name":"AlreadyWithdrawnCapitalAlotment","msg":"You have already withdrawn your seed capital alotment from the treasury."},{"code":339,"name":"NoAntiRugSetting","msg":"No anti rug settings on this fair launch. Should've checked twice."},{"code":340,"name":"SelfDestructNotPassed","msg":"Self destruct date has not passed yet, so you are not eligible for a refund."},{"code":341,"name":"TokenBurnFailed","msg":"Token burn failed"},{"code":342,"name":"NoTreasurySnapshot","msg":"No treasury snapshot present"},{"code":343,"name":"CannotRefundUntilAllTicketsHaveBeenPunchedOrDropped","msg":"Cannot refund until all existing tickets have been dropped or punched"},{"code":344,"name":"CannotRefundUntilPhaseThree","msg":"Cannot refund until phase three"},{"code":345,"name":"InvalidReserveBp","msg":"Invalid reserve bp"},{"code":346,"name":"InvalidAntiRugTokenRequirement","msg":"Anti Rug Token Requirement must be less than or equal to number of tokens being sold"},{"code":347,"name":"CannotPunchTicketUntilPhaseThree","msg":"Cannot punch ticket until phase three"},{"code":348,"name":"CannotPunchTicketUntilEqualized","msg":"Cannot punch ticket until you have refunded the difference between your given price and the median."},{"code":349,"name":"InvalidLotteryDuration","msg":"Invalid lottery duration"},{"code":350,"name":"PhaseThreeAlreadyStarted","msg":"Phase two already started"},{"code":351,"name":"PhaseTwoHasntEndedYet","msg":"Phase two hasnt ended yet"},{"code":352,"name":"LotteryDurationHasntEndedYet","msg":"Lottery duration hasnt ended yet"},{"code":353,"name":"FairLaunchMismatch","msg":"Fair launch ticket and fair launch key mismatch"},{"code":354,"name":"ParticipationTokenAccountAlreadyExists","msg":"Participation Token Account already exists"},{"code":355,"name":"InvalidParticipationModulo","msg":"Invalid participation modulo"},{"code":356,"name":"AlreadyMintedParticipation","msg":"Already got participation"},{"code":357,"name":"NotEligibleForParticipation","msg":"Not eligible for participation"},{"code":358,"name":"ParticipationMintMismatch","msg":"The mint on this account does not match the participation nft mint"},{"code":359,"name":"AccountOwnerShouldBeBuyer","msg":"Account owner should be buyer"},{"code":360,"name":"AccountOwnerShouldBeAuthority","msg":"Account owner should be fair launch authority"},{"code":361,"name":"TokenMintMismatch","msg":"Token mint mismatch"},{"code":362,"name":"CannotMintMoreTokensThanTotal","msg":"Cannot mint more tokens than are allowed by the fair launch"},{"code":363,"name":"CanOnlyPremintOnce","msg":"Due to concerns that you might mint, burn, then mint again and mess up the counter, you can only mint once before the FLP"},{"code":364,"name":"CannotMintTokensUntilAllCashedOut","msg":"Once phase three has begun, no more FLP tokens can be minted until all ticket holders have been given tokens"}]};
import { IdlAccounts } from '@project-serum/anchor';

export type FairLaunchTicketState = Record<string, Record<string, any>>
export const FairLaunchTicketState = {
  NoSequenceStruct: { nosequencestruct: {} },
  Unpunched: { unpunched: {} },
  Punched: { punched: {} },
  Withdrawn: { withdrawn: {} }
}
    

  

export type FairLaunch = IdlAccounts<FairLaunchIDL>["fairLaunch"]

export type FairLaunchLotteryBitmap = IdlAccounts<FairLaunchIDL>["fairLaunchLotteryBitmap"]

export type FairLaunchTicket = IdlAccounts<FairLaunchIDL>["fairLaunchTicket"]

export type FairLaunchTicketSeqLookup = IdlAccounts<FairLaunchIDL>["fairLaunchTicketSeqLookup"]
  
          