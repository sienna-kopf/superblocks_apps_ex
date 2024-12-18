export interface Event {
    title: string;
    description: string;
    todoId: string;
    start: string;
    end: string;
    // type_of: string;
  }

  export const validateEvents = (listEvents: any) => {
    return {
      validatedEvents: listEvents as Record<string, Event>,
      hasError:
        typeof listEvents !== "object" ||
        Array.isArray(listEvents) ||
        Object.values(listEvents).some((listEvent: any) => {
          return (
            typeof listEvent !== "object" ||
            Array.isArray(listEvent) ||
            !("description" in listEvent) ||
            !("start" in listEvent) ||
            !("end" in listEvent) ||
            !("todoId" in listEvent) ||
            !("title" in listEvent) ||
            // !("type_of" in listEvent) ||
            typeof listEvent.description !== "string" ||
            typeof listEvent.start !== "string" ||
            typeof listEvent.todoId !== "string" ||
            typeof listEvent.end !== "string" ||
            typeof listEvent.title !== "string" 
            // typeof listEvent.type_of !== "string"
          );
        }),
    };
  };
  
  export const ErrorComponent: React.FC = () => {
    return (
      <div className="sb-example-root">
        <h3>Invalid Events List!</h3>
        <p>Events should be of the format:</p>
        <pre>
          {`{
    "<event-id>": {
      description: "<event-description>",
      todoId: "<event-todoId>",
      start: "<event-start-time-and-date>",
      end: "<event-end-time-and-date>",
    },
  ...}`}
        </pre>
      </div>
    );
  };
  