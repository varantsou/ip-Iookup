import './App.css'

import { IpList } from './components/IpList';
import { Button } from './components/Button'
import { useState } from 'react';

function App() {
  const [rows, setRows] = useState([0]);

  return (
    <>
      <h2 className="text-3xl font-bold">IP Lookup</h2>
      <div className="text-left">
        <p>Enter one or more IP addresses to lookup their location.</p>
        <Button
          className="my-3"
          variant="sky"
          onClick={() => setRows([...rows, rows.length])}
        >
          + Add
        </Button>
      </div>
      <IpList rows={rows} />
    </>
  )
}

export default App
