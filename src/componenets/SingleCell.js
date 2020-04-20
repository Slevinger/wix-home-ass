import React, { useMemo } from "react";
import { StyledCell } from "./StyledComponents";
import { FaBomb, FaFlag } from "react-icons/fa";
export default React.forwardRef(
  (
    {
      indexes,
      value,
      id,
      count,
      superman,
      reveal,
      clicked,
      flagged,
      clickCell,
      toggleFlag
    },
    ref
  ) => {
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
      debugger;
      if (e.altKey) {
        toggleFlag(indexes);
      } else {
        if (!clicked && !flagged) {
          clickCell(indexes);
          if (count === 0 && e !== false) {
            reveal(indexes);
          }
        }
      }
    };

    return (
      <StyledCell
        ref={ref}
        onClick={onClick}
        clicked={clicked}
        id={id}
        indexes={indexes}
        value={clicked}
        superman={superman}
      >
        {cellValue}
      </StyledCell>
    );
  }
);
