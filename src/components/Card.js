import React from "react";
import "../styles/global.css";
import "../styles/Components.css";

export default function Card({ 
  children, 
  title = null, 
  subtitle = null,
  actions = null,
  className = ""
}) {
  return (
    <div className={`card ${className}`}>
      {(title || subtitle || actions) && (
        <div className="cardHeader">
          <div>
            {title && <h3 className="cardTitle">{title}</h3>}
            {subtitle && <p className="cardSubtitle">{subtitle}</p>}
          </div>
          {actions && <div className="cardActions">{actions}</div>}
        </div>
      )}
      <div className="cardBody">
        {children}
      </div>
    </div>
  );
}
