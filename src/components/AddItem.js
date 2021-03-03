import { useState } from 'react'

const AddItem = ({ addItem }) => {

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)

    const submit = (e) => {
        e.preventDefault()

        if(!name) {
            alert("You must enter a name")
            return
        }
 
        if(!price) {
            alert("You must enter a price")
            return
        }

        addItem({ name, price })
        setName('')
        setPrice(0)        
    }

    return (
        <div>
            <form className="add-item-form" onSubmit={submit}>
                <h1 className="form-title">Add Item Form</h1>
                <label className="form-label">Item Name</label>
                <div className="name-form-control">
                    <input 
                    className="form-control"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}/>
                </div>
                <label className="form-label">Item Price</label>
                <div className="price-form-control">
                    <input 
                    className="form-control"
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}/>
                </div>
                <input className="save-btn" type="submit" value="Save"/>
            </form>
        </div>
    )
}

export default AddItem
