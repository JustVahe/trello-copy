import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import useDone from "../handlers/DoneFetch";
import AddButton from "./AddButton";
import TaskItem from "./TaskItem";
import { useEffect } from "react";
import { v4 } from "uuid";

const Done = () => {

    const {done, getDone} = useDone();

    useEffect(() => getDone() , []);

    return ( 
        <div className="w-[32%] p-5 bg-slate-100 rounded-md shadow-sm shadow-slate-200 bg-opacity-50 backdrop-blur">
            <h2 className="text-white text-2xl">Done</h2>
            {
                !done || done.length === 0 ? (
                    <p className="text-cyan-50 text-3xl font-bold my-2">Please add tasks</p>
                ) : 
                <SortableContext items={Array.from(done)} strategy={verticalListSortingStrategy}>
                    {Array.from(done).map((item) => (<TaskItem type="todo" key={v4()} name={item.taskName} id={item.id} />))}
                </SortableContext>
            }
            <AddButton type="done"/>
        </div>
     );
}
 
export default Done;