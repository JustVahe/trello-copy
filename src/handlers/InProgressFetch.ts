import { useAppDispatch, useAppSelector } from "../redux/typedHooks";
import { selectInProgress, setInProgress } from "../redux/slices/inProgressSlice";
import ITask from "../types/itemTypes";
import {v4} from "uuid"

function useInProgress(){
    
    const url : string = "http://localhost:8000/inProgress";

    const inProgressData = useAppSelector(selectInProgress);
    const dispatch = useAppDispatch();

    function getInProgress(){
        fetch(url)
        .then(res => res.json()).
        then(data => dispatch(setInProgress(data)));
    }

    function postInProgress(name : string) {

        const body : ITask = {
            id : v4(),
            taskName : name,
            status : "done",
            queue : !inProgressData || inProgressData.length === 0 ? 0 : inProgressData.length - 1
        }

        fetch(url, {
            method: "POST",
            body : JSON.stringify(body),
            headers : {
                "Content-type" : "application/json; charset=UTF-8"
            }
        })
        .then((res) => res.json())
        .then((data) => dispatch(setInProgress(data)));
    }

    function updateInProgress(name : string, id : string) {

        const body = {
            taskName : name,
        }

        fetch(`${url}/${id}`, {
            method: "PATCH",
            body : JSON.stringify(body),
            headers : {
                "Content-type" : "application/json; charset=UTF-8"
            }
        })
        .then((res) => res.json())
        .then((data) => dispatch(setInProgress(data)));
    }

    function deleteInProgress(id: string | number) {
        fetch(`${url}/${id}` , {
            method : "DELETE"
        });
    }

    return {inProgressData,getInProgress,postInProgress,updateInProgress,deleteInProgress};
}

export default useInProgress;