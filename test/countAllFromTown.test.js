import assert from "assert"
import countAllFromTown from "../countAllFromTown.js"

describe('test my countAllFromTown',function(){
    it('it should return 3 when passed with registration numbers from Stellenbosch',function(){

        var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
        
        assert.equal(fromStellies, 3)

    })

    it('it should return 1 when passed with registration numbers from Kuilsrivier',function(){

        var fromKuilsriver = countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341','CF');
       
        assert.equal(fromKuilsriver, 1)
    })

    it('it should return 0 when passed with empty registration numbers string',function(){

        var fromKuilsriver = countAllFromTown('');
       
        assert.equal(undefined)
    })

})
