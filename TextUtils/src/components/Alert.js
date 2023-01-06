import React from "react";

export default function Alert(props) {
  return (
    <div style={{ height: "50px" }}>
      {props.alertM && (
        <div
          className={`alert alert-${props.alertM.res} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{props.alertM.res}: </strong> {props.alertM.msg}
        </div>
      )}
    </div>
  );
}
