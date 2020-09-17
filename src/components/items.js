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
          return (
            <div>
              <li>Shift at: {item.practice.name}</li>
              <ul>
                <li>Date: {item.startDatetime}</li>
                <li>Start time: {item.startDatetime}</li>
                <li>Finish time: {item.endDatetime}</li>
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
