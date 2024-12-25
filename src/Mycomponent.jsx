import React, {useState} from "react";

function Mycomponent() {
    const [foods, setfoods] = useState(["Apple", "Banana", "Orange"]);

    function handleAddFood() {

        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";

        setfoods(f => [...f, newFood]);
    }
    
    function handleremoveFood(index) {
        setfoods(foods.filter((_, i) => i !== index));
    }
    
    return(<div>
        <h2>List of Food</h2>
        <ul>
            {foods.map((food, index) => <li key={index} onClick={() => handleremoveFood(index)}>
                {food}
                </li>)}
        </ul>
        <input type="text" id="foodInput" placeholder="Enter food name" />
        <button  onClick={handleAddFood}>Add Food</button>
          </div>);
    
}


export default Mycomponent