import assert from "assert"
import fromWhere from "../functions/fromWhere.js"

describe('test my fromWhere function', function(){
    it('it should return the town the registration is from.', function(){
        assert.equal(fromWhere('CY 567489'), 'Bellville');
        
    })

    it('it should return empty string if passed with empty string', function(){
        assert.equal((''),'');
       
    })

    it('Otherwise return Some other place!', function(){
        assert.equal(fromWhere('ZN 568593'), 'Some other place!');
    })
})
