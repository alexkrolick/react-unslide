import React from 'react'
import styled from 'react-emotion'
import { css } from 'emotion'

const slide = css`
  height: 100vh;
  overflow: hidden;
  padding: 1em;
  background: black;
`

export const End = dispatch => (
  <div className={slide}>
    <p>
      <a href="#" onClick={() => dispatch("jumpTo", 0)}>
        Restart
      </a>
    </p>
  </div>
);