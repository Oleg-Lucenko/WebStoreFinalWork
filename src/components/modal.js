import React from "react";
import './modal.css'
const Modal = ({active, setActive}) => {
    
    return (
        
        <div className={active ? "modal active" : 'modal'}>
            <div className="modalContent " onClick={e =>e.preventDefault()}>
                <form>
                    <h2>Регистрация</h2>
                    <div>
                        <label htmlfor="name">Name:</label>
                        <input type="text" id="name" name="name" required></input>
                    </div>
                    <div>
                        <label htmlfor="emal">Email:</label>
                        <input type="email" id="Email" name="Email" required></input>
                    </div>
                    <div>
                    <label htmlfor="password">Password:</label>
                    <input type="password" id="password" name="password" required></input>
                    </div>
                    <div>
                    <button type='submit' onClick={() => setActive(false)}>Зарегистрироваться</button>
                    </div>
                </form>
                </div>
                </div>
           
)}
export default Modal;