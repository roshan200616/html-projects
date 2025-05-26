var student = [
  { name: "Banu Priya",date:"15-03-2005",tamil: 90, english: 84, maths: 89, science: 89, social: 87 },
  { name: "Banu Priya", date:"05-03-2005", tamil: 90, english: 84, maths: 89, science: 89, social: 87 },
  { name: "Charan Raj", date:"30-11-2005", tamil: 76, english: 70, maths: 80, science: 75, social: 73 },
  { name: "Deepika S",  date:"19-05-2004",tamil: 88, english: 91, maths: 89, science: 93, social: 90 },
  { name: "Eswar M",  date:"27-01-2005",tamil: 67, english: 65, maths: 70, science: 68, social: 72 },
  { name: "Fathima N", date:"10-09-2004", tamil: 92, english: 89, maths: 94, science: 90, social: 88 },
  { name: "Gokul V", date:"02-06-2005", tamil: 81, english: 77, maths: 85, science: 83, social: 80 },
  { name: "Harini R", date:"25-04-2005", tamil: 78, english: 82, maths: 79, science: 80, social: 85 },
  { name: "Imran K",  date:"13-08-2004" ,tamil: 69, english: 75, maths: 72, science: 70, social: 74 },
  { name: "Janani S", date:"02-09-2005" ,tamil: 95, english: 90, maths: 100, science: 96, social: 94 },
  { name: "John s", date:"05-06-2005", tamil: 100, english: 100, maths: 100, science: 99, social: 100 },
  { name: "Arun Kumar", date:"22-05-2005",tamil: 100, english: 98, maths: 100, science: 98, social: 100 },
];
arrLenth=student.length
for(let i =0; i< arrLenth;i++) {
  student[i].total = student[i].tamil + student[i].english + student[i].maths + student[i].science + student[i].social;
};
student.sort((a, b) => {
  if (b.total !== a.total)
    return b.total - a.total; 
  if (b.maths !== a.maths) return b.maths - a.maths;
  if (b.science !== a.science) return b.science - a.science;
  if (b.social !== a.social) return b.social - a.social;
  if (b.tamil !== a.tamil) return b.tamil - a.tamil;
  if (b.english !== a.english) return b.english - a.english;
  if(b.name !== b.name)return a.date.localeCompare(b.date);
  const [aDay, aMonth, aYear] = a.date.split("-").map(Number);
  const [bDay, bMonth, bYear] = b.date.split("-").map(Number);
  const aDate = new Date(aYear, aMonth - 1, aDay);
  const bDate = new Date(bYear, bMonth - 1, bDay);
  return aDate - bDate; 
});
function assignRanks(arr) {
  let rank = 1;
  arr[0].rank = rank; 
  for (let i = 1; i < arr.length; i++) {
    const prev = arr[i - 1];
    const curr = arr[i];
    if (
      curr.total === prev.total &&
      curr.maths === prev.maths &&
      curr.science === prev.science &&
      curr.social === prev.social &&
      curr.tamil === prev.tamil &&
      curr.english === prev.english&&
      curr.name  === prev.name&&
      curr.date === prev.date
    ) {
      curr.rank = prev.rank;
    } else {
      curr.rank = i + 1;
    }
  }
}

assignRanks(student);
for (let i = 0; i < arrLenth; i++) {
  const s = student[i];
  console.log(`Name: ${s.name}, Total: ${s.total}, Rank: ${s.rank},Date: ${s.date}`);
}
