import { useState } from "react";

function addEvent(event, callback) {
  const [event, setEvent] = useState(null);

  const fnc = (event) => {
    event.preventDefault();
    return callback();
  };
  return [event, fnc];
}
useEffect(() => {
  effect;
  return () => {
    cleanup;
  };
}, [input]);
