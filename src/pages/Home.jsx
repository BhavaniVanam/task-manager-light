import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import TaskList from "../components/Tasklist";
const Home = () => {
    const navigate = useNavigate();
    const [tasks, setTasks] = useState([]);

    useEffect(()=>{
        const saved = localStorage.getItem("tasks");
        if(saved) setTasks(JSON.parse(saved));
    },[]);

    const handleEdit = (index) => {
        navigate(`/edit/${index}`, { state: tasks[index] });
    };

    const handleDelete = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };

    return (
        <>
            <div style={{ padding: "1rem" }}>
                <TaskList tasks={tasks} onEdit={handleEdit} onDelete={handleDelete} />
            </div>
        </>
    );
};

export default Home;