import { useState } from 'react'

const FilterBar = ({ areas, onNameFilter, onAreaFilter, onCategoryFilter }) =>{
    const [filters, setFilters] = useSate({
        name: "",
        area: "",
        category: "",
        dateAvailable: "",
    })


    const handleInput= (field) => (event) =>{
        const { value } = event.target;
    
    setFilters({
        ...filters,
        [field]: value,
    });

        switch (field) {
            case "name":
                onNameFilter(value);
                break;
            case "area":
                onAreaFilter(value);
                break;
            case "category":
                onCategoryFilter(value);
                break;
            case "dateAvailable":
                break;             

            default:
                break;
        } 
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
                    value={filters.name}
                    onChange={handleInput("name")}></input>
            </div>
            
            <div>  
                <label className="areaTitle">Area</label>
                <select className="areaSelect" id="area">
                    <option value="" onChange={handleInput("area")}>Select</option>
                    {areas.map((area) => (
                        <option value={area} key={area}>
                            {area}
                        </option>
                    ))}
                </select>
            </div>

            <div>  
                <label className="categoryTitle">Categories</label>
                <select className="categorySelect" id="category" onChange={handleInput("category")}>
                    <option value="">Select</option>
                    <option value="Integration">Integration</option>
                    <option value="Animals">Animals</option>
                    <option value="Elder people">Elder People</option>
                    <option value="Kids">Kids</option>
                </select>
            </div>

            <div>
                <label className="avilableDateTitle">Date available</label>
                <input type="date" className="availableDate" id="available" onChange={handleInput("dateAvailable")}></input> 
            </div>

            <button type="submit">Search</button>
             
        </div>
    )
}

export default FilterBar