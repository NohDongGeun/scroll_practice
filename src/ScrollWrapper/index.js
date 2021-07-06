import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import Card from "../Card";

const ScrollWrapper = () => {
  const [left, setLeft] = useState(-50);
  const [top, setTop] = useState(-50);
  const scroll = useRef(0);
  const [stop, setStop] = useState(false);

  const handleScroll = () => {
    let yy = document.documentElement.scrollTop;

    scroll.current = yy;
    console.log(scroll.current);
    if (3000 <= scroll.current && scroll.current <= 3050) {
      window.onscroll = function () {
        window.scrollTo(0, 3000);
      };
      setTimeout(() => {
        window.onscroll = function () {};
      }, 1000);
      // setStop(true);
      // setTimeout(() => {
      //   setStop(false);
      // }, 500);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container stop={stop}>
      <Test left={left} top={top}></Test>
    </Container>
  );
};

export default ScrollWrapper;

export const Container = styled.div`
  height: 8000px;
  width: 100%;
  position: relative;

  ${(props) =>
    props.stop &&
    css`
      height: 100%;
      min-height: 100%;
      over-flow: hidden;
      touch-action: none;
    `};
`;

export const Test = styled.div`
  position: fixed;
  background-color: red;
  width: 200px;
  height: 200px;
  top: 50%;
  left: 50%;
  transform: ${(props) => `translate(${props.left}%, ${props.top}%)`};
`;
