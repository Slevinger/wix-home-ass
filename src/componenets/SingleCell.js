import React, { useState, useEffect, useMemo } from "react";
import { StyledCell } from "./StyledComponents";
import { FaBomb } from "react-icons/fa";
export default ({ indexes, value, id, count, superman }) => {
  const [clicked, setClicked] = useState(false);

  const cellValue = useMemo(() => {
    if (superman || clicked) {
      if (value) {
        return <FaBomb />;
      } else {
        debugger;
        if (count > 0) {
          return count;
        }
        return "";
      }
    }
  }, [clicked, superman, value, count]);
  return (
    <StyledCell
      onClick={() => {
        setClicked(true);
      }}
      clicked={clicked}
      id={id}
      indexes={indexes}
      value={value}
      superman={superman}
    >
      {cellValue}
    </StyledCell>
  );
};
