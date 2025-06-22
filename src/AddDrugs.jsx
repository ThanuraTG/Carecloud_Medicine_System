import React from 'react';
import"./AddDrugs.css";
import VerticalMenu from './Components/verticalmenu';
import Header from './Components/Header';

const DrugsForm = () => {
  return (
  <div>
    <VerticalMenu/>
    <Header/>  
    
    <div className="form-container-Add">
      
      <h1 className='Hadd'>DRUGS REGISTRATION FORM</h1>
      <p className="form-instruction-Add">
        Use the form below to enter drug details..!
      </p>
      <form>
        <div className="form-section-Add">
          <fieldset className="fieldset-1">
            <legend>Drugs Details</legend>
            <div className="form-group">
              <label>Generic Name</label>
              <input type="text" placeholder="Enter drug trade name" />
            </div>
            <div className="form-group">
              <label>Strength</label>
              <input type="text" placeholder="Enter drug strength" />
            </div>
            <div className="form-group">
              <label>Type of Medicine</label>
              <select>
                <option>Tablet</option>
                <option>Capsule</option>
                <option>Syrup</option>
                <option>Drops</option>
                <option>Injection</option>
                <option>Inhaler</option>
              </select>
            </div>
            <div className="form-group">
              <label>Quantity</label>
              <input type="number" placeholder="Amount" />
            </div>
            <div className="form-group">
              <label>Purchased Price</label>
              <input type="number" placeholder="Purchasing Price" />
            </div>
            <div className="form-group">
              <label>Per Marker</label>
              <input type="text" placeholder="e.g 1.5" />
            </div>
          </fieldset>

          <fieldset className="fieldset">
            <legend>Vendor Details</legend>
            <div className="form-group">
              <label>Vendor Full Name</label>
              <input type="text" placeholder="Vendor full name" />
            </div>
            <div className="form-group">
              <label>Location</label>
              <input type="text" placeholder="Vendor location" />
            </div>
            <div className="form-group">
              <label>Contact Phone</label>
              <input type="tel" placeholder="Enter Vendor phone" />
            </div>
            <div className="form-group">
              <label>Vendor Email</label>
              <input type="email" placeholder="Amount" />
            </div>
            <div className="form-group">
              <label>Manufactured Date</label>
              <input type="date" />
            </div>
            <div className="form-group">
              <label>Expire Date</label>
              <input type="date" />
            </div>
          </fieldset>
        </div>
        <div className="form-buttons">
          <button type="submit" className="btn-submit"  onClick={() => alert('Form Submitted!')}>Submit</button>
          <button type="reset" className="btn-clear" >Clear</button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default DrugsForm;
