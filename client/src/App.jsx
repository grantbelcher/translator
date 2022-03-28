import React, { useState } from 'react';
import styles from './App.module.css';

import Field from './components/Field';
import Languages from './components/Languages';
import Translate from './components/Translate';

function App() {
  const [language, setLanguage] = useState('ru');
  const [text, setText] = useState('');

  console.log(text, 'look here');

  return (
    <div>
      <Field label="Enter English: " onChange={setText} value={text} />
      <Languages language={language} onLanguageChange={setLanguage} />
      <hr />
      <Translate text={text} language={language} />
    </div>
  );
}

export default App;
