import React from "react";
import "../styles/global.css";
import "../styles/Components.css";

export default function Table({ 
  headers, 
  data, 
  actions = null,
  emptyMessage = "Nenhum dado encontrado"
}) {
  if (!data || data.length === 0) {
    return (
      <div className="tableCard">
        <div className="emptyState">
          <span className="emptyStateIcon">📋</span>
          <p className="emptyStateText">{emptyMessage}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="tableCard">
      <div className="tableBody">
        <table className="responsiveTable">
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
              {actions && <th>Ações</th>}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {headers.map((header, colIndex) => (
                  <td key={colIndex}>{row[header.toLowerCase()] || row[header]}</td>
                ))}
                {actions && (
                  <td>
                    <div className="actionButtons">
                      {actions(row, rowIndex)}
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
