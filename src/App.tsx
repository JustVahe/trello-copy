import InProgress from "./components/InProgress"
import Todo from "./components/Todo"
import Done from "./components/Done"
import { DndContext } from "@dnd-kit/core"

function App() {

  return (
    <>
    <div className="container">
      <h1 className="font-bold text-white text-5xl mt-5">Trello</h1>
      <div className="flex justify-between p-[15px] mt-4">
        <DndContext>
            <Todo />
            <InProgress />
            <Done />
        </DndContext>
      </div>
    </div>
    </>
  )
}

export default App
