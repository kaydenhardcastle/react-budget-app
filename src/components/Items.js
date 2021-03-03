import Item from './Item'

const Items = ({ items, deleteItem }) => {
    
    return (
        <div className="items-list-container">
            {items.map((item) => (
                <Item key={item.id} item={item} deleteItem={deleteItem}/>
            ))}
        </div>
    )
}

export default Items
