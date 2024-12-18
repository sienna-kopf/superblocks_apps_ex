import { useSuperblocksContext, useSuperblocksIsLoading } from "@superblocksteam/custom-components";
import { type Props, type EventTriggers } from "./types";

import Timeline from 'react-calendar-timeline'
// make sure you include the timeline stylesheet or the timeline will not be styled
// import 'react-calendar-timeline/lib/Timeline.css'
import moment from 'moment'

export default function Component({
  currentEvents,
}: Props) {
  // If any of your component's properties are connected to APIs, you might want to show a loading indicator while the data is
  // loading. The `useSuperblocksIsLoading` hook returns a boolean that indicates whether this is the case.
  const isLoading = useSuperblocksIsLoading();
  const {
    updateProperties,
    events: {
      onChange,
    },
  } = useSuperblocksContext<Props, EventTriggers>();

  const groups = [{ id: 1, title: 'group 1' }, { id: 2, title: 'group 2' }]

  const items = [
    {
      id: 1,
      group: 1,
      title: 'item 1',
      start_time: moment(),
      end_time: moment().add(1, 'hour')
    },
    {
      id: 2,
      group: 2,
      title: 'item 2',
      start_time: moment().add(-0.5, 'hour'),
      end_time: moment().add(0.5, 'hour')
    },
    {
      id: 3,
      group: 1,
      title: 'item 3',
      start_time: moment().add(2, 'hour'),
      end_time: moment().add(3, 'hour')
    }
  ]

  return (
    <div>
    Rendered by react!
    <Timeline
      groups={groups}
      items={items}
      defaultTimeStart={moment().add(-12, 'hour')}
      defaultTimeEnd={moment().add(12, 'hour')}
    />
  </div>
  );
}
