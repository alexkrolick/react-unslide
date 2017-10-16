import React, { Component } from "react"
import { ThemeProvider } from "emotion-theming"
import styled from "react-emotion"
import { Stack, Frame } from "react-framestack"
import { Title, Text, Slide, End } from "./components"
import "./App.css"

const lorem = `Lorem ipsum dolor sit amet`

const createSlide = Component => dispatch => {
  const next = () => dispatch("goForward")
  const prev = () => dispatch("goBack")
  return (
    <Slide next={next} prev={prev}>
      <Component />
    </Slide>
  )
}

const SlideOne = createSlide(() => (
  <div>
    <Title>Slide One</Title>
    <Text>{lorem}</Text>
  </div>
))

const SlideTwo = createSlide(() => (
  <div>
    <Title>Slide Two</Title>
    <Text color="red">{lorem}</Text>
  </div>
))

const traditional = {
  headingFont: "Georgia",
  headingColor: "#121215",
  headingWeight: 700,
  slideBg: "parchment",
}

const seventies = {
  headingFont: "Modak",
  headingColor: "gold",
  headingWeight: 300,
  slideBg: "#526",
}

const ThemeSelect = styled("select")`
  position: fixed;
  left: 5em;
  bottom: 2em;
`

class SlideShow extends Component {
  themes = {
    traditional: traditional,
    seventies: seventies,
  }

  state = {
    selectedTheme: "traditional",
  }

  changeTheme = e => {
    this.setState({ selectedTheme: e.target.value })
  }

  render() {
    return (
      <div>
        <ThemeSelect
          onChange={this.changeTheme}
          value={this.state.selectedTheme}
        >
          {Object.keys(this.themes).map(theme => (
            <option value={theme}>{theme}</option>
          ))}
        </ThemeSelect>
        <ThemeProvider theme={this.themes[this.state.selectedTheme]}>
          <Stack stack="slides">
            {[SlideOne, SlideTwo, End].map((slide, i) => (
              <Frame frame={i} stack="slides" key={slide.name}>
                {slide}
              </Frame>
            ))}
          </Stack>
        </ThemeProvider>
      </div>
    )
  }
}

export default SlideShow
