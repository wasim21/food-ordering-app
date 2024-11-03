import React, { useState } from 'react';
import { Modal, Button, Form, InputGroup } from 'react-bootstrap';
import { AiOutlineClose } from 'react-icons/ai';

const LoginSignupModal = ({ show, handleClose }) => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Signup
  const [step, setStep] = useState(1); // Track signup steps

  // State for form fields
  const [phoneOrEmail, setPhoneOrEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Handle form submission (basic placeholder functions)
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in with:', phoneOrEmail, password);
    // Integrate login API here
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    if (step === 1) {
      console.log('Sending OTP to:', phoneOrEmail);
      setStep(2); // Move to OTP step
      // Integrate OTP API here
    } else if (step === 2) {
      console.log('Verifying OTP:', otp);
      setStep(3); // Move to password creation step if OTP is valid
      // Integrate OTP verification API here
    } else if (step === 3) {
      console.log('Creating account with password:', password, confirmPassword);
      // Integrate account creation API here
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header>
        <Modal.Title>{isLogin ? 'Login' : 'Sign Up'}</Modal.Title>
        <AiOutlineClose className="close-icon" onClick={handleClose} />
      </Modal.Header>
      <Modal.Body>
        {isLogin ? (
          // Login Form
          <Form onSubmit={handleLoginSubmit}>
            <Form.Group>
              <Form.Label>Mobile Number or Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter mobile number or email"
                value={phoneOrEmail}
                onChange={(e) => setPhoneOrEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Button type="submit" variant="primary" block>
              Login
            </Button>
          </Form>
        ) : (
          // Signup Form with steps
          <Form onSubmit={handleSignupSubmit}>
            {step === 1 && (
              <>
                <Form.Group>
                  <Form.Label>Mobile Number or Email</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter mobile number or email"
                    value={phoneOrEmail}
                    onChange={(e) => setPhoneOrEmail(e.target.value)}
                    required
                  />
                </Form.Group>
                <Button type="submit" variant="primary" block>
                  Send OTP
                </Button>
              </>
            )}
            {step === 2 && (
              <>
                <Form.Group>
                  <Form.Label>Enter OTP</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    required
                  />
                </Form.Group>
                <Button type="submit" variant="primary" block>
                  Verify OTP
                </Button>
              </>
            )}
            {step === 3 && (
              <>
                <Form.Group>
                  <Form.Label>Create Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Re-enter Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Re-enter password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </Form.Group>
                <Button type="submit" variant="primary" block>
                  Create Account
                </Button>
              </>
            )}
          </Form>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="link"
          onClick={() => {
            setIsLogin(!isLogin);
            setStep(1);
          }}
        >
          {isLogin ? 'Create an account' : 'Already have an account? Log In'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LoginSignupModal;
