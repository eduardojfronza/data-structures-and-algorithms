//  Dado um array ordenado e um valor alvo, implemente uma função que retorna o índice do alvo ou -1 se não encontrado.

function binarySearch(arr: number[], target: number) {
    let left: number = 0;
    let right: number = arr.length - 1;
    let mid: number = -1;

    while (left <= right) {
        mid = Math.floor((left + right) / 2);


        if (arr[mid] === target) {

            return mid
        } else if (arr[mid] > target) {

            right = mid - 1
        } else {
            console.log(`${arr[mid]} < ${target}`)
            left = mid + 1
        }
    }


    return -1;
}


console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 10], 3))