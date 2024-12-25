import React, {useState} from "react";

function Mycomponent() {
    const [cars, setcars] = useState([]);
    const [carYear, setcarYear] = useState(new Date().getFullYear());
    const [carMake, setcarMake] = useState("");
    const [carModel, setcarModel] = useState("");


    function handleAddCar() {
        const newCar = {year: carYear,
                        make: carMake,
                        model: carModel
        };
        setcars(c => [...cars, newCar]);
    }

    function handleRemoveCar(index) {
        setcars(c => c.filter((_,i) => i !== index));
    }

    function handleYearChange(event) {
        setcarYear(event.target.value);
    }

    function handleMakeChange(event) {
        setcarMake(event.target.value);
    }

    function handleModelChange(event) {
        setcarModel(event.target.value);
    }

    return(<div>
        <h2>List of Car Objects</h2>
        <ul>
            {cars.map((car, index) => 
            <li key={index} onClick={() => handleRemoveCar(index)}> 
            {car.year} {car.make} {car.model}
            </li>)}
        </ul>

        <input type="number" value={carYear} onChange={handleYearChange} /><br/>
        <input type="text" value={carMake} onChange={handleMakeChange} placeholder="Enter car make"/><br/>
        <input type="text" value={carModel} onChange={handleModelChange} placeholder="Enter car model"/><br/>
        <button onClick={handleAddCar}>Add Car</button>
           </div>);
}


export default Mycomponent