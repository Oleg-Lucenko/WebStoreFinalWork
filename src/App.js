import allProducts from './components/products';
import iphone11 from './images/iphone11.png';
import './App.css';
import basket from './images/basket.png';
import Modal from './components/modal';
import ProductsModal from './components/ProductsModal';
import Basket from './components/Basket.js';
import { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
    const [modalActive, setModalActive] = useState(false);
    const [productsModalActive, setProductsModalActive] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [basketActive, setBasketActive] = useState(false);
    const [storage, changeContent] = useState(Object.keys(localStorage));
    
    const [isVisible, setIsVisible] = useState({phones: false,macbooks: false,applewatches: false });

    const tooggleVisibillity = (divName) => {
        setIsVisible((prevState) => ({
          ...prevState,
          [divName]: !prevState[divName]
        }));
      };
   
    const handleShowMore = (item) => {
        setSelectedItem(item);
        setProductsModalActive(true);
    };

    const addToBasket = (item) => {

        let itemInStorageString = JSON.stringify(item);
        localStorage.setItem(`${item.id}`, itemInStorageString);
        changeContent(Object.keys(localStorage));
    };

  return (
    <div className={productsModalActive || modalActive? "container_modal" : "container"}>

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
                <button className="basketBtn" onClick={() => setBasketActive(!basketActive)}> 
                    {storage.length != 0 && <span className='items-in-basket-counter'>{storage.length}</span>}
                </button>     
                </li>
                <li>
                    <button className='registration' onClick={()=>setModalActive(!modalActive)}>Реєстрація</button>
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
            <button className='buyBtn' onClick={() => addToBasket(allProducts[0])}>Купити</button>
        </div>
        <div className='navigation'>
            <ul className='navigationList'>
                <li><button onClick={() => tooggleVisibillity('phones')}>Телефони</button></li>
                <li><button onClick={() => tooggleVisibillity('macbooks')}>Ноутбуки</button></li>
                <li><button onClick={() => tooggleVisibillity('applewatches')}>Годинники</button></li>
            </ul>
        </div>

        {isVisible.phones && <div className='PhoneCategory'>
            {allProducts.filter(allProducts => allProducts.category === 'phones').map((item)=>(
                <div key={item.id} className='card'>
                <div>{item.name}</div>
                <div><img className='productImg' src={item.img} alt={item.name}></img></div>
                <div><button className='showMore' onClick={() => handleShowMore(item)}>Детальніше</button></div>
                </div>
            ))}
        </div>}

        {isVisible.macbooks && <div className='macbookCategory'>
        {allProducts.filter(allProducts => allProducts.category === 'macbooks').map((item)=>(
                <div key={item.id} className='card'>
                <div>{item.name}</div>
                <div><img className='productImg' src={item.img} alt={item.name}></img></div>
                <div><button className='showMore' onClick={() => handleShowMore(item)}>Детальніше</button></div>
                </div>
            ))}
        </div>}

        {isVisible.applewatches && <div className='AppleWatchCategory'>
        {allProducts.filter(allProducts => allProducts.category === 'watches').map((item)=>(
                <div key={item.id} className='card'>
                <div>{item.name}</div>
                <div><img className='productImg' src={item.img} alt={item.name}></img></div>
                <div><button className='showMore' onClick={() => handleShowMore(item)}>Детальніше</button></div>
                </div>
            ))}
        </div>}

        <ProductsModal active={productsModalActive} setActive={setProductsModalActive} addToBasket={addToBasket} selectedItem={selectedItem}>
            {selectedItem &&
                <div>
                    <div>{selectedItem.name}</div>
                    <div><img className='products_modal_img' src={selectedItem.img} alt={selectedItem.name}></img></div>
                    <div>{selectedItem.description}</div>
                    <div>Ціна: {selectedItem.price}</div>
                </div>}
        </ProductsModal>

        <Basket storage={storage} changeContent={changeContent} basketActive={basketActive} setBasketActive={setBasketActive}/>
    </div>
);
}

export default App;
