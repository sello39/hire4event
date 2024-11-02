import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import "./CustomModal.css";

interface CustomModalProps {
  open: boolean;
  handleClose: () => void;
  style: object;
}

const CustomModal: React.FC<CustomModalProps> = ({
  open,
  handleClose,
  style,
}) => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <div className="input-box">
              <input type="text" placeholder="Name*" required />
            </div>
            <div className="input-box">
              <input type="numbers" placeholder="Contact Number*" required />
            </div>
            <div className="input-box">
              <input type="email" placeholder="Email*" required />
            </div>
            <div className="input-box">
              <input type="budget" placeholder="Your Budget*" required />
            </div>
          </>
        );
      case 2:
        return (
             <>
          <div className="material-selection">
            <fieldset>
              <legend>What are you looking for?</legend>
              <label className="material-checkbox">
                <input id="chairs" type="checkbox" value="1" />
                <span className="checkmark"></span>
                Chairs
              </label>
              <label className="material-checkbox">
                <input id="tables" type="checkbox" value="2" />
                <span className="checkmark"></span>
                Tables
              </label>
              <label className="material-checkbox">
                <input id="tents" type="checkbox" value="3" />
                <span className="checkmark"></span>
                Tents
              </label>
              <label className="material-checkbox">
                <input id="carpets" type="checkbox" value="4" />
                <span className="checkmark"></span>
                Carpets (red or green)
              </label>
              <label className="material-checkbox">
                <input id="stage" type="checkbox" value="5" />
                <span className="checkmark"></span>
                Stage
              </label>
              <label className="material-checkbox">
                <input id="baracade" type="checkbox" value="6" />
                <span className="checkmark"></span>
                Baracades/Fence
              </label>
              <label className="material-checkbox">
                <input id="lights" type="checkbox" value="7" />
                <span className="checkmark"></span>
                Lights
              </label>
              <label className="material-checkbox">
                <input id="sound" type="checkbox" value="8" />
                <span className="checkmark"></span>
                Sound
              </label>
            </fieldset>
          </div>
        </>
        );
      case 3:
        return (
          <>
            <div className="input-box">
              <p>Event description?</p>
              <textarea placeholder="This is a wedding event..."></textarea>
            </div>
            <div className="input-box">
              <input type="date" className="datepicker" required />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
  sx={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }}
>
  <Box className="wrapper">
    <CancelPresentationIcon
      onClick={handleClose}
      className="close-icon"
    />
    <form action="">
      <div className="modal-title">Get A Quote</div>
      {renderStep()}
      <div className="button-group">
        {currentStep > 1 && (
          <button type="button" onClick={prevStep} className="btn">
            Previous
          </button>
        )}
        {currentStep < 3 && (
          <button type="button" onClick={nextStep} className="btn">
            Next
          </button>
        )}
        {currentStep === 3 && (
          <button type="submit" className="btn">
            Submit
          </button>
        )}
      </div>
    </form>
  </Box>
</Modal>
  );
};

export default CustomModal;

// add location picker to the CustomModal && items quantity selection
/* gradient border && Date Picker */