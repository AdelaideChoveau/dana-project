import { useState } from 'react';

const FilterBar = ({ areas, onNameFilter, onAreaFilter, onCategoryFilter}) =>{
    const [filters, setFilters] = useState({
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
        <div id="map">

            <div className="search-inline">
                <div className="filterSection">
                    <div className="filterBox">  
                        <label className="filterTitle">Name</label>
                            <input
                            type="text"
                            className="nameForm"
                            id="name"
                            value={filters.name}
                            onChange={handleInput("name")}></input>
                    </div>

                    <div className="filterBox">  
                    <label className="filterTitle">Area</label>
                    <select className="filterSelect" id="area">
                        <option value={filters.area} onChange={handleInput("area")}>Select</option>
                        {areas.map((area) => (
                            <option value={area} key={area}>
                                {area}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="filterBox">  
                    <label className="filterTitle">Categories</label>
                    <select className="filterSelect" id="category" onChange={handleInput("category")}>
                        <option value="">Still work in progress - </option>
                    </select>
                </div>

                <div className="filterBox">
                    <label className="filterTitle">Date available</label>
                    <input type="date" className="availableDate" id="available" onChange={handleInput("dateAvailable")}></input> 
                </div>

                <div className="searchfilterBox">
                    <button type="button" className="searchButton" 
                    //</div>onClick={handleSearch}
                    >Search </button>
                </div>



                </div>
            </div>
        </div>
    )
}

export default FilterBar