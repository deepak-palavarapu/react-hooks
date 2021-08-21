import React from 'react';
import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import DataFetching from './components/DataFetching';
import UseContextHook from './components/UseContextHook';

export const userContext = React.createContext()
function App() {
  return (
    <div className="App">
      {/* <ClassCounter></ClassCounter>
      <HookCounter></HookCounter> */}
      {/* <HookCounterTwo></HookCounterTwo> */}
      {/* <HookCounterThree></HookCounterThree> */}
      {/* <DataFetching></DataFetching> */}
      <userContext.Provider value={'Vishwas'}>
        <UseContextHook></UseContextHook>
      </userContext.Provider>
    </div>
  );
}

export default App;
