import allProducts from './components/products';
import iphone11 from './images/iphone11.png';
import './App.css';
import busket from './images/busket.png';
import Modal from './components/modal';
import { useState } from 'react';

function App() {
    const [modalActive, setModalActive]= useState(false);
    
  return (
    <div>
       
     <header>
        <div className="top-line">
            <ul className="horizontal-nav">
                <li>
                    <a href="#">Доставка</a>
                </li>
                <li>
                    <a href="#">Способи оплати</a>
                </li>
                <li>
                    <a href="#">Контакти</a>
                </li>
                <li>
                <button className="busketBtn"> <img className="busket" src={busket} alt="busket" /></button>
                </li>
                <li>
                    <button className='registration' onClick={()=>setModalActive(!modalActive)}>Реестрація  </button>
                </li>
                <div>
                <Modal active={modalActive} setActive={setModalActive} />
    </div>
            </ul>
        </div>
         </header>
        <div className="special">
            <p>Спеціальна пропозиція</p>
            <img className="iphone11" src={iphone11} alt="iphone11" />
            <p>
              Ціна: 17 973
            </p>
            <button className='buyBtn'>Купити</button>
        </div>
        <div className='category1'>
        </div>
        <div className='category2'>

        </div>
        <div className='category3'>

        </div>
    </div>

       
);
}

export default App;
