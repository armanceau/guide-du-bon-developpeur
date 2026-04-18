export const Method = ({ bg, children }) => (
  <span
    style={{
      backgroundColor: bg,
      color: "white",
      padding: "2px 8px",
      borderRadius: "4px",
      fontSize: "12px",
      fontWeight: "bold",
      display: "inline-block",
      minWidth: "60px",
      textAlign: "center",
    }}
  >
    {children}
  </span>
);
