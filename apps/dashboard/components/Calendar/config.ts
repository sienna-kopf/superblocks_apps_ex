import { type ComponentConfig } from "@superblocksteam/custom-components";

export default {
  // DO NOT CHANGE THE ID ONCE THE COMPONENT HAS BEEN REGISTERED!
  id: "29ed7c8a-6097-4b12-9aa7-6519d4a9ebd2",
  name: "Calendar",
  displayName: "Calendar",
  componentPath: "components/Calendar/component.tsx",
  properties: [{
    path: "currentUser",
    dataType: "string",
    propertiesPanelDisplay: {"label":"User","controlType":"text"},
    isExternallyReadable: true,
    isExternallySettable: true
    },{
      path: "listEvents",
      dataType: "any",
      propertiesPanelDisplay: {"label":"Events","controlType":"js-expr"},
      isExternallyReadable: true,
      isExternallySettable: true,
      description: "The list of events"
    },{
      path: "selectedEvent",
      dataType: "any",
      propertiesPanelDisplay: {"label":"SelectedEvent","controlType":"js-expr"},
      isExternallyReadable: true,
      isExternallySettable: true,
      description: "The selected event"
    }],
  events: [{
    label: "On Add Event",
    path: "onAddEvent"
    },{
      label: "On Open Event",
      path: "onOpenEvent"
    },{
    label: "On Delete Event",
    path: "onDeleteEvent"
    },{
    label: "On Add Event From Date Picker",
    path: "onAddEventFromDatePicker"
    },],
  gridDimensions: {
    initialColumns: 50,
    initialRows: 30,
  },
} satisfies ComponentConfig;
