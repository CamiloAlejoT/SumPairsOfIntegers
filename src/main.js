// Función solución del test
function solveProblem(inputArray, sum, min, max){
    const start = new Date().getTime()
    let obj = {}
    result = []
    inputArray.forEach(e => {
        const subs = sum - e
        if (obj[subs]){
            result.push([e,subs])
            obj[e] = false
        } else {
            obj[e] = true
        }
    });
    const end = new Date().getTime()
    console.log(`Input array: ${inputArray.length}\nRange:\n\tMin: ${min}\n\tMax: ${max}\nSum:${sum}\nRunning Time: ${end - start} ms`)
    console.log(result)
    validateResult(result, sum)
}


//Función validadora, verifica todas las sumas del vector resultante solo retorna true si todas las sumas son correctas 
function validateResult(newArr, sum){
    let flag = true
    for (let i = 0; i<newArr.length && flag; i++){
        if(newArr[i][0] + newArr[i][1] !== sum)
            return false
    }
    return true
}


// Función generadora el vector de entrada
function generateRandomInput(count, min, max){
    let newArr = []
    for (let i = 0; i <= count; i++)
        newArr.push(Math.floor(Math.random()*(max-min)+min))
    const sum = Math.floor(Math.random()*(max-min)+min)

    solveProblem(newArr, sum, min, max)
    //solveProblem([1,9,5,0,20,-4,12,16,7], 12, -4, 20)
}


// 1. cantidad de elementos que se encuentran en el arreglo de entrada
// 2. limite inferior para el rango de los números del vector y 
// 3. limite superior para el rango de los números del vector
generateRandomInput( parseInt(process.argv[2]),parseInt(process.argv[3]), parseInt(process.argv[4]))
