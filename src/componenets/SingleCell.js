import React, { useMemo } from "react";
import { StyledCell } from "./StyledComponents";
import { FaBomb, FaFlag } from "react-icons/fa";
export default ({
  indexes,
  value,
  id,
  count,
  superman,
  reveal,
  clicked,
  flagged,
  clickCell,
  toggleFlag,
  endGame
}) => {
  // const [clicked, setClicked] = useState(false);
  const cellValue = useMemo(() => {
    if (flagged) {
      return <FaFlag color="red" />;
    } else {
      if (superman || clicked) {
        if (value) {
          return <FaBomb />;
        } else {
          if (count > 0) {
            return count;
          }
          return "";
        }
      }
    }
  }, [clicked, superman, value, count, flagged]);

  const onClick = async e => {
    if (e.altKey) {
      toggleFlag(indexes);
    } else {
      if (!clicked && !flagged) {
        if (value) {
          endGame("LOSE");
        }
        clickCell(indexes);
        if (count === 0 && e !== false) {
          reveal(indexes);
        }
      }
    }
  };

  return (
    <StyledCell
      onClick={onClick}
      clicked={clicked}
      id={id}
      indexes={indexes}
      superman={superman}
    >
      {cellValue}
    </StyledCell>
  );
};
