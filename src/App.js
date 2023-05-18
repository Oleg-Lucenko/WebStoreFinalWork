import allProducts from './components/products';
import iphone11 from './images/iphone11.png';
import './App.css';
import busket from './images/busket.png';
import Modal from './components/modal';
import ProductsModal from './components/ProductsModal';
import { useState } from 'react';
import * as ReactDOM from 'react-dom';

function App() {
    const [modalActive, setModalActive]= useState(false);
    const [productsModalActive, setProductsModalActive]= useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleShowMore = (item) => {
        setSelectedItem(item);
        setProductsModalActive(true);
    };

  return (
    <div className='container'>

     <header>
        <div className="top-line">
            <ul className="horizontal-nav">
                <li>
                    <a href="#">Доставка</a>
                </li>
                <li>
                    <a href="#">Способы оплаты</a>
                </li>
                <li>
                    <a href="#">Контакты</a>
                </li>
                <li>
                <button className="busketBtn"> <img className="busket" src={busket} alt="busket" /></button>
                </li>
                <li>
                    <button className='registration' onClick={()=>setModalActive(!modalActive)}>Регистрация  </button>
                </li>
                <div>
                <Modal active={modalActive} setActive={setModalActive} />
    </div>
            </ul>
        </div>
         </header>
        <div className="special">
            <p>Специальное предложение</p>
            <img className="iphone11" src={iphone11} alt="iphone11" />
            <p>
              Ціна: 17 973
            </p>
            <button className='buyBtn'>Купити</button>
        </div>
        <div className='navigation'>
            <ul className='navigationList'>
                <li><button>Phones</button></li>
                <li><button>Macbooks</button></li>
                <li><button>Watches</button></li>
            </ul>
        </div>
        <div className='PhoneCategory'>
            {allProducts.filter(allProducts => allProducts.category === 'phones').map((item)=>(
                <div key={item.id} className='card'>
                <div>{item.name}</div>
                <div><img className='productImg' src={item.img} alt={item.name}></img></div>
                <div><button className='showMore' onClick={() => handleShowMore(item)}>Подробнее</button></div>
                </div>
            ))}

        </div>
        <div className='macbookCategory'>
        {allProducts.filter(allProducts => allProducts.category === 'macbooks').map((item)=>(
                <div key={item.id} className='card'>
                <div>{item.name}</div>
                <div><img className='productImg' src={item.img} alt={item.name}></img></div>
                <div><button className='showMore' onClick={() => handleShowMore(item)}>Подробнее</button></div>
                </div>
            ))}
        </div>
        <div className='AppleWatchCategory'>
        {allProducts.filter(allProducts => allProducts.category === 'watches').map((item)=>(
                <div key={item.id} className='card'>
                <div>{item.name}</div>
                <div><img className='productImg' src={item.img} alt={item.name}></img></div>
                <div><button className='showMore' onClick={() => handleShowMore(item)}>Подробнее</button></div>
                </div>
            ))}
        </div>
        <ProductsModal active={productsModalActive} setActive={setProductsModalActive}>{selectedItem && <div>{selectedItem.description}</div>}</ProductsModal>
    </div>
);
}

export default App;
