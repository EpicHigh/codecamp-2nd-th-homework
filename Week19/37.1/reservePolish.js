function reservePolish() {
  const stack = [];
  return {
    size() {
      return stack.length;
    },
    find(num) {
      return stack[num] || "Not Found";
    },
    exec(opt) {
      if (opt === "+") {
        stack.push(stack.pop() + stack.pop());
      } else if (opt === "*") {
        stack.push(stack.pop() * stack.pop());
      } else if (opt === "-") {
        stack.push(stack.pop() - stack.pop());
      } else if (opt === "/") {
        stack.push(stack.pop() / stack.pop());
      } else if (opt === "=") {
        return stack.pop();
      } else {
        stack.push(opt);
      }
    }
  };
}

function calculate(arr) {
  const calc = reservePolish();
  for (let i of arr) {
    calc.exec(i);
  }
  return calc.exec("=");
}

console.log(calculate([19, 2, "+", 3, "+", 4, "*", 5, "+"]));
