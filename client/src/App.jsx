import React from 'react';
import styles from './App.module.css';

import Field from './components/Field';
import Languages from './components/Languages';
import Translate from './components/Translate';

function App() {
  return (
    <div>
      <Field />
      <Languages />
      <hr />
      <Translate />
    </div>
  );
}

export default App;
