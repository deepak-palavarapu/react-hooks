import React from 'react';
import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import DataFetching from './components/DataFetching';

function App() {
  return (
    <div className="App">
      {/* <ClassCounter></ClassCounter>
      <HookCounter></HookCounter> */}
      {/* <HookCounterTwo></HookCounterTwo> */}
      {/* <HookCounterThree></HookCounterThree> */}
      <DataFetching></DataFetching>

    </div>
  );
}

export default App;
