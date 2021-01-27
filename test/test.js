const test=require('../source/utlity')
const path='StateCensusData.csv'
 let assert = require('chai').assert;
describe('indian state census Mocha Test',()=> {
        it('should pass if the entry are equal',(done)=> {
        test.readCsv(path,(error,result)=>{
            if(error){
                console.log("error")
            }else{
                assert.equal(result,29)
            }
        })
        done();
    }).timeout(15000)
    it('should pass if the entry are unequal',(done)=> {
        test.readCsv(path,(error,result)=>{
            if(error){
                console.log("error")
            }else{
                assert.notEqual(result,27)
            }
        })
        done();
    }).timeout(15000)
    it('should pass if the entry are unequal',(done)=> {
        test.typeCsv(path,(error,result)=>{
            if(error){
                console.log("error")
            }else{
                assert.equal(result,path)
            }
        })
        done();
    }).timeout(15000)
    it('should pass if the delimiter is semicolon',(done)=> {
        test.delimiterCsv(path,(error,result)=>{
            if(error){
                console.log("error")
            }else{
                assert.equal(result,';')
            }
        })
        done();
    }).timeout(15000)
    it('should pass if the number of headers are 4',(done)=> {
        test.headerCsv(path,(error,result)=>{
            if(error){
                console.log("error")
            }else{
                assert.equal(result,4)
            }
        })
        done();
    }).timeout(15000)

});