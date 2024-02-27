import { useEffect } from "react";
import useInProgress from "../handlers/InProgressFetch";
import AddButton from "./AddButton";
import TaskItem from "./TaskItem";
import { v4 } from "uuid";
const InProgress = () => {

    const {inProgressData, getInProgress} = useInProgress();

    useEffect(() => getInProgress() , []);

    return ( 
        <div className="w-[32%] p-5 bg-slate-100 rounded-md shadow-sm shadow-slate-200 bg-opacity-50 backdrop-blur">
            <h2 className="text-white text-2xl">In Progress</h2>
            {
                !inProgressData || inProgressData.length === 0 ? (
                    <p className="text-cyan-50 text-3xl font-bold my-2">Please add tasks</p>
                ) : (
                    Array.from(inProgressData).map((item) => <TaskItem type="inProgress" key={v4()} name={item.taskName} id={item.id} />)
                )}
            <AddButton type="inProgress"/>
        </div>
     );
}
 
export default InProgress;