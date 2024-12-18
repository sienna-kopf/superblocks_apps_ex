import { useSuperblocksContext, useSuperblocksIsLoading } from "@superblocksteam/custom-components";
import { type Props, type EventTriggers } from "./types";

import { useState, MouseEvent, useCallback } from "react"
import { Box, Button, ButtonGroup, Card, CardContent, CardHeader, Container, Divider } from "@mui/material"

import { Calendar, type Event, dateFnsLocalizer } from "react-big-calendar"

import format from "date-fns/format"
import parse from "date-fns/parse"
import startOfWeek from "date-fns/startOfWeek"
import getDay from "date-fns/getDay"
import enUS from "date-fns/locale/en-US"

import "react-big-calendar/lib/css/react-big-calendar.css"

import EventInfo from "./EventInfo"
import AddEventModal from "./AddEventModal"
import EventInfoModal from "./EventInfoModal"
import { AddTodoModal } from "./AddTodoModal"
import AddDatePickerEventModal from "./AddDatePickerEventModal"

const locales = {
  "en-US": enUS,
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

export interface ITodo {
  _id: string
  title: string
  color?: string
}

export interface IEventInfo extends Event {
  _id: string
  title: string
  description: string
  todoId?: string
  category?: string
  eventType: string
}

export interface EventFormData {
  title: string
  description: string
  todoId?: string
  eventType: string
}

export interface DatePickerEventFormData {
  title: string
  description: string
  todoId?: string
  allDay: boolean
  start?: Date
  end?: Date
  eventType: string
}

export const generateId = () => (Math.floor(Math.random() * 10000) + 1).toString()

const initialEventFormState: EventFormData = {
  title: "",
  description: "",
  todoId: undefined,
  eventType: ""
}

const initialDatePickerEventFormData: DatePickerEventFormData = {
  title: "",
  description: "",
  todoId: undefined,
  allDay: false,
  start: undefined,
  end: undefined,
  eventType: ""
}

export default function Component({ listEvents, selectedEvent }: Props) {
// const EventCalendar = () => {

  console.log('listEvents at Start', listEvents)
  console.log('selectedEvent at Start', selectedEvent)
  const {
    updateProperties,
    events : {
      // handleSelectSlot,
      // handleSelectEvent,
      // handleClose,
      // handleDatePickerClose,
      onAddEvent,
      onAddEventFromDatePicker,
      onDeleteEvent,
      onOpenEvent
    },
  } = useSuperblocksContext<Props, EventTriggers>();
  // const [value, setValue] = useState("");

  const [openSlot, setOpenSlot] = useState(false)
  const [openDatepickerModal, setOpenDatepickerModal] = useState(false)
  const [openTodoModal, setOpenTodoModal] = useState(false)
  const [currentEvent, setCurrentEvent] = useState<Event | IEventInfo | null>(null)

  const [eventInfoModal, setEventInfoModal] = useState(false)

  // const [setEvents] = useState<IEventInfo[]>([])
  let [events, setEvents] = useState<IEventInfo[]>([])
  const [todos, setTodos] = useState<ITodo[]>([])

  // set events to the default listEvents collection
  events = listEvents

  const [eventFormData, setEventFormData] = useState<EventFormData>(initialEventFormState)

  const [datePickerEventFormData, setDatePickerEventFormData] =
    useState<DatePickerEventFormData>(initialDatePickerEventFormData)

  const handleSelectSlot = (event: Event) => {
    setOpenSlot(true)
    setCurrentEvent(event)
  }

  const handleSelectEvent = (event: IEventInfo) => {
    updateProperties({
      selectedEvent: event
    });
    setCurrentEvent(event)
    setEventInfoModal(true)
  }

  const handleClose = () => {
    setEventFormData(initialEventFormState)
    setOpenSlot(false)
  }

  const handleInfoClose = () => {
    updateProperties({
      selectedEvent: []
    });
    setEventFormData(initialEventFormState)
    setOpenSlot(false)
  }

  const handleDatePickerClose = () => {
    setDatePickerEventFormData(initialDatePickerEventFormData)
    setOpenDatepickerModal(false)
  }

  // const onAddEvent = (e: MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault()

  //   const data: IEventInfo = {
  //     ...eventFormData,
  //     _id: generateId(),
  //     start: currentEvent?.start,
  //     end: currentEvent?.end,
  //   }

  //   const newEvents = [...events, data]

  //   setEvents(newEvents)
  //   handleClose()
  // }

  // const onCalendarAddEvent = useCallback((e: MouseEvent<HTMLButtonElement>) => {
  //   console.log('eventFormData first line', eventFormData)
  //   e.preventDefault()

  //   const data: IEventInfo = {
  //     ...eventFormData,
  //     _id: generateId(),
  //     start: currentEvent?.start,
  //     end: currentEvent?.end
  //   }

  //   console.log('eventFormData', eventFormData)

  //   const newEvents = [...events, data]

  //   updateProperties({
  //     listEvents: newEvents,
  //   });
  //   onAddEvent();
  //   setEvents(newEvents);
  //   handleClose();
  // }, [updateProperties, listEvents, onAddEvent]);


  const onCalendarAddEvent = (e: MouseEvent<HTMLButtonElement>) => {
    console.log('eventFormData first line', eventFormData)
    e.preventDefault()

    const data: IEventInfo = {
      ...eventFormData,
      _id: generateId(),
      start: currentEvent?.start,
      end: currentEvent?.end
    }

    console.log('eventFormData', eventFormData)

    const newEvents = [...events, data]

    updateProperties({
      listEvents: newEvents,
    });
    onAddEvent();
    setEvents(newEvents);
    handleClose();
  }

  const onCalendarAddEventFromDatePicker = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    const addHours = (date: Date | undefined, hours: number) => {
      return date ? date.setHours(date.getHours() + hours) : undefined
    }

    const setMinToZero = (date: any) => {
      date.setSeconds(0)

      return date
    }

    const data: IEventInfo = {
      ...datePickerEventFormData,
      _id: generateId(),
      start: setMinToZero(datePickerEventFormData.start),
      end: datePickerEventFormData.allDay
        ? addHours(datePickerEventFormData.start, 12)
        : setMinToZero(datePickerEventFormData.end),
    }

    const newEvents = [...events, data]

    updateProperties({
      listEvents: newEvents,
    });
    onAddEventFromDatePicker();
    setEvents(newEvents)
    setDatePickerEventFormData(initialDatePickerEventFormData)
    handleDatePickerClose();
  }

  // const onAddEventFromDatePicker = (e: MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault()

  //   const addHours = (date: Date | undefined, hours: number) => {
  //     return date ? date.setHours(date.getHours() + hours) : undefined
  //   }

  //   const setMinToZero = (date: any) => {
  //     date.setSeconds(0)

  //     return date
  //   }

  //   const data: IEventInfo = {
  //     ...datePickerEventFormData,
  //     _id: generateId(),
  //     start: setMinToZero(datePickerEventFormData.start),
  //     end: datePickerEventFormData.allDay
  //       ? addHours(datePickerEventFormData.start, 12)
  //       : setMinToZero(datePickerEventFormData.end),
  //   }

  //   const newEvents = [...events, data]

  //   setEvents(newEvents)
  //   setDatePickerEventFormData(initialDatePickerEventFormData)
  // }

  // const onDeleteEvent = () => {
  //   setEvents(() => [...events].filter((e) => e._id !== (currentEvent as IEventInfo)._id!))
  //   setEventInfoModal(false)
  // }
  const onCalendarDeleteEvent = () => {
    setEvents(() => [...events].filter((e) => e._id !== (currentEvent as IEventInfo)._id!))
    setEventInfoModal(false)

    updateProperties({
      listEvents: [...events].filter((e) => e._id !== (currentEvent as IEventInfo)._id!),
    });
    onDeleteEvent();
  }

  const onCalendarOpenEvent = (e: MouseEvent<HTMLButtonElement>) => {
    // console.log('data', [...events].filter((e) => e._id == (currentEvent as IEventInfo)._id!))
    // updateProperties({
    //   selectedEvent: [...events].filter((e) => e._id == (currentEvent as IEventInfo)._id!)
    // });
    
    onOpenEvent();
    handleClose();
  }

  return (
    <Box
      mt={2}
      mb={2}
      component="main"
      sx={{
        flexGrow: 1,
        py: 0,
      }}
    >
      <Container maxWidth={false}>
        <Card>
          {/* <CardHeader title="Calendar" subheader="Create Events and Todos and manage them easily" /> */}
          {/* <Divider /> */}
          <CardContent>
            {/* <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <ButtonGroup size="large" variant="contained" aria-label="outlined primary button group">
                <Button onClick={() => setOpenDatepickerModal(true)} size="small" variant="contained">
                  Add event
                </Button>
                <Button onClick={() => setOpenTodoModal(true)} size="small" variant="contained">
                  Create todo
                </Button>
              </ButtonGroup>
            </Box> */}
            <AddEventModal
              open={openSlot}
              handleClose={handleClose}
              eventFormData={eventFormData}
              setEventFormData={setEventFormData}
              onAddEvent={onCalendarAddEvent}
              todos={todos}
            />
            <AddDatePickerEventModal
              open={openDatepickerModal}
              handleClose={handleDatePickerClose}
              datePickerEventFormData={datePickerEventFormData}
              setDatePickerEventFormData={setDatePickerEventFormData}
              onAddEvent={onCalendarAddEventFromDatePicker}
              todos={todos}
            />
            <EventInfoModal
              open={eventInfoModal}
              handleInfoClose={() => setEventInfoModal(false)}
              // onDeleteEvent={onCalendarDeleteEvent}
              onOpenEvent={onCalendarOpenEvent}
              currentEvent={currentEvent as IEventInfo}
            />
            <AddTodoModal
              open={openTodoModal}
              handleClose={() => setOpenTodoModal(false)}
              todos={todos}
              setTodos={setTodos}
            />
            <Calendar
              localizer={localizer}
              events={events}
              onSelectEvent={handleSelectEvent}
              onSelectSlot={handleSelectSlot}
              selectable
              startAccessor="start"
              components={{ event: EventInfo }}
              endAccessor="end"
              defaultView="week"
              eventPropGetter={(event) => {
                // const hasTodo = todos.find((todo) => todo._id === event.todoId)
                const catToColor = 	{
                  "GAMES": "#e02929",
                  "BROADCAST/STREAMING CONTENT": "#ff6699",
                  "THEATRICAL": "#9B59B6",
                  "COMMERCIAL": "#F1C40F",
                  "DIGITAL": "#d42761",
                  "DIGITAL GAMES": "#fa7e10",
                  "PRINT": "#f39c12",
                  "In-progress": "#FF9F43"
                }
                // {
                //   "GAMES": "#D85D5D",
                //   "BROADCAST/STREAMING CONTENT": "#F39C12",
                //   "THEATRICAL": "#8E44AD",
                //   "COMMERCIAL": "#F1C40F",
                //   "DIGITAL": "#F39C12",
                //   "DIGITAL GAMES": "#D64541",
                //   "PRINT": "#E67E22"
                // }
                
                if (event.eventType == 'Project') {
                  return {
                    style: {
                      backgroundColor: event.category ? catToColor[event.category] : "#7F8C8D",
                      borderColor: event.category ? catToColor[event.category] : "#7F8C8D",
                    },
                  }
                } if (event.eventType == 'Campaign') {
                  return {
                    style: {
                      backgroundColor: event.category ? catToColor[event.category] : "#7F8C8D",
                      borderColor: event.category ? catToColor[event.category] : "#7F8C8D",
                    },
                  }
                } else {
                  return {
                    style: {
                      backgroundColor: "#b64fc8",
                      borderColor: "#b64fc8",
                    },
                  }
                }
              }}
              style={{
                height: 750,
              }}
              min={new Date(1970, 1, 1, 6, 0)} // Start display at 6:00 AM
              max={new Date(1970, 1, 1, 17, 0)} // End display at 6:00 PM
              // scrollToTime={new Date(1970, 1, 1, 8, 0)}
            />
          </CardContent>
        </Card>
      </Container>
    </Box>
  )
}

// export default EventCalendar()