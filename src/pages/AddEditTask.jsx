import {useNavigate, useParams, useLocation} from "react-router-dom"
import { useState,} from "react";
import TaskForm from "../components/Taskform";

const AddEditTask=()=>{
    const navigate = useNavigate()
    const {id} = useParams();
    const location = useLocation();

    const [tasks, setTasks]=useState(()=>{
        const saved = localStorage.getItem("tasks");
        return saved? JSON.parse(saved) : [];
    })

    const isEdit = Boolean(id);
    const taskIndex = isEdit?parseInt(id) : -1;
    const taskToEdit = isEdit?location.state: null;

    const handleSubmit = (task) =>{
        let updatedTasks;

        if(isEdit && taskToEdit){
            updatedTasks = [...tasks];
            updatedTasks[taskIndex] = task;
        }else{
            updatedTasks=[...tasks, task]
        }

        setTasks(updatedTasks);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
        navigate("/")

    }
    //const handleAddTask = (newTask)=>{
    //const updated = [...TaskList, newTask];
    //setTasks(updated);
    //localStorage.setItem ("tasks", JSON.stringify(updated));  //updating localstorage with new list
    //navigate("/");
    //}

    return(
        <>
        <div style={{padding:"1rem"}}>
            <h2>{isEdit? "Edit task" : "Add Task"} Add Task</h2>
            <TaskForm onSubmit={handleSubmit} initialData={taskToEdit}/>
        </div>
        </>

    )
}

export default AddEditTask;