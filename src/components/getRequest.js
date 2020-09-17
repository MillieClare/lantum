import React, { useState, useEffect } from "react";
import RenderShifts from "./items";

export default function GetShifts() {
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://vvgv5rubu3.execute-api.eu-west-2.amazonaws.com/dev/sessions")
      .then(setLoading(true))
      .then(res => res.json())
      .then(
        data => {
          setLoading(false);
          setItems([data.data]);
        },
        error => {
          setLoading(false);
          setError(error);
        }
      );
  }, []);

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      <RenderShifts items={items} />
    </div>
  );
}
