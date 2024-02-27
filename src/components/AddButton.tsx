import { useState } from "react";
import AddTodoForm from "./AddTodoForm";
import AddInProgressForm from "./AddInProgressForm";
import AddDoneForm from "./AddDoneForm";

const AddButton = ({type} : {type : string}) => {

    const [formEnabled, setFormEnabled] = useState(false);

    return ( 
        <div>
            {formEnabled ?  
            (
                type === "todo" ? <AddTodoForm setFormEnabled = {setFormEnabled}/> :
                type === "inProgress" ? <AddInProgressForm setFormEnabled = {setFormEnabled} /> :
                type === "done" ? <AddDoneForm setFormEnabled = {setFormEnabled} /> : ""
            ): (
                <>
                    <button onClick={() => setFormEnabled(prev => !prev)} className="bg-slate-50 bg-opacity-70  rounded-sm p-2 w-full mt-3 flex justify-between items-center">
                        <p className="font-bold text-slate-500 text-2xl block align-middle pl-2">+</p>
                        <p className="font-light text-slate-500 text-lg block align-middle pr-2">Add task</p>
                    </button>
                </>
            )}
        </div>   
     );
}
 
export default AddButton;