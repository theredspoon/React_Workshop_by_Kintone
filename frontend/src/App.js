// App.js - Parent React Component

// Get started by importing the React JavaScript library & Hooks
import React, { useState, useEffect } from 'react';

// Import the script to make GET API calls
import getRecords from './requests/getRecords.js';

// Import the list & form components
import RecordsList from './components/RecordsList.js'
import Form from './components/Form.js'

function App() {

  // Establish useState by giving it our initial state
  // const [state, setState] = useState(initialState);
  const [listItems, setListItems] = useState('*** now loading ***');

  // useEffect takes 2 arguments:
  // 1st = a function, called effect, that is executed when the React Component is rendered
  // 2nd = Array of dependencies to control when effect is to be executed after mounting the component; Empty array = only invoke effect once

  useEffect(() => {
    getRecords().then(
      result => setListItems(result)
    );
  }, []);

  return (
    // JSX includes html-like syntax
    <div>
      <RecordsList list={listItems} />
      {/* Append form component here */}
    </div>
  );
}

export default App;
