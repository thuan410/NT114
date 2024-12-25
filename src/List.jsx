
function List() {
    const fruits = [{id: 1, name: "Banana", calories: 95}, 
                    {id: 2,name: "Cocount", calories: 55},
                    {id: 3,name: "Apple", calories: 115},
                    {id: 4, name: "Orange", calories: 145}];

    //fruits.sort((a, b)=> a.name.localeCompare(b.name));
    //fruits.sort((a, b) => b.name.localeCompare(a.name));
    //fruits.sort((a, b) => a.calories - b.calories);
    //fruits.sort((a, b) => b.calories - a.calories);

    //const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    const HighCalFruits = fruits.filter(fruit => fruit.calories >= 100);

    const listItems = HighCalFruits.map(HighCalFruit => <li key = {HighCalFruit.id}>
                                             {HighCalFruit.name}: &nbsp;
                                             <b>{HighCalFruit.calories}</b>
                                             </li>);

    return(<ol>{listItems}</ol>);
}

export default List