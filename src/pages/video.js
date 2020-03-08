import React from "react"
import { Link } from "gatsby-plugin-modal-routing"

import VideoModal from "../Components/videomodal"

const Video = () => (
  <VideoModal>
    <div className="wistia_responsive_padding" style={whistia1}>
      <div className="wistia_responsive_wrapper" style={whistia2}>
        <iframe
          src="https://fast.wistia.net/embed/iframe/4zcz3rxerf?seo=false&videoFoam=true"
          title="Hey there, welcome to Wistia! Video"
          allowtransparency="true"
          frameborder="0"
          scrolling="no"
          className="wistia_embed"
          name="wistia_embed"
          allowfullscreen
          mozallowfullscreen
          webkitallowfullscreen
          oallowfullscreen
          msallowfullscreen
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </div>
  </VideoModal>
)

const whistia1 = {
  padding: "56.25% 0 0 0",
  position: "relative",
}

const whistia2 = {
  height: "100%",
  left: "0",
  position: "absolute",
  top: "0",
  width: "100%",
}

export default Video
