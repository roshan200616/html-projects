var ta = 60;
var eng = 70;
var math = 80;
var sci = 90;
var social = 100;
function total(t, e, m, s, so) {
    return t + e + m + s + so;
}
console.log("total mark:", total(ta, eng, math, sci, social));


var mark = [60, 70, 80, 100, 90]
function sum(m) {
    let a = 0
    for (var i = 0; i < m.length; i++) {
        a += m[i]

    }
    return a
}
console.log("total mark:", sum(mark))


var list = [{
    tamil: 60,
    english: 70,
    maths: 80,
    science: 90,
    ss: 100
}]
function marktotal(marks) {
    let a = 0
    for (mark in marks[0]) {
        a += marks[0][mark]
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