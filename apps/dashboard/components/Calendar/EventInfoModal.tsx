import { SetStateAction, MouseEvent, Dispatch } from "react"
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, Box, Typography } from "@mui/material"
import { IEventInfo } from "./component"

interface IProps {
  open: boolean
  handleInfoClose: Dispatch<SetStateAction<void>>
  // onDeleteEvent: (e: MouseEvent<HTMLButtonElement>) => void
  onOpenEvent: (e: MouseEvent<HTMLButtonElement>) => void
  currentEvent: IEventInfo | null
}

const EventInfoModal = ({ open, handleInfoClose, onOpenEvent, currentEvent }: IProps) => {
  const onClose = () => {
    handleInfoClose()
  }

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{currentEvent?.title} {currentEvent?.typeOf}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Typography sx={{ fontSize: 20, marginTop: 0 }} color="text.secondary" gutterBottom>
            <b>{currentEvent?.category}</b>
          </Typography>
          <Typography sx={{ fontSize: 20, marginTop: 0 }} color="text.secondary" gutterBottom>
            {currentEvent?.description}
          </Typography>
        </DialogContentText>
        <Box component="form"></Box>
      </DialogContent>
      <DialogActions>
        <Button color="error" onClick={onClose}>
          Cancel
        </Button>
        {/* <Button color="info" onClick={onDeleteEvent}>
          Delete Event
        </Button> */}
        <Button color="info" onClick={onOpenEvent}>
          Open {currentEvent?.typeOf} Details
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default EventInfoModal