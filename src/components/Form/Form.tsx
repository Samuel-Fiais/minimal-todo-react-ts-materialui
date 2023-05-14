import { Box, Button, FormControl, InputLabel, MenuItem, Paper, Select, TextField } from "@mui/material"
import { Task } from "../../model/Task"
import { useState } from "react"
import { AlertModel } from "../Alert/AlertModel"

type FormProps = {
	onClick: (task: Task) => void
	tasks: Task[]
}

export const Form = (props: FormProps) => {
	const [description, setDescription] = useState<string | undefined>('')
	const [tag, setTag] = useState<string>('')

	const [showAlert, setShowAlert] = useState<boolean>(false)

	const handleSaveTask = () => {

		if (!description || !tag) {
			setShowAlert(true)
			return;
		}

		const newTask: Task = {
			id: (props.tasks.length + 1).toString().padStart(5, '0'),
			description: description,
			tag: tag,
			isChecked: false
		}

		props.onClick(newTask)

		setDescription('')
		setTag('')
	}

	return (
		<>
			<Box>
				<Paper
					elevation={3}
					variant="elevation"
					sx={{
						m: 2,
						p: 4,
					}}
				>
					<Box
						display='flex'
						gap={2}
						sx={{
							flexDirection: {
								lg: 'row',
								xs: 'column'
							}
						}}
						justifyContent='space-between'
					>
						<TextField label="Description" variant="outlined" value={description} placeholder="Description" onChange={(x) => setDescription(x.target.value)} sx={{
							width: {
                xl: '50%',
                xs: '100%'
              }
						}} />
						<FormControl sx={{
							width: {
                xl: '30%',
                xs: '100%'
              }
						}}>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={tag}
							label="Tag"
							onChange={(e) => setTag(e.target.value)}
						>
							<MenuItem value={'Home'}>Home</MenuItem>
							<MenuItem value={'School'}>School</	MenuItem>
							<MenuItem value={'Work'}>Work</MenuItem>
						</Select>
						<InputLabel id="demo-simple-select-label">Tag</InputLabel>
						</FormControl>
						
						<Button variant="contained" color="primary" onClick={handleSaveTask} sx={{
							width: {
                xl: '20%',
                xs: '100%'
              }
						}}>Adicionar</Button>
					</Box>
				</Paper>
			</Box>

			<AlertModel
				type="alert"
				message="Preencha a descrição e a tag"
				open={showAlert}
				onClose={() => setShowAlert(false)}
			/>
		</>
	)
}