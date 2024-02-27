import { useAppDispatch, useAppSelector } from "../redux/typedHooks";
import { setTodo, selectTodo } from "../redux/slices/todoSlice";
import ITask from "../types/itemTypes";
import {v4} from "uuid"

function useTodo(){
    
    const url : string = "http://localhost:8000/todo";

    const todos = useAppSelector(selectTodo);
    const dispatch = useAppDispatch();

    function getTodo(){
        fetch(url)
        .then(res => res.json()).
        then(data => dispatch(setTodo(data)));
    }

    function postTodo(name : string) {

        const body : ITask = {
            id : v4(),
            taskName : name,
            status : "done",
            queue : !todos || todos.length === 0 ? 0 : todos.length - 1
        }


        fetch(url, {
            method: "POST",
            body : JSON.stringify(body),
            headers : {
                "Content-type" : "application/json; charset=UTF-8"
            }
        })
        .then((res) => res.json())
        .then((data) => dispatch(setTodo(data)));
    }

    function updateTodo(name : string, id : string) {

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
        .then((data) => dispatch(setTodo(data)));
    }

    function deleteTodo(id: string) {
        fetch(`${url}/${id}` , {
            method : "DELETE"
        });
    }

    return {todos,getTodo,postTodo,updateTodo,deleteTodo};
}

export default useTodo;