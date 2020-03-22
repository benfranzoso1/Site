import React from "react"
import Countdown, { zeroPad } from "react-countdown"


const tenMinutesFromNow = () => new Date(new Date().getTime() + 10 * 60 * 1000)

export default ({ location }) => {
  let name = ""
  if (location.hasOwnProperty("state")) {
    name = location.state.name || ""
  }
  return (
    // this was the wrapper
    <div >
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
    </div>
  )
}
