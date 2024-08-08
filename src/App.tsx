import "./App.css";

import { useState } from "react";
import React from "react";
import styled from "styled-components";

const Main = styled.div`
  width: 230px;
  height: 350px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
`;
const Input = styled.div`
  width: 200px;
  height: 50px;
  border: 2px solid #4b89dc;
  color: white;
  text-align: right;
  margin-bottom: auto;
  margin-top: 40px;
`;

const But = styled.button`
  color: white;
  font-size: 20px;
  background-color: #343434;
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
  width: 80px;
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
  font-size: 17px;
  font-weight: 500;
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
  const getNum = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCalc((prev) => prev + e.currentTarget.value);
  };
  return (
    <Main>
      <Input>{calc}</Input>
      <Butcon>
        <Cal1>AC</Cal1>
        <Cal1>+/-</Cal1>
        <Cal1>%</Cal1>
        <Cal>/</Cal>
        <But value={7} onClick={getNum}>
          7
        </But>
        <But value={8} onClick={getNum}>
          8
        </But>
        <But value={9} onClick={getNum}>
          9
        </But>
        <Cal>x</Cal>
        <But value={4} onClick={getNum}>
          4
        </But>
        <But value={5} onClick={getNum}>
          5
        </But>
        <But value={6} onClick={getNum}>
          6
        </But>
        <Cal>-</Cal>
        <But value={1} onClick={getNum}>
          1
        </But>
        <But value={2} onClick={getNum}>
          2
        </But>
        <But value={3} onClick={getNum}>
          3
        </But>
        <Cal>+</Cal>
        <Zero value={0} onClick={getNum}>
          0
        </Zero>
        <But>.</But>
        <Cal>=</Cal>
      </Butcon>
    </Main>
  );
};

export default App;
