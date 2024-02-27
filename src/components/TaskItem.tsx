import { useState } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import useTodo from "../handlers/TodoFetch";
import useInProgress from "../handlers/InProgressFetch";
import useDone from "../handlers/DoneFetch";

const TaskItem = ({name, id, type} : {name : string, id : string, type : string}) => {

    const [enabled,setEnabled] = useState(false);
    const [update,setUpdate] = useState(false);
    const [updateValue,setUpdateValue] = useState("");

    const {getTodo,updateTodo,deleteTodo} = useTodo();
    const {getInProgress,updateInProgress, deleteInProgress} = useInProgress();
    const {getDone,updateDone, deleteDone} = useDone();

    const handleUpdate = (event : MouseEvent) => {

        event.preventDefault();

        switch (type) {
            case "todo":
                getTodo();
                updateTodo(updateValue,id);
                getTodo();
                break;
            case "inProgress":
                getInProgress();
                updateInProgress(updateValue,id);
                getInProgress();
                break;
            case "done":
                getDone();
                updateDone(updateValue,id);
                getDone();
                break;
        }

    }

    const handleDelete = () => {

        switch (type) {
            case "todo":
                getTodo();
                deleteTodo(id);
                getTodo();
                break;
            case "inProgress":
                getInProgress();
                deleteInProgress(id);
                getInProgress();
                break;
            case "done":
                getDone();
                deleteDone(id);
                getDone();
                break;
        }
        
    }

    return ( 
        <div onMouseOver={() => setEnabled(true)} onMouseOut={() => setEnabled(false)} 
        className={`w-full my-3 bg-slate-50 bg-opacity-70 backdrop-blur-lg 
        p-3 rounded-md shadow-sm shadow-slate-300 flex justify-between`}>
            {
                update ? 
                    <div className="w-full">
                        <input type="text" onChange={(e) => setUpdateValue(e.target.value)} defaultValue={name}
                            className="p-2 bg-slate-300 placeholder:text-slate-50 border-2 rounded-md border-slate-100 w-3/4 outline-none "
                        />
                        <button onClick={(event : MouseEvent) => handleUpdate(event)}
                                className={`p-2 bg-gradient-to-r from-blue-400 to-cyan-400 w-[23%] 
                                rounded-md text-transparent font-bold uppercase inline-block bg-clip-text 
                                transition-all hover:bg-clip-border hover:text-white hover:text-opacity-100 hover:border-none`}>
                                    Update
                        </button>
                    </div> 
                    : 
                    <p className="text-slate-700 font-light text-lg">{name}</p> 
            }
                        
            
            <div className={"w-[15%] flex justify-between transition-all " + (enabled ? "opacity-100 " : "opacity-0 ") + (update ? "hidden" : "block")}>
                <button className={"text-xl p-[5px] block"} onClick={() => handleDelete()}>
                    <AiOutlineDelete />
                </button>
                <button className={"text-xl p-[5px] block"} onClick={() => setUpdate(prev => !prev)}>
                    <AiOutlineEdit />
                </button>
            </div>
        </div>
     );
}
 
export default TaskItem;