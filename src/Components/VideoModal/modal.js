import React from "react"
import ReactModal from "react-modal"
import Play from "../../assets/play.svg"

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

class VideoModal extends React.PureComponent {
  state = {
    showModal: false,
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal })
  }

  render() {
    const {
      toggleModal,
      state: { showModal },
    } = this
    return (
      <>
        <button className="playbutton" onClick={toggleModal}>
        <Play className="play"/>
        </button>
        <ReactModal
          shouldCloseOnEsc={true}
          shouldCloseOnOverlayClick={true}
          isOpen={showModal}
          onRequestClose={toggleModal}
        >
          <div className="wistia_responsive_padding" style={whistia1}>
            <div className="wistia_responsive_wrapper" style={whistia2}>
              <iframe
                src="https://fast.wistia.net/embed/iframe/4zcz3rxerf?seo=false%26videoFoam=true"
                title="Hey there, welcome to Wistia! Video"
                frameBorder={0}
                scrolling="no"
                className="wistia_embed"
                name="wistia_embed"
                allowFullScreen={true}
                width="100%"
                height="100%"
              ></iframe>
            </div>
          </div>
        </ReactModal>
      </>
    )
  }
}

export default VideoModal
