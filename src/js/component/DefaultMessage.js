import React from "react";

function DefaultMessage({status}) {
  return (
    <header>
      <div className={status}>NO HAY TAREAS, AGREGA UNA</div>
    </header>
  );
}

export default DefaultMessage;
