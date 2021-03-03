import { FaTimes } from 'react-icons/fa'

const Item = ({ item, deleteItem }) => {

    const price = Number(item.price)
    const formattedPrice = Math.round(price * 1e2) / 1e2
    
    return (
        <div className="item-container">
            <div className="item">
                <div className="item-id">{ item.id }</div>
                <p className="item-label">Item name</p>
                <p className="item-name"> { item.name } </p>
                <p className="item-label">Item price</p>
                <p className="item-price"> - $ { formattedPrice } </p>
                <FaTimes className="close" onClick={() => deleteItem(item)}/>
            </div>
        </div>
    )
}

export default Item
