import { useState } from "react";
import useTodo from "../handlers/TodoFetch";

const AddTodoForm = ({setFormEnabled}) => {

    const [value, setValue] = useState("");
    const {getTodo,postTodo} = useTodo();

    return ( 
        <form className="bg-slate-50 bg-opacity-70 rounded-sm p-2 w-full mt-3 flex justify-between items-center">
            <input 
                onChange={(e) => setValue(e.target.value)} type="text" className="p-2 bg-slate-300 placeholder:text-slate-50 border-2 rounded-md border-slate-100 w-3/4 outline-none "/>
            <button type="button" onClick={
                (event) => {
                    event.preventDefault();
                    setFormEnabled(false);
                    getTodo();
                    postTodo(value);
                    getTodo();
                }
            }  className={`p-2 bg-gradient-to-r from-blue-400 to-cyan-400 w-[23%] 
            rounded-md text-transparent font-bold uppercase inline-block bg-clip-text 
            transition-all hover:bg-clip-border hover:text-white hover:text-opacity-100 hover:border-none`} >Add</button>
        </form>
     );
}
 
export default AddTodoForm;