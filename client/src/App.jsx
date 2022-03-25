import React from 'react';
import styles from './App.module.css';
import piazza from './piazza.jpeg';

import Test from './components/Test.jsx';

function App() {
  return (
    <div>
      <h1 className={styles.wow}>Hello from react!</h1>
      <Test />
      <img src={piazza} alt="" />
    </div>
  );
}

export default App;
