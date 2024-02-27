import InProgress from "./components/InProgress"
import Todo from "./components/Todo"
import Done from "./components/Done"

function App() {

  return (
    <>
    <div className="container">
      <h1 className="font-bold text-white text-5xl mt-5">Trello</h1>
      <div className="flex justify-between p-[15px] mt-4">
        <Todo />
        <InProgress />
        <Done />
      </div>
    </div>
    </>
  )
}

export default App
