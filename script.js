// Promises .then Chaining
// slowMath.add(1, 1)
// .then((sum) => {
//     console.log(sum)
//     return slowMath.multiply(sum, 2)
// }).then((product) => {
//     console.log(product)
//     return slowMath.divide(product, 4)
// }).then((quotient) => {
//     console.log(quotient)
//     return slowMath.subtract(quotient, 3)
// }).then((difference) => {
//     console.log(difference)
//     return slowMath.add(difference, 98)
// }).then((sum2) => {
//     console.log(sum2)
//     return slowMath.remainder(sum2, 2)
// }).then((remainder) => {
//     console.log(remainder)
//     return slowMath.multiply(remainder, 50)
// }).then((product2) => {
//     console.log(product2)
//     return slowMath.remainder(product2, 40)
// }).then((remainder2) => {
//     console.log(remainder2)
//     return slowMath.add(remainder2, 32)
// }).then((sum3) => {
//     console.log(sum3)
//     console.log(`The final result is ${sum3}.`)
// }).catch((error) => {
//     console.log(error)
// })

// Async/Await
async function doMath() {
    try {
        results = await slowMath.add(1, 1);
        console.log(results)
        results = await slowMath.multiply(results, 2)
        console.log(results)
        results = await slowMath.divide(results, 4)
        console.log(results)
        results = await slowMath.subtract(results, 3)
        console.log(results)
        results = await slowMath.add(results, 98)
        console.log(results)
        results = await slowMath.remainder(results, 2)
        console.log(results)
        results = await slowMath.multiply(results, 50)
        console.log(results)
        results = await slowMath.remainder(results, 40)
        console.log(results)
        results = await slowMath.add(results, 32)
        console.log(results)
        console.log(`The final result is ${results}.`)
    } catch (error) {
        console.log(error)
    }
}

doMath()