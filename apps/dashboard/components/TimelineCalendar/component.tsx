import { useSuperblocksContext, useSuperblocksIsLoading } from "@superblocksteam/custom-components";
import { type Props, type EventTriggers } from "./types";

// import React from 'react';
import { DndProvider } from 'react-dnd';  // Import the drag-and-drop provider
import { HTML5Backend } from 'react-dnd-html5-backend';  // HTML5 drag-and-drop backend
import { Scheduler, SchedulerData, ViewType } from "react-big-schedule";
import dayjs from "dayjs";
import "react-big-schedule/dist/css/style.css";

// Core component where drag-and-drop should be initialized
const Component: React.FC<Props> = ({ listProjects }) => {
  const isLoading = useSuperblocksIsLoading();
  const {
    updateProperties,
    events: { onOpenEvent },
  } = useSuperblocksContext<Props, EventTriggers>();

  const schedulerData = new SchedulerData('2022-12-22', ViewType.Week, false, false, {
    besidesWidth: 350,
    startResizable: false,
    endResizable: false,
    movable: false,
    creatable: false,
  });

  schedulerData.setSchedulerLocale('pt-br');
  schedulerData.setCalendarPopoverLocale('pt_BR');

  schedulerData.setResources([
    { id: 'r0', name: 'Resource0', groupOnly: true },
    { id: 'r1', name: 'Resource1' },
    { id: 'r2', name: 'Resource2', parentId: 'r0' },
    { id: 'r3', name: 'Resource3', parentId: 'r4' },
    { id: 'r4', name: 'Resource4', parentId: 'r2' },
  ]);

  schedulerData.setEvents([
    { id: 1, start: '2022-12-18 09:30:00', end: '2022-12-19 23:30:00', resourceId: 'r1', title: 'I am finished', bgColor: '#D9D9D9' },
    { id: 2, start: '2022-12-18 12:30:00', end: '2022-12-26 23:30:00', resourceId: 'r2', title: 'I am not resizable', resizable: false },
    { id: 3, start: '2022-12-19 12:30:00', end: '2022-12-20 23:30:00', resourceId: 'r3', title: 'I am not movable', movable: false },
    { id: 4, start: '2022-12-19 14:30:00', end: '2022-12-20 23:30:00', resourceId: 'r1', title: 'I am not start-resizable', startResizable: false },
    { id: 5, start: '2022-12-19 15:30:00', end: '2022-12-20 23:30:00', resourceId: 'r2', title: 'R2 has recurring tasks every week on Tuesday, Friday', rrule: 'FREQ=WEEKLY;DTSTART=20221219T013000Z;BYDAY=TU,FR', bgColor: '#f759ab' },
  ]);

  let viewModel = schedulerData;

  const prevClick = () => {};
  const nextClick = () => {};
  const onSelectDate = () => {};
  const onViewChange = () => {};

  return (
    <div className="sb-example-root">
      <h1>Timeline Here</h1>
      <DndProvider debugMode={true} backend={HTML5Backend}> 
        <Scheduler
          schedulerData={viewModel}
          prevClick={prevClick}
          nextClick={nextClick}
          onSelectDate={onSelectDate}
          onViewChange={onViewChange}
        />
      </DndProvider>
    </div>
  );
};

export default Component;
