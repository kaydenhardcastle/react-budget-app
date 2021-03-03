import Header from './components/Header';
import AddButton from './components/AddButton';
import Items from './components/Items';
import {useState} from 'react'
import AddItem from './components/AddItem';
import Budget from './components/Budget';

function App() {

  const click = () => {
    setShowForm(!showForm)
  }

  const [showForm, setShowForm] = useState(false)

  const [budget, setBudget] = useState(40)

  const [items, setItems] = useState([
    {
      id: 1,
      name: 'Corn',
      price: 1.12
    },
    {
      id: 2,
      name: 'Soap',
      price: 0.85
    },
    {
      id: 3,
      name: 'Milk',
      price: 3.51
    },
    {
      id: 4,
      name: 'Drink',
      price: 2.19
    }
  ])

  const deleteItem = (item) => {
    setItems(items.filter((i) => i.id !== item.id))
    const newBudget = (Number(budget+item.price))
    const formattedBudget = Math.round(newBudget * 1e2) / 1e2
    setBudget(formattedBudget)
  }

  const addItem = (item) => {
    const id = items.length+1
    const newItem = { id, ...item }
    setItems([...items, newItem])
    const newBudget = (Number(budget-item.price))
    const formattedBudget = Math.round(newBudget * 1e2) / 1e2
    setBudget(formattedBudget)
  }

  const updateBudget = (e) => {
    const newBudget = (Number(e.target.value))
    const formattedBudget = Math.round(newBudget * 1e2) / 1e2
    setBudget(formattedBudget)
  }

  return (
    <div className="app">
      <Header title="React Budget App"/>
      <Budget budget={budget} updateBudget={updateBudget}/>
      {!showForm && <AddButton text="Add Item" click={click}/>}
      {showForm && <AddButton text="Close" click={click}/>}
      {showForm && <AddItem addItem={addItem}/>}
      <Items items={items} deleteItem={deleteItem}/>
    </div>
  );
}

export default App;
