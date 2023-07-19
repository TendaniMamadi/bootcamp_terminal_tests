import assert from "assert"
import mostProfitableDepartment from "../mostProfitableDepartment.js"

describe('test my most profitable department and most profitable day origin function', function(){

    it('it should return the most profitable department name and most profitable day', function(){
        
        assert.equal('outdoor', mostProfitableDepartment(salesData), "Most profitable department is 'outdoor' for dataset 1");
    
        assert.equal('Thursday', mostProfitableDay(salesData), "Most profitable day is 'Thursday' for dataset 1");
    
        
    })


    it('it should return the most profitable department name and most profitable day from dataset 2', function(){

     
        assert.equal('electronics', mostProfitableDepartment(salesData2), "Most profitable department is 'electronics' for dataset 2");
        
        assert.equal('Wednesday', mostProfitableDay(salesData2), "Most profitable day is 'Wednesday' for dataset 2");
        
    })

    it('it should return the most profitable department name from different list', function(){

        assert.equal('outdoor', mostProfitableDepartment(salesData), "Most profitable department is 'outdoor' for dataset 1");
        assert.equal('electronics', mostProfitableDepartment(salesData2), "Most profitable department is 'electronics' for dataset 2");
        
       
    })
})
