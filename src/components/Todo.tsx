import { useEffect } from "react";
import useTodo from "../handlers/TodoFetch";
import AddButton from "./AddButton";
import TaskItem from "./TaskItem";
import { v4 } from "uuid";

const Todo = () => {

    const {todos, getTodo} = useTodo();

    useEffect(() => getTodo() , []);

    return ( 
        <div className="w-[32%] p-5 bg-slate-100 rounded-md shadow-sm shadow-slate-200 bg-opacity-50 backdrop-blur">
            <h2 className="text-white text-2xl">Todo</h2>
            {
                !todos || todos.length === 0 ? (
                    <p className="text-cyan-50 text-3xl font-bold my-2">Please add tasks</p>
                ) : (
                    Array.from(todos).map((item) => <TaskItem type="todo" key={v4()} name={item.taskName} id={item.id} />)
                )}
            <AddButton type="todo"/>
        </div>
     );
}
 
export default Todo;
 