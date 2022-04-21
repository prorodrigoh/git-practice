let fruits = ['apple', 'banana', 'orange', 'pineaple']

// add items
// fruits.push('mango') // add to the end
// fruits.unshift('kiwi') // add to the front

// remove items
// fruits.shift() // removes first element
// fruits.pop() //removes last element
// console.log(fruits)

// replace value by Null
// delete fruits[2]
// console.log(fruits)
// console.log(fruits.length)
// const res = (fruits[2])? 'Not null': 'Null'
// console.log(res)

const fruits2 = ['caju', 'watermelon', 'avocado']

// concatenate
let groceries = fruits.concat(fruits2)
// console.log(groceries)

// sort by
// groceries.sort()
// console.log(groceries)
// groceries.reverse()
// console.log(groceries)

// search an return index - case sensitive
// console.log(groceries.indexOf('caju'))

function checkArr(arr, target){
    // if (arr.indexOf(target) > -1){
    //     return true
    // }
    //
    // return false
    // 
    return arr.indexOf(target) !== -1
}

console.log(checkArr(groceries,'caju'))