import React, { useState } from "react";
import Container from "@material-ui/core/Container";

const Context = React.createContext();

function CountProvider({ value, children }) {
  const [count, setCount] = useState(value);
  return (
    <Context.Provider value={{ count, setCount }}>{children}</Context.Provider>
  );
}

function useCount() {
  const context = React.useContext(Context);
  if (context === undefined) {
    throw new Error("useCount must be used");
  }

  const increment = () => setCount((c) => c + 1);

  const { count, setCount } = context;
  return { count, increment, setCount };
}

function Display() {
  const { count } = useCount();
  return (<h2>count: {count}</h2>);
}

function Updater() {
  const { increment } = useCount();

  const handelClick = () => {
    increment();
  };

  return (<button onClick={handelClick}>Increment</button>);
}

export default function App() {
  return (
    <React.Fragment>
      <Container maxwidth="md">
      <h3>COUNTER APP</h3>
        <CountProvider value={10}>
          <Display />
          <Updater />
        </CountProvider>
      </Container>
    </React.Fragment>
  );
}
