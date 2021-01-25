console.log(" welcome to census analyser")
const fs = require('fs');
const csv = require('csv-parser');
let arr=[];
class StateCensusAnalyser{
    readCsv=(path,callback)=>{
      fs.createReadStream(path)
      .pipe(csv())
      .on('data', (row) => {
        arr.push(row);
      })
      .on('end',() => {
        return callback(null,arr.length)
        console.log('CSV file successfully processed');
      })
      return arr.length
    };
    
}
module.exports=new StateCensusAnalyser();