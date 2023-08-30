function sayHello() {
  return new Promise((resolve, reject) => {
    // 성공하면 resolve
    // 실패하면 reject
    const hello = "hello hello";
    resolve(hello);

    //reject(new Error());
  });
}

async function test() {
  const hello1 = await sayHello(); // 이것이 끝나면 밑에를 실행시키겠다.
  console.log(hello1);
}

test(); // hello hello
