import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
import "../App.css";
import { Scheduler, View, Editing, Resource } from "devextreme-react/scheduler";
import { data, pantry } from "../data.js";
import React from "react";
const currentDate = new Date(2021, 10, 1);
const groups = ["pantryID"];
class MyScheduler extends React.Component {
  render() {
    console.log(data);

    return (
      <Scheduler
        id="scheduler"
        dataSource={data}
        //textExpr="title"
        //allDayExpr="dayLong"
        //recurrenceRuleExpr="recurrence"
        //onOptionChanged={handlePropertyChange}
        defaultCurrentView="week"
        currentDate={currentDate}
        groups={groups}
        timeZone="America/Los_Angeles"
      >
        <Resource dataSource={pantry} fieldExpr="pantryID" label="Pantry" />
        <View type="day" startDayHour={8} endDayHour={20} />
        <View type="week" startDayHour={8} endDayHour={20} />
        <View type="month" />
        <Editing
          allowDragging={false}
          allowTimeZoneEditing={true}
          allowAdding={false}
          allowDeleting={false}
          allowUpdating={false}
          allowResizing={false}
        />
      </Scheduler>
    );
  }
}

export default MyScheduler;
