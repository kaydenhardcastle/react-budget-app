const Budget = ({ budget, updateBudget }) => {
    return (
        <div className="budget-container">
            <div className="budget-title">Current Budget</div>
            <p className="dollar">$</p>
                <input 
                className="budget" 
                value={budget} 
                type="number"
                onChange={updateBudget}/>
        </div>
    )
}

export default Budget
