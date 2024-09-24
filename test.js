// let fiveSecondPromise = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("ha bhai ho gaya tera kaam");
//     }, 5000);
//   });
// };

// fiveSecondPromise().then((data) => console.log(data));
// console.log("ye bhi hai");

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise ka data 5 second baad");
  }, 5000);
});

const asyfun = async () => {
  return promise;
};

const tem = async () => {
  const data = await asyfun();
  console.log(data);
};

console.log(tem());
console.log("ye to hoga");
