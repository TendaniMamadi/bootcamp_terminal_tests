import assert from "assert"
import transportFee from "../transportFee.js"

describe('test my transportFee function', function(){
    it("if the shift is in the 'morning', return R20", function(){
        assert.equal(transportFee('morning'), 'R20');
       
    })

    it("Return R10 if 'afternoon' shift", function(){
        
        assert.equal(transportFee('afternoon'), 'R10');
       
    })

    it("If you work 'nightshift' you pay R0.00", function(){
       
        assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');
    })
})
