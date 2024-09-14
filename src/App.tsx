import React, { useEffect, useReducer, useState } from 'react';
import ReactDOM from 'react-dom';
import './App.scss';

import ParentSection from './sections/ParentSection';
import useSampleContext from './contexts/SampleContext';

function App() {
  // listing
  const myList: { listKey: number }[] = [{ listKey: 1 }, { listKey: 2 }, { listKey: 3 }];

  // useContext
  const { sampleValue } = useSampleContext();

  // useState
  const [myState, setMyState] = useState<boolean>(false);

  function clickStateButtonHandler() {
    setMyState(!myState);
  }

  // useEffect (w cleanup)
  useEffect(() => {
    console.log('this is from useEffect');

    const timeout = setTimeout(() => {
      console.log(`current state is ${myState}`);
    }, 2000);

    return () => {
      console.log('Cleanup for UseEffect');
      clearTimeout(timeout);
    };
  }, [myState]);

  // useReducer
  const counterReducer = (
    state: { count: number },
    action: { type: 'INCREMENT' | 'DECREMENT' | 'RESET' }
  ) => {
    switch (action.type) {
      case 'INCREMENT':
        return { count: state.count + 1 };
      case 'DECREMENT':
        return { count: state.count - 1 };
      case 'RESET':
        return { count: 0 };
      default:
        return state;
    }
  };
  const initialState = { count: 0 };
  const [state, dispatch] = useReducer(counterReducer, initialState);

  // Portals
  const backdropRoot: HTMLElement = document.getElementById('backdrop-root') as HTMLElement;

  return (
    <React.Fragment>
      {/* Rendering Lists */}
      {myList.map((cur, idx) => {
        return (
          <div>
            {cur.listKey.toString()} / {idx}
          </div>
        );
      })}

      {/* useContext */}
      <div>Current Context Value is {sampleValue.toString()}</div>

      {/* useState & useEffect */}
      <div>{myState.toString()}</div>
      <button onClick={clickStateButtonHandler}>toggle myState</button>

      {/* useReducer */}
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>

      {/* Portals */}
      {ReactDOM.createPortal(<div>Inserted Portal</div>, backdropRoot)}
      <header>
        <h1 className='header'>This is a fun title :3</h1>
      </header>
      <ParentSection />
    </React.Fragment>
  );
}

export default App;
