console.log(" welcome to census analyser")
const fs = require('fs');
const csv = require('csv-parser');
const { delimiter } = require('path');
let arr=[];
class StateCensusAnalyser{
    readCsv=(path,callback)=>{
      fs.createReadStream(path)
      .pipe(csv())
      .on('data', (row) => {
        arr.push(row);
      })
      .on('end',() => {
        callback(null,arr.length)
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
      .on('data', (row) => {
        arr.push(row);
      })
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

}
module.exports=new StateCensusAnalyser();