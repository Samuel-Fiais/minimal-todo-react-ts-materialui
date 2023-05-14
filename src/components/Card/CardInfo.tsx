import { Box, Paper, Typography } from "@mui/material"

type CardInfoProps = {
	title: string,
	value: number,
	color?: string | 'black'
}

export const CardInfo = (props: CardInfoProps) => {
	return (
		<>
			<Paper
				elevation={3}
				variant="elevation"
				sx={{
					m: 2,
					p: 2,
					width: {xl: '300px', md: '300px', xs: 'auto'},
					height: {xl: 'auto', xs: '100px'},
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>

				<Typography variant="h3" sx={{
					mb: 4, fontWeight: '700',
          fontSize: {xl: '3em', md: '2em', xs: '2em'}
				}} color={props.color}>{props.title}</Typography>
				<Typography variant="h2" color={props.color} sx={{
					mb: 4, fontWeight: '700',
          fontSize: {xl: '3em', md: '2em', xs: '2em'}
				}}>{props.value}</Typography>

			</Paper>
		</>
	)
}