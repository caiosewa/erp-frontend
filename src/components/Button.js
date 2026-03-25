import React from "react";
import "../styles/global.css";
import "../styles/Components.css";

export default function Button({ 
  children, 
  variant = "primary", 
  size = "medium", 
  onClick, 
  disabled = false, 
  type = "button",
  icon = null,
  className = ""
}) {
  const buttonClasses = [
    "button",
    `button${variant.charAt(0).toUpperCase() + variant.slice(1)}`,
    `button${size.charAt(0).toUpperCase() + size.slice(1)}`,
    disabled ? "buttonDisabled" : "",
    className
  ].filter(Boolean).join(" ");

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span className="buttonIcon">{icon}</span>}
      {children}
    </button>
  );
}
