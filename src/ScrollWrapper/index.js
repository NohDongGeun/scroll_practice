import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import Card from "../Card";
import { useKeenSlider } from "keen-slider/react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";
import "./index.css";

const ScrollWrapper = () => {
  const [options, setOptions] = useState({});
  const [sliderRef] = useKeenSlider(options);
  const [width, setWidth] = useState(0);
  const slider = useRef(null);

  useEffect(() => {
    console.log(width);
  }, [width]);

  const resize = () => {
    const customWidth = window.innerWidth - 1720;
    const innerWidth = window.innerWidth / 432;
    setOptions({
      centered: true,
      loop: true,
      resize:() => {
        
      },
      slidesPerView: () => {
        return innerWidth;
      },
    });
  };

  useEffect(() => {
    resize();

    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <Container ref={sliderRef} className="keen-slider" width={width}>
      <Cards1 className="keen-slider__slide">
        <img src="https://picsum.photos/284/190?3" />
        <h1>Sed at diam id leo pulvinar dapibus</h1>
      </Cards1>
      <Cards2 className="keen-slider__slide">
        <img src="https://picsum.photos/284/190?3" />
        <h1>Sed at diam id leo pulvinar dapibus</h1>
      </Cards2>
      <Cards3 className="keen-slider__slide">
        <img src="https://picsum.photos/284/190?3" />
        <h1>Sed at diam id leo pulvinar dapibus</h1>
      </Cards3>
      <Cards4 className="keen-slider__slide">
        <img src="https://picsum.photos/284/190?3" />
        <h1>Sed at diam id leo pulvinar dapibus</h1>
      </Cards4>
      <Cards5 className="keen-slider__slide">
        <img src="https://picsum.photos/284/190?3" />
        <h1>Sed at diam id leo pulvinar dapibus</h1>
      </Cards5>
    </Container>
  );
};

export default ScrollWrapper;

export const Container = styled.div`
  border: 1px solid red;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;
export const Cards1 = styled.div`
  height: 300px;
  background-color: red;
`;

export const Cards2 = styled.div`
  height: 300px;
  background-color: blue;
`;

export const Cards3 = styled.div`
  height: 300px;
  background-color: black;
`;
export const Cards4 = styled.div`
  height: 300px;
  background-color: yellow;
`;
export const Cards5 = styled.div`
  height: 300px;
  background-color: purple;
`;
