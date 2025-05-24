student = [
  {
    "Mathematics": 95,
    "Science": 88,
    "English": 92,
    "History": 85,
    "Geography": 90
  },
  {
    "Mathematics": 78,
    "Science": 82,
    "English": 80,
    "History": 75,
    "Geography": 77
  },
  {
    "Mathematics": 65,
    "Science": 70,
    "English": 68,
    "History": 72,
    "Geography": 69
  },
  {
    "Mathematics": 88,
    "Science": 91,
    "English": 85,
    "History": 89,
    "Geography": 87
  },
  {
    "Mathematics": 55,
    "Science": 60,
    "English": 58,
    "History": 62,
    "Geography": 59
  },
  {
    "Mathematics": 92,
    "Science": 95,
    "English": 94,
    "History": 90,
    "Geography": 93
  },

  {
    "Mathematics": 85,
    "Science": 87,
    "English": 83,
    "History": 80,
    "Geography": 86
  },
  {
    "Mathematics": 60,
    "Science": 58,
    "English": 62,
    "History": 55,
    "Geography": 59
  },
  {
    "Mathematics": 75,
    "Science": 78,
    "English": 80,
    "History": 77,
    "Geography": 76
  },
  {
    "Mathematics": 98,
    "Science": 88,
    "English": 99,
    "History": 99,
    "Geography": 100
  },
  {
    "Mathematics": 98,
    "Science": 88,
    "English": 99,
    "History": 99,
    "Geography": 100
  },
  {
    "Mathematics": 18,
    "Science": 38,
    "English": 39,
    "History": 59,
    "Geography": 100
  }
]

function caltotal(markArry) {
  var total = []
  var arrayLen = markArry.length
  for (let i = 0; i < arrayLen; i++) {
    var studentnum = 0
    const mark = markArry[i]
    studentnum = mark.Mathematics + mark.Science + mark.English + mark.History + mark.Geography
    total.push(studentnum)
  }
  return total
}
var rank = caltotal(student)
rank.sort((a, b) => b - a)
var num = 1
function calRank(value, ranking) {
  let valuelen = value.length
  for (let i = 0; i < valuelen; i++) {
    if (value[i] === value[i - 1]) {
      console.log("Total :", value[i], "rank :",i)
    } else {
      console.log("Total :", value[i], "rank :",i+1)
    }

  }
}
calRank(rank, num)
