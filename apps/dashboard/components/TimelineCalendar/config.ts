import { type ComponentConfig } from "@superblocksteam/custom-components";

export default {
  // DO NOT CHANGE THE ID ONCE THE COMPONENT HAS BEEN REGISTERED!
  id: "3394782b-d7e1-4d6c-9925-d4b719276844",
  name: "TimelineCalendar",
  displayName: "Timeline Calendar",
  componentPath: "components/TimelineCalendar/src/examples/pages/Read-Only/class-based.jsx",
  properties: [{
    path: "listProjects",
    dataType: "any",
    propertiesPanelDisplay: {"label":"List Projects","controlType":"js-expr"},
    isExternallyReadable: true,
    isExternallySettable: true
    },],
  events: [{
    label: "On Open Event",
    path: "onOpenEvent"
    },],
  gridDimensions: {
    initialColumns: 50,
    initialRows: 30,
  },
} satisfies ComponentConfig;
