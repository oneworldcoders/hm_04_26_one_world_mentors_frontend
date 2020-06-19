import React, { useState } from "react";
import { Button, Modal } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import { forgotPassword } from "../../redux/actions/forgorPassword";


const ConfirmEmail = (props) => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState();
  const dispatch = useDispatch();
  // const forgotPasswordStatus = useSelector(state => state.forgotPasswordReducer.forgotpassword)

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(forgotPassword({email}))
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <p className='h6' style={{ cursor: 'pointer', color: 'blue', marginLeft: '20rem' }} onClick={handleShow}>
        Forgot Password
      </p>

      <Modal show={show} onHide={handleClose} centered backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Confirm Email</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="col-sm-9">
              <input
                id="loginEmailInput"
                type="text"
                required
                className="form-control form-control-lg"
                placeholder="Enter email"
                name="email"
                onChange={onEmailChange}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Send Verification Code
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ConfirmEmail;