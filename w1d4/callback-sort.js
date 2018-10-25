var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];


const sortStudents = (a, b) => {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();
  return nameA < nameB ? -1 : nameA > nameB ? 1 : b.age - a.age;
}


const studentMod = students.sort(sortStudents);
console.log(studentMod);

/* console.log(students.sort(function(name1, name2) {
  const nameA = name1.name.toUpperCase();
  const nameB = name2.name.toUpperCase();
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
})); */
