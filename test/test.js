const test=require('../source/censusanalyser')
const path='StateCensusData.csv'
const path1='Statecode.csv'
 let assert = require('chai').assert;
describe('indian state census Mocha Test',()=> {
    it('given a csv file should pass the test when the entries are equal',()=> {
        test.readCsv(path).then(resolve=>{
            assert.equal(resolve,29)
        })
    })

    it('given a csv file should pass the test when the entries are not equal',()=> {
        test.readCsv(path,(error,result)=>{
            if(error){
                console.log("error")
            }else{
                assert.notEqual(result,27)
            }
        })
    })

    it('given a file path should pass the test when the type is csv',()=> {
        test.typeCsv(path,(error,result)=>{
            if(error){
                console.log("error")
            }else{
                assert.equal(result,path)
            }
        })
    })

    it('given a csv file path should pass the test when the dlimiter is correct',()=> {
        test.delimiterCsv(path,(error,result)=>{
            if(error){
                console.log("error")
            }else{
                assert.equal(result,';')
            }
        })
    })

    it('given a csv file path should pass the test when the header is correct',()=> {
        test.headerCsv(path,(error,result)=>{
            if(error){
                console.log("error")
            }else{
                assert.equal(result,4)
            }
        })
    })
});

describe('indian state code Mocha Test',()=> {
    it('given a csv file should pass the test when the entries are equal',()=> {
        test.readStateCodeCsv(path1,(error,result)=>{
            if(error){
                console.log("error")
            }else{
                assert.equal(result,37)
            }
        })
    })

    it('given a csv file should pass the test when the entries are not equal',()=> {
        test.readStateCodeCsv(path1,(error,result)=>{
            if(error){
                console.log("error")
            }else{
                assert.notEqual(result,39)
            }
        })
    })

    it('given a file path should pass the test when the type is csv',()=> {
        test.typeCsv(path1,(error,result)=>{
            if(error){
                console.log("error")
            }else{
                assert.equal(result,path1)
            }
        })
    })

    it('given a csv file path should pass the test when the dlimiter is correct',()=> {
        test.delimiterCsv(path1,(error,result)=>{
            if(error){
                console.log("error")
            }else{
                assert.equal(result,';')
            }
        })
    })

    it('given a csv file path should pass the test when the header is correct',()=> {
        test.headerCsv(path1,(error,result)=>{
            if(error){
                console.log("error")
            }else{
                assert.equal(result,6)
            }
        })
    })
    it('given a csv file path should pass the test when the sorting is sucessfull and first entry matches',()=> {
        test.sortStateCensusInJasonAlphbetically(path,(result)=>{
                assert.equal(result,"Andhra Pradesh")
        })
    })
    it('given a csv file path should pass the test when the sorting is sucessfull and first entry matches',()=> {
        test.sortStateCensusInJasonAlphbetically(path1,(result)=>{
                assert.equal(result,"Andhra Pradesh")
        })
    })
    it('given a csv file path should pass the test when the sorting is sucessfull and first entry matches',()=> {
        test.sortMostPopulusToLeastPopulus(path,(error,result)=>{
            if (error){
                console.log(error)
            }else{
                 assert.equal(result,199812341)
            }
        })
    })

});