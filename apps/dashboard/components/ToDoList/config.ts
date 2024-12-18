import { type ComponentConfig } from "@superblocksteam/custom-components";

export default {
  // DO NOT CHANGE THE ID ONCE THE COMPONENT HAS BEEN REGISTERED!
  id: "bdfab33f-0b5a-4573-90a2-c9ec41201507",
  name: "ToDoList",
  displayName: "To-Do List (Example)",
  componentPath: "components/ToDoList/component.tsx",
  properties: [{
    path: "tasks",
    dataType: "any",
    propertiesPanelDisplay: {"label":"Default Tasks","placeholder":"{ taskId: { taskName: 'Task Name', taskStatus: 'complete' | 'todo' } }","controlType":"js-expr"},
    isExternallyReadable: true,
    isExternallySettable: true
    },{
      path: "deletedTasks",
      dataType: "any",
      description: "The list of deleted tasks"
    }],
  events: [{
    label: "On Task Added",
    path: "onTaskAdded"
    },
    {
    label: "On Task Status Changed",
    path: "onTaskStatusChanged"
    },
    {
      label: "On Task Deleted",
      path: "onTaskDeleted",
    },],
  gridDimensions: {
    initialColumns: 50,
    initialRows: 30,
  },
} satisfies ComponentConfig;
