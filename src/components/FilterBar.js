import { useState } from 'react';

const FilterBar = ({ areas, onNameFilter }) =>{
    const [name, setName] = useState("");

    const handleNameChange= (event) =>{
        const { value } = event.target;
        setName(value);
        onNameFilter(value);
    };
    
    
    
    console.log(areas);

    return (
        <div>
            <div>
                <h2 className="bottom">Filters</h2>
            </div> 

            <div>  
                <label className="nameTitle">Name</label>
                <input
                    type="text"
                    className="nameForm"
                    id="name"
                    onChange={handleNameChange}></input>
            </div>
            
            <div>  
                <label className="areaTitle">Area</label>
                <select className="areaSelect" id="area">
                    <option value="">Select</option>
                    {areas.map((area) => (
                        <option value={area} key={area}>
                            {area}
                        </option>
                    ))}
                </select>
            </div>

            <div>  
                <label className="categoryTitle">Categories</label>
                <select className="categorySelect" id="category">
                    <option value="">Select</option>
                    <option value="Integration">Integration</option>
                    <option value="Animals">Animals</option>
                    <option value="Elder people">Elder People</option>
                    <option value="Kids">Kids</option>
                </select>
            </div>

            <div>
                <label className="avilableDateTitle">Date available</label>
                <input type="date" className="availableDate" id="available"></input> 
            </div>
             
        </div>
    )
}

export default FilterBar