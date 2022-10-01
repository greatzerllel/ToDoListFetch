import React from "react";

function DefaultMessage({status}) {
  return (
    <header>
      <div className={status}>No tasks add tasks</div>
    </header>
  );
}

export default DefaultMessage;
