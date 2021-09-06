import { useState, useEffect } from 'react';
import Map from './components/Map'

function App() {
  const [records, setRecords] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true)
      const res = await fetch('https://opendata-ajuntament.barcelona.cat/data/api/action/datastore_search?resource_id=796ee1c2-975a-4d68-8753-52df8c2fc304')
      const data = await res.json()

      setRecords(data.result.records)
      setLoading(false)
    }

    fetchEvents()

    
  }, [])
  console.log(records);
  return (
    <div>
      <Map records={records} />
    </div>
  );
}

export default App;
