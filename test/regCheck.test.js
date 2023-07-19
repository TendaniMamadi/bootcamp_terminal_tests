import assert from "assert"
import regCheck from "../regCheck.js"

describe('test my regCheck function', function(){
    it("it should check if a registration number is for GP.", function(){

        assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
        assert.equal(regCheck('DC 55 YU GP', 'EC'), false);

    })

    it("undefined if empty string", function(){
       
        assert.equal(regCheck(''), '');
       
    })

    it("it should return L for Limpopo.", function(){
       

        assert.equal(regCheck('BCC 230 L', 'L'), true);
       

   
    })
})
