import React, { useMemo } from "react";
import { StyledCell } from "./StyledComponents";
import { FaBomb, FaFlag } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
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
          return (
            <span style={{ display: "inline-block", position: "relative" }}>
              <FaBomb textAnchor="middle" alignmentBaseline="middle" />
              {clicked && value && (
                <IoMdClose
                  textAnchor="middle"
                  className={"fail-icon"}
                  alignmentBaseline="middle"
                />
              )}
            </span>
          );
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
        clickCell(indexes);
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
