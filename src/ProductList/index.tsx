
function ProductList(props) {
    const {products, addOrRemoveCart} = props

    return (
        <ul>
            {
                products.map((product) => {
                    const {name, price, id} = product
                    return <>
                        <li key={id}>{name} - {price}</li>
                        <button onClick={() => addOrRemoveCart(product)}>+/-</button>
                    </>
                })
            }
        </ul>
    )
}

export default ProductList
