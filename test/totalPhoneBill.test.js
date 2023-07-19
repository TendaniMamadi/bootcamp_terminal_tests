import assert from "assert"
import totalPhoneBill from "../totalPhoneBill.js"

describe('test my totalPhoneBill function', function(){
    it("R0.65 per sms.", function(){
        assert.equal('R1.30', totalPhoneBill('sms, sms'));
    })

    it("it cost R2.75 per call.", function(){
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
    })

    it("return R0.00 if no call or sms", function(){
       
        assert.equal('R0.00', totalPhoneBill(''));
       
    })
})
