import './App.css'
import Counter from './Counter'
function App() {

  return (
    <>
      <h1>Test Run FoodTinder</h1>
      <Counter initCount={8}/>
      <Counter />
      <Counter initCount={3}/>
    </>
  )
}

export default App
