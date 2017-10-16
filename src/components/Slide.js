import React from "react"
import styled from "react-emotion"

const SlideContainer = styled('div')`
  height: 100vh;
  overflow: hidden;
  padding: 1em;
  background: ${props => props.theme.slideBg};
`

const NavButton = ({ navigate, children, ...props }) => {
  const handleClick = e => {
    e.preventDefault()
    e.stopPropagation()
    navigate()
  }
  return (
    <span {...props} onClick={handleClick}>
      {children}
    </span>
  )
}

export const Slide = ({ next, prev, children }) => (
  <SlideContainer onClick={next}>
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
  </SlideContainer>
)