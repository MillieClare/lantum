import React from "react";
import { user } from "./user";

export default function RenderShifts(props) {
  if (!props.items.length) {
    return (
      <p>There are no shifts available currently, please check back later</p>
    );
  }

  return (
    <div>
      <h1>Available Shifts for {user.staffType}s</h1>
      {props.items[0].map(item => {
        return (
          <div>
            <li>
              {item.applicationIds}
              {item.endDateTime}
              {item.hourlyRate}
              {item.id}
              {item.practice.name}
              {item.startDatetime}
            </li>
          </div>
        );
      })}
    </div>
  );
}
