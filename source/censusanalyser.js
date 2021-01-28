console.log(" welcome to census analyser")
const fs = require('fs');
const csv = require('csv-parser');
const { delimiter } = require('path');
const csvToJason=require('csvtojson');
let censusArray=[];
let stateCodeArray=[];
class StateCensusAnalyser{
    readCsv=(path)=>{
      return new Promise((resolve,reject)=>{
        fs.createReadStream(path)
        .pipe(csv())
        .on('data', (row) => {
          censusArray.push(row);
        })
        .on('end',() => {
          resolve(censusArray.length)
          console.log('CSV file successfully processed');
        })
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
    sortStateCensusInJasonAlphbetically=(path,callback)=>{
      csvToJason().fromFile(path).then(source=>{
        source.sort((a, b)=>{
          let x = a.State.toLowerCase();
          let y = b.State.toLowerCase();
          if (x < y) {return -1;}
          if (x > y) {return 1;}
          return 0;
      })
      callback(source[0].State)
    })
  }
    sortMostPopulusToLeastPopulus=(path,callback)=>{
      csvToJason().fromFile(path).then(source=>{
      source.sort((a, b)=>{return b.Population - a.Population});
      callback(source[0].Population)
      fs.writeFileSync("StateCensusData.json",JSON.stringify(source,null,2)
    )}
  )}
    sortLeastPopulationDensity=(path,callback)=>{
      csvToJason().fromFile(path).then(source=>{
      source.sort((a, b)=>{return a.DensityPerSqKm - b.DensityPerSqKm}
      );
      fs.writeFileSync("StateCensusData.json",JSON.stringify(source,null,2))
      callback(source[0].DensityPerSqKm)
    }
  )}

}
module.exports=new StateCensusAnalyser();