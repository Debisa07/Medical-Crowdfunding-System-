import React from "react";
import styled from "styled-components";

export default function FullButton({ title, action, border }) {
  return (
    <Wrapper
      className="animate pointer radius8"
      onClick={action ? () => action() : null}
      border={border}
    >
      {title}
    </Wrapper>
  );
}

const Wrapper = styled.button`
  border: 1px solid ${(props) => (props.border ? "#FF7468" : "#FF7468")};
  background-color: ${(props) => (props.border ? "transparent" : "#FF7468")};
  width: 100%;
  padding: 15px;
  outline: none;
  color: ${(props) => (props.border ? "#5DADAA" : "#fff")};
  :hover {
    background-color: ${(props) => (props.border ? "transparent" : "#5DADAA")};
    border: 1px solid #5DADAA;
    color: ${(props) => (props.border ? "#5DADAA" : "#fff")};
  }
`;

