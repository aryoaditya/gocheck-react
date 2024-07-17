import { useState } from "react"
import Logo from "./components/Logo"
import Form from "./components/Form"
import Checklist from "./components/Checklist"
import Stats from "./components/Stats"

function App() {
  const [listItems, setListItems] = useState([]);

  function handleAddItem(item) {
    setListItems((listItems) => [...listItems, item]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <Checklist listItems={listItems}/>
      <Stats />
    </div>
  );
}

export default App;
