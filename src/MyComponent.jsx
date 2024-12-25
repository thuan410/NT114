import React, {useState} from 'react';

function MyComponent() {

const [name, setname] = useState("");
const [quantity, setquantity] = useState("");
const [comment, setcomment] = useState("");
const [payment, setpayment] = useState("")
const [shipping, setshipping] = useState("");

function HandleNameChange(event) {
    setname(event.target.value);
}

function HandleQuantityChange(event) {
    setquantity(event.target.value);
}

function HandleComentChange(event) {
    setcomment(event.target.value);
}

function HandlePaymentChange(event) {
    setpayment(event.target.value);
}

function HandleShippingChange(event) {
    setshipping(event.target.value);
}


    return(
        <div>
            <input value={name} onChange={HandleNameChange} />
            <p>Name: {name}</p>

            <input value={quantity} onChange={HandleQuantityChange} type="number" />
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={HandleComentChange} name="" id=""
            placeholder="Enter delivery instructions"></textarea>
            <p>Commet: {comment}</p>
            
            <select value={payment} onChangeCapture={HandlePaymentChange} name="" id="">
                <option value="">Select an opinion</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Giftcard">Giftcard</option>
            </select>
            <p>Payment: {payment}</p>

            <label>
                <input type='radio' value="Pickup"
                       checked={shipping === "Pick Up"}
                       onChange={HandleShippingChange}/>
                Pick Up
            </label><br/>
            <label>
                <input type='radio' value="Here"
                       checked={shipping === "Here"}
                       onChange={HandleShippingChange}/>
                Here
            </label><br/>
            <label>
            <input type='radio' value="Delivery"
                       checked={shipping === "Delivery"}
                       onChange={HandleShippingChange}/>
                Delivery
            </label>
            <p>Shipping: {shipping}</p>
        </div>
    );
}

export default MyComponent