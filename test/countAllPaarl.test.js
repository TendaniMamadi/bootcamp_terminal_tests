import assert from "assert"
import countAllPaarl from "../functions/countAllPaarl.js"

describe('test countAllPaarl function',function(){
    it('it should return 3 strings that starts with "CJ" from Paarl',function(){
        
        assert.equal(3, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'));

        
    })

    it('it should return 2 strings that starts with "CJ" from Paarl',function(){
        
        assert.equal(2, countAllPaarl('CJ 345 123, CK 345, CJ 123'));
    })

    

})
