import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Stack, Frame } from 'react-framestack'
const lorem = `Lorem ipsum dolor sit amet`;

const NavButton = ({ navigate, children, ...props }) => {
  const handleClick = e => {
    e.preventDefault();
    e.stopPropagation();
    navigate();
  };
  return (
    <span {...props} onClick={handleClick}>
      {children}
    </span>
  );
};

const Slide = ({ next, prev, children }) => (
  <div className="slide" onClick={next}>
    {children}
    <NavButton
      style={{ position: "absolute", bottom: "1em", left: "1em" }}
      navigate={prev}
    >
      &larr;
    </NavButton>
    <NavButton
      style={{ position: "absolute", bottom: "1em", right: "1em" }}
      navigate={next}
    >
      &rarr;
    </NavButton>
  </div>
);

const Title = ({ children }) => <h1>{children}</h1>;

const Body = ({ color = "black", children }) => (
  <p style={{ color: color }}>{children}</p>
);

// Helper to simplify events
const createSlide = Component => dispatch => {
  const next = () => dispatch("goForward");
  const prev = () => dispatch("goBack");
  return (
    <Slide next={next} prev={prev}>
      <Component />
    </Slide>
  );
};

const SlideOne = createSlide(() => (
  <div>
    <Title>Slide One</Title>
    <Body>{lorem}</Body>
  </div>
));

const SlideTwo = createSlide(() => (
  <div>
    <Title>Slide Two</Title>
    <Body color="red">{lorem}</Body>
  </div>
));

const End = dispatch => (
  <div className="slide" style={{ background: "black" }}>
    <p>
      <a href="#" onClick={() => dispatch("jumpTo", 0)}>
        Restart
      </a>
    </p>
  </div>
);

const SlideShow = () => (
  <Stack stack="slides">
    {[SlideOne, SlideTwo, End].map((slide, i) => (
      <Frame frame={i} stack="slides" key={slide.name}>
        {slide}
      </Frame>
    ))}
  </Stack>
);

export default SlideShow;
