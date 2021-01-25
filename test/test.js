const test=require('../source/utlity')
const path='StateCensusData.csv'
 let assert = require('chai').assert;
describe('indian state census positive Mocha Test',()=> {
        it('should return equal if the entrie',(done)=> {
        test.readCsv(path,(error,result)=>{
            if(error){
                console.log("error")
            }else{
                assert.equal(result,29)
            }
        })
        done();
    }).timeout(15000)   
});