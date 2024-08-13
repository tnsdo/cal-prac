import "./App.css";

import { useState } from "react";
import React from "react";
import styled from "styled-components";

const Main = styled.div`
  width: 200px;
  height: 350px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

interface InputProps {
  length: number;
}

const Input = styled.div<InputProps>`
  width: 190px;
  height: 50px;
  color: white;
  text-align: right;
  font-size: 30px;
  margin-bottom: auto;
  margin-top: 70px;
  font-size: ${(props) => (props.length > 10 ? "16px" : "24px")};
`;

const But = styled.button`
  color: white;
  font-size: 20px;
  background-color: #343434;
  font-size: 17px;
  font-weight: 500;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
`;

const Zero = styled.button`
  grid-column: span 2;
  display: grid;
  color: white;
  font-size: 20px;
  background-color: #343434;
  width: 90px;
  height: 40px;
  border-radius: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
`;

const Butcon = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 5px;
  margin-top: 10px;
  margin-bottom: 15px;
`;

const Cal1 = styled.button`
  background-color: #a9a9a9;
  font-size: 14px;
  font-weight: 1000;
  color: black;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
`;

const Cal = styled.button`
  background-color: #ff9900;
  font-weight: 500;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
`;

const App = () => {
  const [calc, setCalc] = useState("");
  const [operCheck, setOperCheck] = useState(false);
  const [pointCheck, setPointCheck] = useState(true);

  const getNum = (e: React.MouseEvent<HTMLButtonElement>) => {
    const value = e.currentTarget.value;
    setCalc((prev) => (prev === "0" ? value : prev + value));
    setOperCheck(true);
  };

  const getOper = (e: React.MouseEvent<HTMLButtonElement>) => {
    const value = e.currentTarget.value;
    if (value === "%") {
      if (calc) {
        try {
          const currentNumber = parseFloat(calc);
          const percentageValue = currentNumber * 0.01;
          setCalc(String(percentageValue));
          setOperCheck(true);
          setPointCheck(true);
        } catch {
          setCalc("");
        }
      }
    } else if (operCheck) {
      setCalc((prev) => prev + value);
      setOperCheck(false);
      setPointCheck(true);
    }
  };

  const getPoint = (e: React.MouseEvent<HTMLButtonElement>) => {
    const value = e.currentTarget.value;
    if (calc.length > 0 && pointCheck) {
      setCalc((prev) => prev + value);
      setPointCheck(false);
    }
  };

  const getResult = () => {
    try {
      const replace_str = calc.replace(/x/gi, "*").replace(/\//gi, "/");
      const result = eval(replace_str);
      if (isNaN(result) || result === Infinity) {
        alert("계산할 수 없습니다.");
        setCalc("");
      } else {
        setCalc(String(result));
        setPointCheck(true);
        setOperCheck(true);
      }
    } catch {
      alert("계산할 수 없습니다.");
      setCalc("");
    }
  };

  const delCalc = () => {
    if (calc.length > 0) {
      const lastChar = calc.slice(-1);
      if (lastChar === ".") setPointCheck(true);
      if (isNaN(Number(lastChar))) setOperCheck(true);
      const str = String(calc).slice(0, -1);
      setCalc((prev) => str);
    }
  };

  const allClear = () => {
    setPointCheck(true);
    setOperCheck(false);
    setCalc("");
  };

  return (
    <Main>
      <Input length={calc.length}>{calc || "0"}</Input>
      <Butcon>
        <Cal1 onClick={allClear}>AC</Cal1>
        <Cal1 onClick={delCalc}>DEL</Cal1>
        <Cal1 value="%" onClick={getOper}>
          %
        </Cal1>
        <Cal value="/" onClick={getOper}>
          /
        </Cal>
        <But value="7" onClick={getNum}>
          7
        </But>
        <But value="8" onClick={getNum}>
          8
        </But>
        <But value="9" onClick={getNum}>
          9
        </But>
        <Cal value="x" onClick={getOper}>
          x
        </Cal>
        <But value="4" onClick={getNum}>
          4
        </But>
        <But value="5" onClick={getNum}>
          5
        </But>
        <But value="6" onClick={getNum}>
          6
        </But>
        <Cal value="-" onClick={getOper}>
          -
        </Cal>
        <But value="1" onClick={getNum}>
          1
        </But>
        <But value="2" onClick={getNum}>
          2
        </But>
        <But value="3" onClick={getNum}>
          3
        </But>
        <Cal value="+" onClick={getOper}>
          +
        </Cal>
        <Zero value="0" onClick={getNum}>
          0
        </Zero>
        <But value="." onClick={getPoint}>
          .
        </But>
        <Cal onClick={getResult}>=</Cal>
      </Butcon>
    </Main>
  );
};

export default App;
