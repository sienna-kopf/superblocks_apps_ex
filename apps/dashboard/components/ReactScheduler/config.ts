import { type ComponentConfig } from "@superblocksteam/custom-components";

export default {
  // DO NOT CHANGE THE ID ONCE THE COMPONENT HAS BEEN REGISTERED!
  id: "1af4fc3d-cc88-438e-9460-ae5171412944",
  name: "ReactScheduler",
  displayName: "React Scheduler",
  componentPath: "components/ReactScheduler/component.tsx",
  properties: [{
    path: "listCampaigns",
    dataType: "any",
    propertiesPanelDisplay: {"label":"List Campaigns","controlType":"js-expr"},
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
