import React from "react";
import './modal.css'
import { useState } from 'react';
const Modal = ({active, setActive}) => {
    const [Username, setUserName] = useState('');
  const [Useremail, setUserEmail] = useState('');
  const [Userpassword, setUserPassword] = useState('');
 
  const handleNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setUserEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setUserPassword(event.target.value);
  };
 

  const handleSubmit = (event) => {
    event.preventDefault();
    setActive(false)
    localStorage.setItem('Username', Username);
    localStorage.setItem('Useremail', Useremail);
    localStorage.setItem('Userpassword', Userpassword);
    console.log('handleSubmit');

  };
    
    return (

      <div className="modal-registration-container">

        <a href="#" className={active ? 'overlay active' : 'overlay'}></a>
        
        <div className={active ? "modal active" : 'modal'}>

            <div className="modalContent">


            <button className="close-registration-btn" onClick={() => setActive(false)}></button>

                <form onSubmit={handleSubmit}>
                    <h2>Регистрация</h2>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" value={Username} onChange={handleNameChange} required></input>
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" value={Useremail} onChange={handleEmailChange} required></input>
                    </div>
                    <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" value={Userpassword} onChange={handlePasswordChange} required></input>
                    </div>
                    <div>
                    <button type='submit' className="submit-registration" onClick={() => setActive(false)}>Зарегистрироваться</button>
                    </div>
                </form>
                </div>
                </div>
        </div>
           
)}
export default Modal;