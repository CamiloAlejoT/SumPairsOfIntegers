class solveProblem {
  getPairs(inputArray, sum, min, max) {debugger
    const start = new Date().getTime();
    let obj = {};
    const result = [];
    inputArray.forEach((e) => {
      const subs = sum - e;
      if (obj[subs]) {
        result.push([e, subs]);
        obj[e] = false;
      } else {
        obj[e] = true;
      }
    });
    const end = new Date().getTime();

    //console.log(`Input array: ${inputArray.length}\nRange:\n\tMin: ${min}\n\tMax: ${max}\nSum:${sum}\nRunning Time: ${end - start} ms`);
    console.log(result); 
    const res = this.validateResult( result, sum)
    return res
  }

  validateResult(newArr, sum){
        let flag = true
        for (let i = 0; i<newArr.length && flag; i++){
            if(newArr[i][0] + newArr[i][1] !== sum)
                return false
        }
        return true
  }

  
}


module.exports = new solveProblem();