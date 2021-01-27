console.log(" welcome to census analyser")
const fs = require('fs');
const csv = require('csv-parser');
const { delimiter } = require('path');
let censusArray=[];
let stateCodeArray=[];
class StateCensusAnalyser{
    readCsv=(path,callback)=>{
      fs.createReadStream(path)
      .pipe(csv())
      .on('data', (row) => {
        censusArray.push(row);
      })
      .on('end',() => {
        callback(null,censusArray.length)
        console.log('CSV file successfully processed');
      })
    }
    typeCsv=(path,callback)=>{
      fs.createReadStream(path)
        .pipe(csv())
        .on('end',() => {
          callback(null,path)
          console.log('CSV file successfully processed');
        })
    }
    delimiterCsv=(path,callback)=>{
      fs.createReadStream(path)
      .pipe(csv(
        {delimiter:','}
      ))
      .on('end',() => {
        callback(null,delimiter)
        console.log('CSV file successfully processed');
      })
    }
    headerCsv=(path,callback)=>{
      fs.createReadStream(path)
      .pipe(csv())
      .on('headers', (headers) => {
        callback(null,headers.length)
      })
      .on('end',() => {
        console.log('CSV file successfully processed');
      })
    }
    readStateCodeCsv(path,callback){
      fs.createReadStream(path)
      .pipe(csv())
      .on('data', (row) => {
        stateCodeArray.push(row);
      })
      .on('end',() => {
        callback(null,stateCodeArray.length)
        console.log('CSV file successfully processed');
      })
    }

}
module.exports=new StateCensusAnalyser();