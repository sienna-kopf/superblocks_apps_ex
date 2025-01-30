import { type ComponentConfig } from "@superblocksteam/custom-components";

export default {
  // DO NOT CHANGE THE ID ONCE THE COMPONENT HAS BEEN REGISTERED!
  id: "31efc2eb-94e9-4044-85f9-a604db99a507",
  name: "ReactSchedulerSource",
  displayName: "React Scheduler Source",
  componentPath: "components/ReactSchedulerSource/component.tsx",
  properties: [{
    path: "schedulerData",
    dataType: "any",
    propertiesPanelDisplay: {"label":"Scheduler Data","controlType":"js-expr"},
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
