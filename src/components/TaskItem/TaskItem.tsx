import { useState } from "react";
import { Box, Checkbox, Chip, ListItemButton, ListItemText, Typography, colors } from "@mui/material";
import { Task } from "../../model/Task";
import { Delete } from "@mui/icons-material";
import TaskEditModal from "../TaskEditModel/TaskEditMode";

type TaskItemProps = {
  task: Task;
  onChange: (id: string) => void;
  deleteTask: (id: string) => void;
	editTask: (description: string, id: string) => void
};

export const TaskItem = (props: TaskItemProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (id: string) => {
    props.onChange(id);
  };

  const handleOpenEditModal = () => {
    setIsEditing(true);
  };

  const handleCloseEditModal = () => {
    setIsEditing(false);
  };

  let tagColor = "";
  if (props.task.tag === "Home") tagColor = colors.purple[500].toString();
  if (props.task.tag === "Work") tagColor = colors.amber[500].toString();
  if (props.task.tag === "School") tagColor = colors.indigo[500].toString();

  const handleListItemClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    const isCheckbox = target.tagName === "INPUT"
    const isIcon = target.tagName === "svg";

    if (!isCheckbox && !isIcon) {
      handleOpenEditModal();
    }
  };

  return (
    <>
      <Box>
			<ListItemButton
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: {
							md: 'center',
							xs: 'flex-start'
						},
						flexDirection: {
							md: 'row',
							xs: 'column'
						}
					}}
					onClick={handleListItemClick}
				>
					<Box display='flex' alignItems='center'>
						<Checkbox checked={props.task.isChecked} onChange={() => handleChange(props.task.id)}/>
						<ListItemText primary={props.task.description}></ListItemText>
					</Box>
					<Box display='flex' alignItems='center'>
						<Chip label={props.task.tag} sx={{
							backgroundColor: tagColor,
							color: 'white',
							m: 1,
							mr: {
								md: '10em',
								xs: '1em'
							},
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							width: {
								md: '8em',
								xs: '100%'
							}
						}} />
						<Delete color="error" onClick={() => props.deleteTask(props.task.id)} 	/>
					</Box>
				</ListItemButton>
      </Box>
      {isEditing && (
        <TaskEditModal
          task={props.task}
					editTask={props.editTask}
          onClose={handleCloseEditModal}
        />
      )}
    </>
  );
};
