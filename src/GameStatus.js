export default ({ status, countMines }) => {
  const minesLeft = countMines - (Object.keys(flagged).length || 0);

  return (
    <div className={"game-status-container"}>
      <div className={"game-status"}>
        {`Flags Lefts : (${minesLeft}) `}
        <text
          class={status}
          style={{
            marginLeft: 10
          }}
        >
          {status}
        </text>
      </div>
    </div>
  );
};
