import React, { useState } from "react";

function ActivityForm(props) {
  const [time, setTime] = useState("");
  const InputHandler = (e) => {
    const { name, value } = e.target;
    setTime({ ...time, [name]: value });
  };

  // console.log("time", time);
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        id="form"
      >
        <div className="flex items-center py-2">
          <input
            className="input bg-transparent text-white  w-full  mr-3 py-1 px-2 "
            type="number"
            placeholder="Add Time In Mint"
            aria-label="Time"
            name="time"
            onChange={InputHandler}
            value={time.time}
          />
          <button
            className="py-1 px-2 mr-2 rounded btn btn-outline-warning text-white rounded"
            onClick={() => {
              props.showCal(time);
              props.setShowForm(false);
            }}
          >
            Set
          </button>
          <button
            className="py-1 px-2 mr-5 rounded btn btn-outline-warning text-white rounded"
            onClick={() => props.setShowForm(false)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default ActivityForm;
