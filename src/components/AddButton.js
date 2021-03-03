const AddButton = ({ text, click }) => {

    return (
        <div>
            <button className="add-btn" onClick={click}> { text } </button>
        </div>
    )
}

export default AddButton
