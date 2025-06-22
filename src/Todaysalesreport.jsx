import React, { useState } from 'react';

const AddUserModal = ({ showModal, closeAddUserModal }) => {
  return (
    showModal && (
      <div className="modal show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add User to the System</h5>
              <button type="button" className="close" onClick={closeAddUserModal}>
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label>First Name:*</label>
                  <input type="text" className="form-control" required />
                </div>
                <div className="form-group">
                  <label>Surname:*</label>
                  <input type="text" className="form-control" required />
                </div>
                <div className="form-group">
                  <label>Staff Designation:</label>
                  <select className="form-control">
                    <option>Medical Doctor</option>
                    <option>Nurse</option>
                    <option>Administrator</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Email Addr:*</label>
                  <input type="email" className="form-control" required />
                </div>
                <div className="form-group">
                  <label>Phone:*</label>
                  <input type="tel" className="form-control" required />
                </div>
                <div className="form-group">
                  <label>Password:*</label>
                  <input type="password" className="form-control" required />
                </div>
                <div className="form-group">
                  <label>Repeat Password:*</label>
                  <input type="password" className="form-control" required />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={closeAddUserModal}>Close</button>
              <button type="button" className="btn btn-primary">Save</button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default AddUserModal;
