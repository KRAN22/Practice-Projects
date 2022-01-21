import React from "react";
import Launch from "../Launch/Launch";
import "./styles.css";

class Launches extends React.Component {
  render() {
    return (
      <div className="launches">
        <Launch
          banner="https://farm5.staticflickr.com/4174/33859521334_d75fa367d5_o.jpg"
          title="FalconSat"
          launchDate="2006-03-25T10:30:00+12:00"
          description="At 6,070 kg this was the heaviest payload launched to GTO by a
                Falcon 9 rocket. The launch was originally scheduled for the Falcon
                Heavy, but performance improvements allowed the mission to be
                carried out by an expendable Falcon 9 instead."
        />
        <Launch
          banner="https://farm5.staticflickr.com/4174/33859521334_d75fa367d5_o.jpg"
          title="FalconSat"
          launchDate="2006-03-25T10:30:00+12:00"
          description="At 6,070 kg this was the heaviest payload launched to GTO by a
                Falcon 9 rocket. The launch was originally scheduled for the Falcon
                Heavy, but performance improvements allowed the mission to be
                carried out by an expendable Falcon 9 instead."
        />
        <Launch
          banner="https://farm5.staticflickr.com/4174/33859521334_d75fa367d5_o.jpg"
          title="FalconSat"
          launchDate="2006-03-25T10:30:00+12:00"
          description="At 6,070 kg this was the heaviest payload launched to GTO by a
              Falcon 9 rocket. The launch was originally scheduled for the Falcon
              Heavy, but performance improvements allowed the mission to be
              carried out by an expendable Falcon 9 instead."
        />
      </div>
    );
  }
}

export default Launches;
