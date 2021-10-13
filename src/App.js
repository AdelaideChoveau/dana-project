import { useState, useEffect } from 'react';
import Map from './components/Map';
import FilterBar from './components/FilterBar';
import Presentation from './components/Presentation';
import Contact from './components/Contact';

function App() {
  const [records, setRecords] = useState([])
  const [filteredRecords, setFilteredRecords] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true)
      const res = await fetch('https://opendata-ajuntament.barcelona.cat/data/api/action/datastore_search?resource_id=796ee1c2-975a-4d68-8753-52df8c2fc304')
      const data = await res.json()

      setRecords(data.result.records)
       // these are the records we use to display markers on the map, because if we were to filter records we'd be overriding the
       // data that we retrieved when fetching 
      setFilteredRecords(data.result.records)
      setLoading(false)    
    }

    fetchEvents()
    
  }, [])

  // console.log(records);

  const generateAreaDataForDropdown = () =>{
    return [...new Set(records.map(ev => ev.addresses_district_name))];
  };

  const handleSearch = (filters) => {
    // we apply all filters one after the other and in the end
    // overwrite the filteredRecords state variable

    // filter by name
    let newRecords = [...records]
    
    if (filters.name) {
      newRecords = newRecords.filter(item => item.name.toLowerCase().includes(filters.name.toLowerCase()));
    }

    // filter by area

    if (filters.area) {
      newRecords = newRecords.filter(item => item.addresses_district_name === filters.area);
    }

    // filter by category

    if (filters.category) {
      newRecords = newRecords.filter(item => item.category === filters.category);
    }

    setFilteredRecords(newRecords)
  }

  return (
    <div>
      
      <Presentation />
        
      <FilterBar
      areas={generateAreaDataForDropdown()}
        // onNameFilter={handleFilterName}
        // onAreaFilter={handleFilterArea}s
        // onCategoryFilter={handleFilterCategory}
        onSearchClick={handleSearch}
      />

      <div>
        {/* {records.map((item) => {
          <Map item={item} key={item.id} />
        })} */}
      </div>
      <Map records={filteredRecords} />
    
      <Contact />
    
    </div>
    
  );
}

export default App;