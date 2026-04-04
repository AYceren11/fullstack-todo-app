import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]); // Görevleri tutacak state
  const [newTask, setNewTask] = useState(""); // Input alanını tutacak state

  // 1. Verileri Backend'den Çekme (GET)
  const fetchTasks = async () => {
    try {
      const response = await fetch("http://localhost:3000/tasks");
      const data = await response.json();
      setTasks(data);
    } catch (err) {
      console.error("Veri çekme hatası:", err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // 2. Yeni Görev Ekleme (POST)
  const addTask = async () => {
    if (!newTask) return;
    try {
      await fetch("http://localhost:3000/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: newTask }),
      });
      setNewTask(""); // Inputu temizle
      fetchTasks(); // Listeyi güncelle
    } catch (err) {
      console.error("Ekleme hatası:", err);
    }
  };
  const deleteTask = async (id) => {
    await fetch(`http://localhost:3000/tasks/${id}`, { method: "DELETE" });
    fetchTasks(); // Listeyi tazele
  };

  return (
    <div className="App">
      <h1>Todo List (Full Stack)</h1>
      
      <div className="input-container">
        <input 
          value={newTask} 
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Yeni görev yaz..." 
        />
        <button onClick={addTask}>Ekle</button>
      </div>

      <ul>
        {tasks.map((task) => (
          <li key={task.id} style={{ marginBottom: "10px" }}>
            {task.title} 
            <button onClick={() => deleteTask(task.id)} style={{ marginLeft: "10px", color: "red" }}>
              Sil
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;