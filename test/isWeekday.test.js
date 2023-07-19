import assert from "assert"
import isWeekday from "../isWeekday.js"

describe('test isWeekday fuction', function(){
    it("it should return empty string if empty string passed",function(){
       
        assert.equal(isWeekday(''), '');
        assert.equal(isWeekday(''), '');
        assert.equal(isWeekday(''), '');
        assert.equal(isWeekday(''), '');
        assert.equal(isWeekday(''), '');

    })

    it("it should return false if its  Sunday",function(){
        
        assert.equal(isWeekday('Sunday'), false);

    })

    it("it should return true if is Monday",function(){
        
    
        assert.equal(isWeekday('Monday'), true);
        

    })
})
