//pending 대기상태
//pulfilled 이행상태
//rejected 실패상태

function sayHello() {
  return new Promise((resolve, reject) => {
    // 성공하면 resolve
    // 실패하면 reject
    const hello = "hello hello";
    resolve(hello);

    //reject(new Error());
  });
}

sayHello().then((resolveData) => {
  console.log(resolveData);
  // resolveData로 hello를 받은 것을 볼 수 있다.
});

// reject 예제
sayHello()
  .then((resolveData) => {
    console.log(resolveData);
    return resolveData;
  })
  .then((resolveData) => {
    // 두번째 then은 첫번째의 return 값을 받아온다.
    console.log(resolveData);
    return resolveData;
  })
  .then((resolveData) => {
    // 두번째의 return 값을 받아온다.
    console.log(resolveData);
  })
  .catch((error) => {
    console.log(error);
    // error를 핸들링 할수 있게 해준다.
  });

// then을 많이 쓰게 되면 복잡해질 수 있기에 async, await 을 사용한다.
