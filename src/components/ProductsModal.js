import './ProductsModal.css'
const ProductsModal = (props) => {
console.log(props.children)
    return (

        <div className={props.active ? "products_modal active" : 'products_modal'}>
            <div className="products_modalContent">
            <button onClick={() => props.setActive(false)}>X</button>
                {props.children}
            <button onClick={() => props.setActive(false)}>Купити</button>
            </div>
        </div>

    )}
export default ProductsModal;