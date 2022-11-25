import Button from "./components/Button";
import ButtonBox from "./components/ButtonBox";
import CalProvider from "./Context/CalProvider";
import Screen from "./components/Screen";
import Wrapper from "./components/Wrapper";

const buttons = [
  ['C', '+-', '%', '/'],
  [7, 8, 9, 'x'],
  [4, 5, 6, '-'],
  [1, 2, 3, '+'],
  [0, '.', '=']
]

function App() {
  return (
    <CalProvider>
      <Wrapper>
        <Screen />
        <ButtonBox>
          {
            buttons.flat().map((btn, i) => (
              <Button
                key={i}
                button={btn}
              />
            ))
          }
        </ButtonBox>
      </Wrapper>
    </CalProvider>
  );
}

export default App;
