import React, { useMemo } from "react";
import { StyledCell } from "./StyledComponents";
import { FaBomb, FaFlag } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export default ({
  indexes,
  superman,
  toggleFlag,
  clickCell,
  isCellMined,
  isCellClicked,
  isCellFlagged,
  countMinesAroundCell
}) => {
  const cellValue = useMemo(() => {
    if (isCellFlagged) {
      return <FaFlag color="red" />;
    } else {
      if (superman || isCellClicked) {
        if (isCellMined) {
          return (
            <span style={{ display: "inline-block", position: "relative" }}>
              <FaBomb textAnchor="middle" alignmentBaseline="middle" />
              {isCellClicked && isCellMined && (
                <IoMdClose
                  textAnchor="middle"
                  className={"fail-icon"}
                  alignmentBaseline="middle"
                />
              )}
            </span>
          );
        } else {
          if (countMinesAroundCell > 0) {
            return countMinesAroundCell;
          }
          return "";
        }
      }
    }
  }, [
    isCellClicked,
    superman,
    isCellMined,
    countMinesAroundCell,
    isCellFlagged
  ]);

  const onClick = async e => {
    if (e.altKey) {
      toggleFlag(indexes);
    } else {
      if (!isCellClicked && !isCellFlagged) {
        clickCell(indexes);
      }
    }
  };

  return (
    <StyledCell
      onClick={onClick}
      isCellClicked={isCellClicked}
      indexes={indexes}
      superman={superman}
    >
      {cellValue}
    </StyledCell>
  );
};
