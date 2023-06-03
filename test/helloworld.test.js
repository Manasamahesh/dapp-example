// SampleContract.test.js
const Hello = artifacts.require("Hello");

contract("Hello", () => {
  let sampleContract;

  before(async () => {
    sampleContract = await Hello.deployed();
  });

  it("should set the Message", async () => {
    const newMessage = "HELLO ETHERUM";
    const result = await sampleContract.setMessage(newMessage);
    console.log("result",result)
     //await sampleContract.message();
     expect(result).to.equal('bar');
  });

  it("should get the Message", async () => {
    const result = await sampleContract.getMessage();
    console.log("result",result)
     //await sampleContract.message();
     assert.equal(result, "HELLO ETHERUM", "Value not set correctly");
  });
});
