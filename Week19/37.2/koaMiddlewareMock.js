function Koa() {
  const stack = [];
  const stack2 = [];
  return {
    use(someString) {
      typeof someString === "string" && stack.push(someString);
    },
    listen() {
      while (stack.length) {
        const shift = stack.shift();
        console.log(shift);
	      stack2.push(shift)
      }
      while (stack2.length) {
      	console.log(stack2.pop())
      }
    }
  };
}

const app = Koa();

app.use("Hello World");
app.use("Hello World2");
app.use("Hello World3");
app.use("Hello World4");
app.listen(8000);
