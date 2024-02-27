import { useAppDispatch, useAppSelector } from "../redux/typedHooks";
import { selectDone, setDone } from "../redux/slices/doneSlice";
import ITask from "../types/itemTypes";
import {v4} from "uuid"

function useDone(){
    
    const url : string = "http://localhost:8000/done";

    const done = useAppSelector(selectDone);
    const dispatch = useAppDispatch();

    function getDone(){
        fetch(url)
        .then(res => res.json()).
        then(data => dispatch(setDone(data)));
    }

    function postDone(name : string) {

        const body : ITask = {
            id : v4(),
            taskName : name,
            status : "done",
            queue : !done || done.length === 0 ? 0 : done.length - 1
        }

        fetch(url, {
            method: "POST",
            body : JSON.stringify(body),
            headers : {
                "Content-type" : "application/json"
            }
        })
        .then((res) => res.json())
        .then((data) => dispatch(setDone(data)));

    }

    function updateDone(name : string, id : string) {

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
        .then((data) => dispatch(setDone(data)));
    }

    function deleteDone(id: string | number) {
        fetch(`${url}/${id}` , {
            method : "DELETE"
        });
    }

    return {done,getDone,postDone,updateDone,deleteDone};
}

export default useDone;