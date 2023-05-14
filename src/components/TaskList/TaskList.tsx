import { Box, List, Paper } from "@mui/material"
import { Task } from "../../model/Task"
import { TaskItem } from "../TaskItem/TaskItem"

type TaskListProps = {
	tasks: Task[]
	onChange: (id: string) => void
	deleteTask: (id: string) => void
	editTask: (description: string, id: string) => void
}

export const TaskList = (props: TaskListProps) => {

	return (
		<>
			<Box>
				<Paper
					elevation={3}
					variant="elevation"
					sx={{
						m: 2,
						mt: 4,
						p: 4,
					}}
				>
					<Box>
						<List>
							{
								props.tasks.map((task) => {
									return <TaskItem task={task} onChange={props.onChange} deleteTask={props.deleteTask} editTask={props.editTask}/>
								})
							}
						</List>
					</Box>
				</Paper>
			</Box>
		</>
	)
}