import Logo from "./components/Logo"
import Form from "./components/Form"
import Checklist from "./components/Checklist"
import Stats from "./components/Stats"

const listItems = [
  {id: 1, title: "Eat", done: false},
  {id: 2, title: "Sleep", done: true},
];

function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <Checklist listItems={listItems}/>
      <Stats />
    </div>
  );
}

export default App;
