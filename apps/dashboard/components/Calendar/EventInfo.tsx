import { Typography } from "@mui/material"
import { IEventInfo } from "./component"

interface IProps {
  event: IEventInfo
}

const EventInfo = ({ event }: IProps) => {
  return (
    <>
      <Typography>{event.title}</Typography>
    </>
  )
}

export default EventInfo