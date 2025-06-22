import React, { useState } from 'react';
import './css/AddUserModal.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons
import { AddUserModal as CreateUserAPI } from './api'; // Renaming the imported AddUserModal

const AddUserModal = ({ show, closeModal }) => {
  const [userData, setUserData] = useState({
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    repeatPassword: '',
    roleId: '',
  });

  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false); // Track submission state

  if (!show) return null;

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setUserData({ ...userData, [name]: value });
  // };
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`Changing ${name} to`, value); // Debug log
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Password:', userData.password);
console.log('Repeat Password:', userData.repeatPassword);


    // Reset error state
    setError('');

    // Basic client-side validation
    if (userData.password.trim() !== userData.repeatPassword.trim()) {
      setError('Passwords do not match');
      return;
    }

    if (!userData.email.includes('@')) {
      setError('Please provide a valid email address.');
      return;
    }

    setIsSubmitting(true);

    try {
      const { repeatPassword, ...dataToSubmit } = userData; // Exclude repeatPassword
      console.log('Payload being sent to backend:', dataToSubmit); // Debug log

      const response = await CreateUserAPI(dataToSubmit);

      if (response.status === 201) {
        alert('User created successfully!');
        setUserData({
          username: '',
          password: '',
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          repeatPassword: '',
          roleId: '',
        });
        setError('');
        closeModal();
      }
    } catch (error) {
      console.error('Error creating user:', error);
      setError(error.response?.data || 'An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="modal show"
      style={{
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
      }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add User to the System</h5>
            <button type="button" className="close" onClick={closeModal}>
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>First Name:</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={userData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Surname:</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={userData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Staff Designation:</label>
                <input
                  type="text"
                  name="roleId"
                  placeholder="Role ID"
                  value={userData.roleId}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email Address:</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={userData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Phone Number:</label>
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  value={userData.phoneNumber}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Username:</label>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={userData.username}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Password:</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={userData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Repeat Password:</label>
                <input type="password" name="repeatPassword" placeholder="Repeat Password" value={userData.repeatPassword} onChange={handleChange} required />
              </div>
              {error && <p className="text-danger">{error}</p>}
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={closeModal}>
              Close
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Saving...' : 'Save'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUserModal;
