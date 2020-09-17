import React from "react";
import { user } from "./user";

import moment from "moment";
moment().format();

export default function RenderShifts(props) {
  if (!props.items.length) {
    return (
      <p>There are no shifts available currently, please check back later</p>
    );
  }

  return (
    <div>
      <h1>Available Shifts for {user.staffType}s</h1>
      <ol>
        {props.items[0].map(item => {
          let now = moment();
          let shiftDate = moment(item.startDatetime);
          let dateOfShift = shiftDate.format("MMMM Do YYYY");
          let shiftStart = shiftDate.format("h:mm A");
          let shiftEnd = moment(item.endDatetime).format("h:mm A");
          if (
            !item.locum &&
            user.staffType === item.staffType &&
            item.status === "POSTED" &&
            now < shiftDate
          )
            return (
              <div>
                <li>Shift at: {item.practice.name}</li>
                <ul>
                  <li>Date: {dateOfShift}</li>
                  <li>Start time: {shiftStart}</li>
                  <li>Finish time: {shiftEnd}</li>
                  <li>Hourly rate: {item.hourlyRate}</li>
                  <li>Applicants: {item.applicationIds.length}</li>
                </ul>
              </div>
            );
        })}
      </ol>
    </div>
  );
}
