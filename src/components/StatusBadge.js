import React from "react";
import "../styles/global.css";
import "../styles/Components.css";

export default function StatusBadge({ 
  status, 
  type = "primary",
  size = "medium"
}) {
  const badgeClasses = [
    "statusBadge",
    `status${type.charAt(0).toUpperCase() + type.slice(1)}`,
    `statusBadge${size.charAt(0).toUpperCase() + size.slice(1)}`
  ].join(" ");

  return (
    <span className={badgeClasses}>
      {status}
    </span>
  );
}
