function sum(numbers) {
    let sum = [...numbers].reduce((num, acumulator) => num + acumulator)
    return sum
}
const vetor = [10, 20, 30, 40, 100, 10, 20, 30, 40, 100, 10, 20, 30, 40, 100, 10, 20, 30, 40, 100, 10, 20, 30, 40, 100]
console.log(sum(vetor))