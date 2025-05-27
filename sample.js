function calcTotal(tamil, e, m, s, so) {
    return tamil + e + m + s + so;
}
console.log("total mark:", calcTotal(60, 70, 80, 90, 100));


var mark = [60, 70, 80, 100, 90]
/* [60, 70, 80, 100, 90].reduce(function(total, mark) {
    console.log(total,mark)
    return total + mark
},0) */
function sum(marks) {
    let total = 0
    const totalLength = marks.length
    for (var i = 0; i < marks.length; i++) {
        total += marks[i]
    }
    return total
}
console.log("total mark:", sum(mark))


var list = [{
    tamil: 60,
    english: 70,
    maths: 80,
    science: 90,
    ss: 100
}]
function marktotal(marksArr) {
    let a = 0
    const marks = marksArr[0]
    for (var mark in marks) {
        a += marks[mark]
    }
    return a
}
console.log(marktotal(list))


var student = [{ tamil: 90, english: 70, maths: 60, science: 85, social: 98 },
{ tamil: 90, english: 70, maths: 60, science: 90, social: 98 }]
function totalmark(input) {
    var totals = []
    for (let i = 0; i < input.length; i++) {
        var a = 0
        for (value in input[i]) {
         
            a += input[i][value]
        }
        totals.push(a)
    }
    return totals
}
console.log(totalmark(student))

 var students=[[100,99,100,100,99],[100,100,100,100,100]]
 function listofmark(mark){
    total=[]
    for(let i=0;i<mark.length;i++){
       let a=0
       for (values of mark[i])
       { 
         a += values
       }
       total.push(a)
    }
    return total
 }
 console.log(listofmark(students))