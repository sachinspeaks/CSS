const promise = new Promise((resolve, reject) => {
  const randNum = Math.random() * 10;
  if (randNum <= 5) {
    setTimeout(() => {
      resolve(
        `Number was less than or equal to 5 ${Math.ceil(randNum)} to be precise`
      );
    }, 2000);
  } else {
    setTimeout(() => {
      reject(`Number was greater than 5 ${Math.ceil(randNum)} to be precise`);
    }, 2000);
  }
});

async function testFun() {
  try {
    const data = await promise;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

testFun();
