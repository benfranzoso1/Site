import React from "react"
import styled from "styled-components"
import Countdown, { zeroPad } from "react-countdown"
const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  flex-basis: 1;
  justify-content: center;
  align-items: center;

  h1 {
    font-weight: 400;
  }

  h4 {
    font-weight: 400;
  }

  h2 {
    font-weight: 300;
  }
`

const tenMinutesFromNow = () => new Date(new Date().getTime() + 10 * 60 * 1000)

export default ({ location }) => {
  const {name} = location.state
  return (
    <Wrapper>
      <h1>Thank you, {name} </h1>
      <h4>You will receive a call from Ben or Brandon within 10 minutes.</h4>
      <h2>
        <Countdown
          zeroPadTime={2}
          renderer={({ minutes, seconds }) => {
            return (
              <div>
                {zeroPad(minutes)}:{zeroPad(seconds)}
              </div>
            )
          }}
          date={tenMinutesFromNow()}
        />
      </h2>
    </Wrapper>
  )
}
