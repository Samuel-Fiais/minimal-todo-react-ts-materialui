import { useEffect, useState } from 'react'
import { Task } from './model/Task'
import { Resume } from './components/Resume/Resume'
import { Container } from '@mui/material'
import { Form } from './components/Form/Form'
import { TaskList } from './components/TaskList/TaskList'

function App() {
  const data = localStorage.getItem('tasks')
  const [tasks, setTasks] = useState<Task[]>(
    data ? JSON.parse(data) : [],
  )

  const [tasksTotal, setTasksTotal] = useState<number>(0)
	const [tasksToDo, setTasksToDo] = useState<number>(0)
	const [tasksDone, setTasksDone] = useState<number>(0)

	useEffect(() => {
		const total = tasks.length
    const toDo = tasks.filter(task => !task.isChecked).length
    const done = tasks.filter(task => task.isChecked).length

    setTasksTotal(total)
    setTasksToDo(toDo)
    setTasksDone(done)
	}, [tasks])

  const handleAddTask = (task: Task) => {
    let newArrayTask = [...tasks, task]

    newArrayTask =  [...newArrayTask].sort((a, b) => (a.isChecked ? 1 : -1) - (b.isChecked ? 1 : -1));    

    setTasks(newArrayTask)
    localStorage.setItem('tasks', JSON.stringify(newArrayTask))
  }

  const changeStatusTask = (id: string) => {
		let tasksUpdate = tasks.map((task) => {
			if (task.id == id) return { ...task, isChecked: !task.isChecked }
      return task
		})

    tasksUpdate =  [...tasksUpdate].sort((a, b) => (a.isChecked ? 1 : -1) - (b.isChecked ? 1 : -1));    

		setTasks(tasksUpdate)
		localStorage.setItem('tasks', JSON.stringify(tasksUpdate))
	}

  const deleteTask = (id: string) => {
    const taskUpdate = tasks.filter((task) => {
      return task.id !== id
    })

    setTasks(taskUpdate)
    localStorage.setItem('tasks', JSON.stringify(taskUpdate))
  }

  const editDescriptionTask = (newDescription: string, id: string) => {
    const taskUpdate = tasks.map((task) => {
      if (task.id == id) return { ...task, description: newDescription }
      return task
    })

    setTasks(taskUpdate)
    localStorage.setItem('tasks', JSON.stringify(taskUpdate))
  }

  return (
    <>
      <Container>
        <Resume totalTasks={tasksTotal} tasksToDo={tasksToDo} tasksDone={tasksDone}  />
        <Form onClick={handleAddTask} tasks={tasks} />
        <TaskList tasks={tasks} onChange={changeStatusTask} deleteTask={deleteTask} editTask={editDescriptionTask} />
      </Container>
    </>
  )
}

export default App
