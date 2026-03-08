import React from "react";
import "./Checklist.css";

interface ChecklistProps {
  items: string[];
  title?: string;
}

export const Checklist: React.FC<ChecklistProps> = ({ items, title }) => {
  return (
    <div className="checklist">
      {title && <h4 className="checklist-title">{title}</h4>}
      <ul className="checklist-items">
        {items.map((item, index) => (
          <li key={index} className="checklist-item">
            <span className="checklist-checkbox">☐</span>
            <span className="checklist-text">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
