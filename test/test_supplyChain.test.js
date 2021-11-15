let BN = web3.utils.BN;
let SupplyChain = artifacts.require("SupplyChain");

contract("SupplyChain", function(accounts){
    const [_owner, alice, bob] = accounts;
    const emptyAddress = "0x0000000000000000000000000000000000000000";

    const price = "1000";
    const notenoughamount = "500";
    const excessAmount = "2000";
    const name = "book";

    let instance;

    beforeEach(async () => {
        instance = await SupplyChain.new();
    });

    describe('Buying Process', () => {
        it("Should revert if the price enough", async () => {
            await instance.addItem(name, price, { from: alice });
            await catchRevert(instance.buyItem(0, { from: bob, value: notenoughamount }));
        })
    });
    
})