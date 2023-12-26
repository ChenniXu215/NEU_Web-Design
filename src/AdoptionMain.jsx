
import { useId } from 'react';
import React, { useState } from 'react';

import Button from './Button';

import './AdoptionMain.css';

function AdoptionMain() {
  const id = useId();


  const [username, setUsername] = useState('');
  const [usernameIsMissing, setUsernameIsMissing] = useState(false);

  const [useremail, setUseremail] = useState('');
  const [useremailIsMissing, setUseremailIsMissing] = useState(false);

  const [usertel, setUsertel] = useState('');
  const [usertelIsMissing, setUsertelIsMissing] = useState(false);

  function usernameIsValid(name) {
      return !!name;
  }

  function useremailIsValid(email) {
      return !!email;
  }

  function usertelIsValid(tel) {
    return !!tel;
  }

  const [selectedMake, setSelectedMake] = useState('');
  const [selectedModel, setSelectedModel] = useState('');

  const raiseRecord = [
    { id: 1, name: 'Yes', models: ['Less than 1 year', '1 to 5 years', '5 to 10 years', 'More than 10 years'] },
    { id: 2, name: 'No', models: ['Accord', 'Civic', 'CR-V'] },];
    
    const handleMakeChange = (e) => {
      const make = e.target.value;
      setSelectedMake(make);
      setSelectedModel('');
    };
    
    const handleModelChange = (e) => {
      const model = e.target.value;
      setSelectedModel(model);
    };

    const [shippingAddress, setShippingAddress] = useState({
      street: '',
      city: '',
      state: '',
      zip: '',
    });
  
    const [billingAddress, setBillingAddress] = useState({
      street: '',
      city: '',
      state: '',
      zip: '',
    });
  
    const [sameAsShipping, setSameAsShipping] = useState(false);
  
    const handleShippingChange = (e) => {
      const { name, value } = e.target;
      setShippingAddress({ ...shippingAddress, [name]: value });
      if (sameAsShipping) {
        setBillingAddress({ ...shippingAddress, [name]: value });
      }
    };
  
    const handleBillingChange = (e) => {
      if (!sameAsShipping) {
        const { name, value } = e.target;
        setBillingAddress({ ...billingAddress, [name]: value });
      }
    };
  
    const handleCheckboxChange = () => {
      setSameAsShipping(!sameAsShipping);
      if (sameAsShipping) {
        setBillingAddress({
          street: '',
          city: '',
          state: '',
          zip: '',
        });
      } else {
        setBillingAddress({ ...shippingAddress });
      }
    };

  
    function cleanForm() {
      setUsernameIsMissing(false);
      setUseremailIsMissing(false);
      setUsertelIsMissing(false);
    }

    return (
        <main className="adoption__main" id='main-content' tabIndex={-1}>
            <h2>We Need Your Help!</h2>
            <div className='introduction'>
                <p>Your generosity brings homeless felines the food, medicine, and loving homes they need. Thank you for caring about homeless cats like them! 
                We’re here to help you every step of the way from “just looking” at over 250,000 adoptable pets, to bringing your pet home, to living a long and happy life with them.</p>
                <p>If you want to connect with us, please fill out below form and we will contact you as soon as possible.</p>
            </div>      
            <form className="adoption_register"
                        onSubmit={ (e) => {
                            e.preventDefault();
                            setUsernameIsMissing(!usernameIsValid(username));
                            setUseremailIsMissing(!useremailIsValid(useremail));
                            setUsertelIsMissing(!usertelIsValid(usertel));
                            if(usernameIsValid && useremailIsValid) {
                                setUsername('');
                                setUseremail('');
                                setUsertel('');
                                setSelectedMake('');
                                setSelectedModel('');
                                setShippingAddress({
                                  street: '',
                                  city: '',
                                  state: '',
                                  zip: '',
                                });
                                setBillingAddress({
                                  street: '',
                                  city: '',
                                  state: '',
                                  zip: '',
                                });
                                setSameAsShipping(false);
                            }
                        }}
            >
                <h3>Adopter Information</h3>
                <div className='form_detail'>
                  <div className="name">
                    <div className="label__require">
                      <label htmlFor={`${id}-name`}>Name: </label>
                        <p>*Required</p>
                    </div>
                    {usernameIsMissing && <span className='error'>Username is Required</span>}
                    <input id={`${id}-name`} className='input_name'
                      value={username}
                      onInput={ (e) => {
                      setUsername(e.target.value);
                      setUsernameIsMissing(!usernameIsValid(e.target.value));
                      }}
                    />
                  </div>
                  <div className="email">
                          <div className="label__require">
                              <label htmlFor={`${id}-email`}>Email: </label>
                              <p>*Required</p>
                          </div>
                          {useremailIsMissing && <span className='error'>Email is Required</span>}
                          <input type="text" id={`${id}-email`} className='input_email'
                              value={useremail}
                              onInput={ (e) => {
                                  setUseremail(e.target.value);
                                  setUseremailIsMissing(!useremailIsValid(e.target.value));
                              }}
                          />
                  </div>
                  <div className="tel">
                          <div className="label__require">
                              <label htmlFor={`${id}-tel`}>Telephone: </label>
                              <p>*Required</p>
                          </div>
                          {usertelIsMissing && <span className='error'>Telephone is Required</span>}
                          <input type="text" id={`${id}-tel`} className='input_tel'
                              value={usertel}
                              onInput={ (e) => {
                                  setUsertel(e.target.value);
                                  setUsertelIsMissing(!usertelIsValid(e.target.value));
                              }}
                          />
                      </div>
                  <div className='raise_record'>
                    <label className='record_label' htmlFor="makeSelect">Have you raise any pet before?</label>
                    <select className='record_option' id="makeSelect" value={selectedMake} onChange={handleMakeChange}>
                      <option value="">Please select</option>
                      {raiseRecord.map((make) => (
                        <option key={make.id} value={make.name}>
                          {make.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {selectedMake && selectedMake==='Yes' &&(
                    <div className='time'>
                      <label className='time_label' htmlFor="modelSelect">How long have you lived with your pet?</label>
                      <select className='time_option' id="modelSelect" value={selectedModel} onChange={handleModelChange}>
                        <option value="">Please select</option>
                        {raiseRecord
                          .find((make) => make.name === selectedMake)
                          ?.models.map((model, index) => (
                            <option key={index} value={model}>
                              {model}
                            </option>
                          ))}
                      </select>
                    </div>
                  )}
                  <div className='ship_info'>
                    <p className='ship_question'>If you want us to mail you our adoption brochure, please provide your address below:</p>
                    <p className='ship_remind'>Please remind that this will cost you 10 dollors fee for delivery.</p>
                  </div>
                  <div className='address'>
                    <h4 className='ship_title'>Shipping Address</h4>
                    <div className='shipping__street'>
                      <label className='street_label' htmlFor='street'>Street:</label>
                      <input className='street_input' id='street'
                          type="text"
                          name="street"
                          value={shippingAddress.street}
                          onChange={handleShippingChange}
                      />
                    </div>
                    <div className='shipping__city'>
                      <label className='city_label' htmlFor='city'>
                        City:</label>
                        <input className='city_input' id='city'
                          type="text"
                          name="city"
                          value={shippingAddress.city}
                          onChange={handleShippingChange}
                        />
                    </div>
                    <div className='shipping__state'>
                      <label className='state_label' htmlFor='state'>
                        State:</label>
                        <input className='state_input' id='state'
                          type="text"
                          name="state"
                          value={shippingAddress.state}
                          onChange={handleShippingChange}
                        />
                    </div>
                    <div className='shipping__zip'>
                      <label className='zip_label' htmlFor='zip'>
                        Zip:</label>
                        <input className='zip_input' id='zip'
                          type="text"
                          name="zip"
                          value={shippingAddress.zip}
                          onChange={handleShippingChange}
                        />
                    </div>
                    <div className='same_address'>
                      <div className='same_check'>
                        <input id='same'
                          type="checkbox"
                          checked={sameAsShipping}
                          onChange={handleCheckboxChange}
                        />
                        <label className='same_label' htmlFor='same'>Billing address same as shipping address
                        </label>
                      </div>
                    </div>
                    
                    <h4 className='bill_title'>Billing Address</h4>
                    <div className='billing__street'>
                      <label className='street_label' htmlFor='bill__street'>
                        Street:</label>
                        <input className='street_input' id='bill__street'
                          type="text"
                          name="street"
                          value={billingAddress.street}
                          onChange={handleBillingChange}
                          readOnly={sameAsShipping}
                        />
                    </div>
                    <div className='billing__city'>
                      <label className='city_label' htmlFor='bill__city'>
                        City:</label>
                        <input className='city_input' id='bill__city'
                          type="text"
                          name="city"
                          value={billingAddress.city}
                          onChange={handleBillingChange}
                          readOnly={sameAsShipping}
                        />
                    </div>
                    <div className='billing__state'>
                      <label className='state_label' htmlFor='bill__state'>
                        State:</label>
                        <input className='state_input' id='bill__state'
                          type="text"
                          name="state"
                          value={billingAddress.state}
                          onChange={handleBillingChange}
                          readOnly={sameAsShipping}
                        />
                    </div>
                    <div className='billing__zip'>
                      <label className='zip_label' htmlFor='bill__zip'>
                        Zip:</label>
                        <input className='zip_input' id='bill__zip'
                          type="text"
                          name="zip"
                          value={billingAddress.zip}
                          onChange={handleBillingChange}
                          readOnly={sameAsShipping}
                        />
                    </div>
                  </div>
                </div>
                <div className="button">
                  <Button className="apply__button" type="submit" visual="button" aria-label="submit to register">Apply</Button>
                </div>
            </form>
        </main>
    );
}

export default AdoptionMain;