const sayHello = () => {
  console.log("Hello, world!");
};

setTimeout(() => {
  sayHello();
}, 0);

console.log("Me first");
