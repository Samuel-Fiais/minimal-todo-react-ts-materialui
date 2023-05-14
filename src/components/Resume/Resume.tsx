import { Box } from "@mui/material"
import { CardInfo } from "../Card/CardInfo"
import { green, red } from "@mui/material/colors"

type ResumeProps = {
	totalTasks: number,
	tasksToDo: number,
	tasksDone: number
}

export const Resume = (props: ResumeProps) => {

	return (
		<>
				<Box
					display='flex'
					sx={{
						flexDirection: {xl:'row', md: 'row', sm: 'column', xs: 'column'}
					}}
					justifyContent='space-between'
				>
					<CardInfo title={"To do"} value={props.tasksToDo} color={red[600].toString()}></CardInfo>
					<CardInfo title={"Tasks"} value={props.totalTasks} ></CardInfo>
					<CardInfo title={"Done"} value={props.tasksDone} color={green[600].toString()}></CardInfo>
				</Box>
		</>
	)
}