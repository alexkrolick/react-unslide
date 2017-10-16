import React from "react"
import styled from "react-emotion"

export const Title = styled('h1')`
  font-family: ${p => p.theme.headingFont};
  font-weight: ${p => p.theme.headingWeight};
  color: ${p => p.theme.headingColor};
`
