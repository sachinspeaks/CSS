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
  const randNum = Math.random() * 10;
  if (randNum <= 5) {
    setTimeout(() => {
      resolve(`Number was less than or equal to 5 ${randNum} to be precise`);
    }, 2000);
  } else {
    setTimeout(() => {
      reject(`Number was greater than 5 ${randNum} to be precise`);
    }, 2000);
  }
});

async function testFun() {
  const data = await promise();
  console.log(data);
}

testFun();
