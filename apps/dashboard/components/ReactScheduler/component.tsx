import { useSuperblocksContext, useSuperblocksIsLoading } from "@superblocksteam/custom-components";
import { type Props, type EventTriggers } from "./types";

import "@bitnoi.se/react-scheduler/dist/style.css";
import { Scheduler, SchedulerData } from "@bitnoi.se/react-scheduler";
import dayjs from "dayjs";

export default function Component() {

  const isLoading = useSuperblocksIsLoading();
  // const [filterButtonState, setFilterButtonState] = useState(0);

  // const [range, setRange] = useState({
  //   startDate: new Date(),
  //   endDate: new Date()
  // });

  // const handleRangeChange = useCallback((range) => {
  //   setRange(range);
  // }, []);

  // Filtering events that are included in current date range
  // Example can be also found on video https://youtu.be/9oy4rTVEfBQ?t=118&si=52BGKSIYz6bTZ7fx
  // and in the react-scheduler repo App.tsx file https://github.com/Bitnoise/react-scheduler/blob/master/src/App.tsx
  // const filteredMockedSchedulerData = mockedSchedulerData.map((person) => ({
  //       ...person,
  //       data: person.data.filter(
  //         (project) =>
  //           // we use "dayjs" for date calculations, but feel free to use library of your choice
  //           dayjs(project.startDate).isBetween(range.startDate, range.endDate) ||
  //           dayjs(project.endDate).isBetween(range.startDate, range.endDate) ||
  //           (dayjs(project.startDate).isBefore(range.startDate, "day") &&
  //             dayjs(project.endDate).isAfter(range.endDate, "day"))
  //       )
  //     }))

  return (
    <section>
      <Scheduler
        data={mockedSchedulerData}
        isLoading={isLoading}
        // onRangeChange={handleRangeChange}
        onTileClick={(clickedResource) => console.log(clickedResource)}
        onItemClick={(item) => console.log(item)}
        // onFilterData={() => {
        //   // Some filtering logic...
        //   setFilterButtonState(1);
        // }}
        // onClearFilterData={() => {
        //   // Some clearing filters logic...
        //   setFilterButtonState(0)
        // }}
        config={{
          zoom: 0,
          // filterButtonState,
        }}
      />
    </section>
  );
}

const mockedSchedulerData: SchedulerData = [
  {
    id: "070ac5b5-8369-4cd2-8ba2-0a209130cc60",
    label: {
      icon: "https://picsum.photos/24",
      title: "Sonic 3",
      subtitle: "Paramount Pictures"
    },
    data: [
      {
        id: "8b71a8a5-33dd-4fc8-9caa-b4a584ba3762",
        startDate: new Date("2024-11-21T15:31:24.272Z"),
        endDate: new Date("2025-02-01T10:28:22.649Z"),
        occupancy: 3600,
        title: "Sonic 3 Social",
        subtitle: "DIGITAL",
        description: "my first project example",
        bgColor: "#D42761"
      },
      {
        id: "22fbe237-6344-4c8e-affb-64a1750f33bd",
        startDate: new Date("2024-12-01T08:16:31.123Z"),
        endDate: new Date("2025-02-15T21:55:23.582Z"),
        occupancy: 2852,
        title: "Sonic 3 Int'l", 
        subtitle: "THEATRICAL",
        description: "another project example",
        bgColor: "#9B59B6"
      }
    ]
  },
  {
    id: "b62d9d4d-e2cf-41e7-85b0-3d81fc5cf8fc",
    label: {
      icon: "https://picsum.photos/24",
      title: "Transformers: One",
      subtitle: "Paramount Pictures"
    },
    data: [
      {
        id: "d9cb7f92-11ed-4b74-b1ba-3f8b58b4427f",
        startDate: new Date("2025-01-13T15:31:24.272Z"),
        endDate: new Date("2025-02-01T10:28:22.649Z"),
        occupancy: 3600,
        title: "Transformers: One P+",
        subtitle: "BROADCAST / STREAMING CONTENT",
        description: "another project",
        bgColor: "#FF6699"
      }
    ]
  }
];

// export default function Component({
//   listCampaigns,
// }: Props) {
//   // If any of your component's properties are connected to APIs, you might want to show a loading indicator while the data is
//   // loading. The `useSuperblocksIsLoading` hook returns a boolean that indicates whether this is the case.
//   const isLoading = useSuperblocksIsLoading();
//   const {
//     updateProperties,
//     events: {
//       onChange,
//     },
//   } = useSuperblocksContext<Props, EventTriggers>();

//   return (
//     <div
//       style={{
//         height: "100%",
//         width: "100%",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         backgroundColor: "#a7aebe",
//       }}
//     >
//       <h1 style={{ color: "white" }}>{isLoading ? <div>Loading...</div> : "<Insert Component Here>"}</h1>
//     </div>
//   );
// }
