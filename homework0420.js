// Pyramid problem:
// print:  (using a loop)
// #
// ##
// ###
// ####
// #####

// let prt = ''
// for (i=0; i < 5; i++){
//     prt += '#'
//     console.log(prt)
// }

// Extra for experts: 
// 1. Write a function named assignGrade that takes one argument, 
// a number score.
// Returns a grade for the score, either  "A," "B," "C," "D," or "F." 
// Call that function for a few different scores and 
// log the result to make sure it works.
// "A" - 100-91
// "B" -  90-71
// "C" -  70-61
// "D" -  60-51
// "F" -  50-0

function assignGrade (numGrade){
    if (numGrade > 90 && numGrade < 101)
        return "A"
    if (numGrade > 70 && numGrade < 91)
        return "B"
    if (numGrade > 60 && numGrade < 71)
        return "C"
    if (numGrade > 50 && numGrade < 61)
        return "D"
    if (numGrade < 51)
        return "F"
    return "Invalid grade"
}
