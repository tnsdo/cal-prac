function add(num1: number, num2: number) {
  return num1 + num2;
}

interface VariableType {
  foo: number;
  bar: number;
}

function ex(num1: VariableType, num2: VariableType) {
  return num1.foo + num2.bar - (num1.bar + num2.foo);
}

function dd(num1: string, num2: number) {
  return Number(num1) + num2;
}

interface qq {
  name: string;
  age: number;
  score: { korean: number; english: number };
}
export function sc(user: qq[]) {
  let res: number = 0;
  for (let i = 0; i < user.length; i++) {
    res += user[i].score.korean;
  }
  return res / user.length;
}
