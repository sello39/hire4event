import React from 'react';
import CustomModal from '../modal/CustomModal';


const IntroSection = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: 'black',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <div className="intro-section">
        <h1>Welcome to Hire For Event</h1>
        <p>
            We provide all the equipment and services you need to make your event a success in minutes.  
        </p>
        <br></br>
        <p>
          For all your event planning needs, we have you covered. Find qualified local event set up and tear down staff.
        </p>
        <button onClick={handleOpen}>Request Qoute</button>
        <CustomModal open={open} handleClose={handleClose} style={style} />

    </div>
  );
};

export default IntroSection;