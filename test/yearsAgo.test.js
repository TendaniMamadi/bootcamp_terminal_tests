import assert from "assert"
import yearsAgo from "../yearsAgo.js"

describe('test my year function', function(){
    it("it should take in a year and return how many years ago that year is from the current year.",function(){
        assert.equal((new Date().getFullYear() - 1954), yearsAgo(1954))
      
    })

    it("it should return NaN if string is passed.",function(){
       
        assert.equal((new Date().getFullYear() - 1989), yearsAgo("1989"));
    })

    it("it should return zero if no number is passed",function(){

        assert.equal((new Date().getFullYear()-0), yearsAgo(0));
    })
})
