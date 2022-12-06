/*const skiSchool = ["aki", "lei", "aalam"];
const rollcall = [];
for (const student of skiSchool) {
  rollcall.push(student + "the skier");
}
console.log(skiSchool)
console.log(rollcall)
function studentRollCall(student) {
  return student + " the skier";
}
const skiSchool = ["aki", "guadalupe", "lei", "aalam"];
const rollCall = skiSchool.map(studentRollCall);
console.log(skiSchool)
console.log(rollCall)
const skiSchool = ["aki", "guadalupe", "lei", "aalam"];
const rollCall = skiSchool.map(function (student) {
  return student + " the skier";
});
console.log(skiSchool)
console.log(rollCall)
const skiSchool = ["aki", "guadalupe", "lei", "aalam"];
const rollCall = skiSchool.map((student) => student + " the skier");*/

//labtest

const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

const titleCased = () => {
  return tutorials.map((line) => {
    const words = line.split(" ");
    const word = words.map(
      (item) => item.charAt(0).toUpperCase() + item.slice(1)
    );
    const updatedTutorials = word.join(" ");
    return updatedTutorials;
  });
};
console.log(titleCased());
