import { useState, useEffect } from 'react';
import Map from './components/Map';
import FilterBar from './components/FilterBar';

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

  const generateAreaDataForDropdown = () =>{
    return [...new Set(records.map(ev => ev.addresses_district_name))];
  };

  const handleFilterName = (name) => {
    const filteredRecords = records.filter(item =>{
      if(item.name.toLowerCase().includes(name.toLowerCase())){
        return item;
      }
    });
    setRecords(filteredRecords)
  };

 


  return (
    <div>
      <h1>Dana Project</h1>
      <FilterBar
      areas={generateAreaDataForDropdown()}
      onNameFilter={handleFilterName}
      />
      <div>
        {records.map((item) => {
          <Map item={item} key={item.id} />
        })}
      </div>
      <Map records={records} />
    </div>
  );
}

export default App;
