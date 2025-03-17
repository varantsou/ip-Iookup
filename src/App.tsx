import { useCallback, useState } from 'react';

import { IpForm } from './components/IpForm/IpForm';
import { Layout } from './components/Layout/Layout';

import './App.css'

function App() {
  const [rows, setRows] = useState([0]);

  const addRow = useCallback(() => {
    setRows((rows) => [...rows, rows.length])
  }, [])

  return (
    <Layout
      title="IP Address Lookup"
      subTitle="Enter one or more IP addresses to lookup their location."
      onAddRow={addRow}
      buttonText="+ Add"
    >
      <IpForm rows={rows} />
    </Layout>
  )
}

export default App
