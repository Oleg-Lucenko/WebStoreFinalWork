import './ProductsModal.css'
const ProductsModal = (props) => {

    return (

    <div className="modal-registration-container">

        <a href="#" className={props.active ? 'overlay active' : 'overlay'}></a>

        <div className={props.active ? "products_modal active" : 'products_modal'}>
            <div className="products_modalContent">
            <button className="products_modal_close_btn" onClick={() => props.setActive(false)}>X</button>
                {props.children}
            <button className="products_modal_buy_btn" onClick={() => {props.setActive(false); props.addToBasket(props.selectedItem)}}>Купити</button>
            </div>
        </div>
    </div>

    )}
export default ProductsModal;