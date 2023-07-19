import assert from "assert";
import isFromBellville from "../functions/isFromBellville.js"

describe('test isFromBellville function', function(){
    it('it should return registration that starts with "CY" when called with "Bellville"', function(){
        assert.equal(isFromBellville('CY 123'), true);
        assert.equal(isFromBellville('CY 223'), true);
    })

    it('Return false if registration is not from Bellville', function(){
        assert.equal(isFromBellville('CA 123'), false);
        
    })

    it('return undefined if passed with empty string', function(){
        assert.equal(isFromBellville(''), '');
        
    })
})
