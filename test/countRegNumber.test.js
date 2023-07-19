import assert from "assert"
import countRegNumber from "../functions/countRegNumber.js"

describe('test countRegNumber function',function(){
    
    it("it should return 3 registration numbers in the string",function(){
        var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
        assert.equal(regCount, 3);

    })

    it("it should return 2 registration numbers in the string",function(){
        var regCount = countRegNumber('CA 182736,CY 523519')
        assert.equal(regCount, 2);

       
    })

    it("it should return 1 registration number in the string",function(){

        var regCount = countRegNumber('CA 182736')
        assert.equal(regCount, 1);
    })
})
