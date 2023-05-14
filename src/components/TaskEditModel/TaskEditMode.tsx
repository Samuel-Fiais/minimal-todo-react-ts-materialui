import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from "@mui/material";
import { Task } from "../../model/Task";
import { useState } from "react";

type TaskEditModalProps = {
  task: Task;
  onClose: () => void;
	editTask: (description: string, id: string) => void
};

const TaskEditModal = (props: TaskEditModalProps) => {
  const [editedTaskName, setEditedTaskName] = useState(props.task.description);

  const handleTaskNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedTaskName(event.target.value);
  };

  const handleSaveChanges = () => {
		props.editTask(editedTaskName, props.task.id);
    props.onClose();
  };

  const handleClose = () => {
    props.onClose();
  };

  return (
    <Dialog open={true} onClose={handleClose} fullWidth>
      <DialogTitle>Editar Tarefa</DialogTitle>
      <DialogContent>
        <TextField
          label="Nome da Tarefa"
          value={editedTaskName}
          onChange={handleTaskNameChange}
          fullWidth
					sx={{
						mt: 2
					}}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancelar</Button>
        <Button onClick={handleSaveChanges} variant="contained" color="primary">
          Salvar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default TaskEditModal;
