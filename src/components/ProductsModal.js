import './ProductsModal.css'
const ProductsModal = (props) => {
console.log(props.children)
    return (

        <div className={props.active ? "products_modal active" : 'products_modal'}>
            <div className="products_modalContent">
            <button className="products_modal_close_btn" onClick={() => props.setActive(false)}>X</button>
                {props.children}
            <button className="products_modal_buy_btn" onClick={() => props.setActive(false)}>Купити</button>
            </div>
        </div>

    )}
export default ProductsModal;