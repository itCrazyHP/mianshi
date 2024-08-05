


function Cart(props) {
    const {cart} = props
    const price = cart.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.price
    }, 0)
    const brand = cart.map(({name}) => name).join(',')
    return (
        <>
            已添加商品:{brand}
            <div>总价格:{price}</div>
        </>
    )
}

export default Cart
