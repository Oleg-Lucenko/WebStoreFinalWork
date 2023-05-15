import React from "react";
import './modal.css'
const Modal = ({active, setActive}) => {
    
    return (
        
        <div className={active ? "modal active" : 'modal'}>
            <div className="modalContent " onClick={e =>e.preventDefault()}>
                <form>
                    <h2>Реестрація</h2>
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required></input>
                    <label for="emal">Email:</label>
                    <input type="email" id="Email" name="Email" required></input>
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" required></input>
                    <button type='submit' onClick={() => setActive(false)}>Зарееструватися</button>
                </form>
                </div>
                </div>
           
)}
export default Modal;