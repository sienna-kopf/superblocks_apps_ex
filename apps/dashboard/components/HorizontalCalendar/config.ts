import { type ComponentConfig } from "@superblocksteam/custom-components";

export default {
  // DO NOT CHANGE THE ID ONCE THE COMPONENT HAS BEEN REGISTERED!
  id: "b2009e4d-4660-4a57-849f-344bf55f77e3",
  name: "HorizontalCalendar",
  displayName: "Horizontal Calendar",
  componentPath: "components/HorizontalCalendar/component.tsx",
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

