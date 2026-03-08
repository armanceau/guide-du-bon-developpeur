import React from "react";
import "./Callout.css";

export type CalloutType = "info" | "warning" | "error" | "success" | "note";

interface CalloutProps {
  type?: CalloutType;
  variant?: CalloutType; // Alias for type
  title?: string;
  children: React.ReactNode;
}

export const Callout: React.FC<CalloutProps> = ({
  type,
  variant,
  title,
  children,
}) => {
  const calloutType = type || variant || "info";

  const icons = {
    info: "ℹ️",
    warning: "⚠️",
    error: "❌",
    success: "✅",
    note: "📝",
  };

  return (
    <div className={`callout callout-${calloutType}`}>
      {title && (
        <div className="callout-title">
          <span className="callout-icon">{icons[calloutType]}</span>
          {title}
        </div>
      )}
      <div className="callout-content">{children}</div>
    </div>
  );
};
