import "./App.css";

import styled from "styled-components";

const Main = styled.div`
  width: 200px;
  height: 400px;
  border-radius: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

const But = styled.div`
  display: grid;
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

const Zero = styled.div`
  grid-column: span 2;
  display: grid;
  color: white;
  font-size: 20px;
  background-color: #343434;
  width: 80px;
  height: 40px;
  border-radius: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
`;

const Butcon = styled(But)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 3px;
`;

const Cal1 = styled(But)`
  background-color: #a9a9a9;
  font-size: 17px;
  font-weight: 500;
  color: black;
`;
const Cal = styled(But)`
  background-color: #ff9900;
  font-weight: 500;
`;

const App = () => {
  return (
    <Main>
      <Butcon>
        <Cal1>AC</Cal1>
        <Cal1>+/-</Cal1>
        <Cal1>%</Cal1>
        <Cal>/</Cal>
        <But>7</But>
        <But>8</But>
        <But>9</But>
        <Cal>x</Cal>
        <But>4</But>
        <But>5</But>
        <But>6</But>
        <Cal>-</Cal>
        <But>1</But>
        <But>2</But>
        <But>3</But>
        <Cal>+</Cal>
        <Zero>0</Zero>
        <But>.</But>
        <Cal>=</Cal>
      </Butcon>
    </Main>
  );
};

export default App;
