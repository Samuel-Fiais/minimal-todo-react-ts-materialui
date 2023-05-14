import { Dialog, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';

type AlertProps = {
  type: 'info' | 'success' | 'error' | 'alert';
  message: string;
  open: boolean;
  onClose: () => void;
};

export const AlertModel = (props: AlertProps) => {
  const title = props.type.charAt(0).toUpperCase() + props.type.slice(1);
  
  return (
    <Dialog open={props.open} onClose={props.onClose}>
      <DialogContent>
        <DialogContentText>{props.message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClose} variant='contained'>OK</Button>
      </DialogActions>
    </Dialog>
  );
};