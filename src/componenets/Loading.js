import React from "react";
import Loader from "react-loader-spinner";
import styled from "styled-components";

const LoadingModal = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  align-items: center;
  display: flex;
  justify-content: center;
`;

export default () => {
  return (
    <LoadingModal>
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
      <div style={{ fontSize: "60px", color: "white" }}>
        Creating new board ...
      </div>
    </LoadingModal>
  );
};
