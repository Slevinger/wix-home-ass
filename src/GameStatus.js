export default ({ status, mines }) => {
  const minesLeft =
    Object.keys(mines).length - (Object.keys(flagged).length || 0);

  return (
    <div
      style={{
        textAlign: "center",
        justifySelf: "center",
        alignSelf: "center",
        position: "fixed",
        width: "100%",
        padding: 10,
        fontSize: 23,
        zIndex: 10
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255,255,255,0.4)",
          display: "inline-flex"
        }}
      >
        {`Flags Lefts : (${minesLeft}) `}
        <text
          style={{
            marginLeft: 10,
            color:
              status === "LOSE" ? "red" : status === "WON" ? "green" : "blue"
          }}
        >
          {status}
        </text>
      </div>
    </div>
  );
};
