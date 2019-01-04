const chai = require('chai');  
const assert = chai.assert;    // Using Assert style
const expect = chai.expect;    // Using Expect style
const should = chai.should();  // Using Should style

describe("Primeiro test para CI", () => {
    it("Integracao", () => {
        expect(5).equals(5)
    })
})