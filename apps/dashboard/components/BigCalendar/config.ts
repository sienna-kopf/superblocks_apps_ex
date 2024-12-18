import { type ComponentConfig } from "@superblocksteam/custom-components";

export default {
  // DO NOT CHANGE THE ID ONCE THE COMPONENT HAS BEEN REGISTERED!
  id: "1895b86b-26c6-470b-b293-c9e093313923",
  name: "BigCalendar",
  displayName: "Big Calendar",
  componentPath: "components/BigCalendar/component.tsx",
  properties: [{
    path: "currentEvents",
    dataType: "any",
    propertiesPanelDisplay: {"label":"Events","controlType":"js-expr"},
    isExternallyReadable: true,
    isExternallySettable: true
    },],
  events: [{
    label: "On Change",
    path: "onChange"
    },],
  gridDimensions: {
    initialColumns: 50,
    initialRows: 30,
  },
} satisfies ComponentConfig;
