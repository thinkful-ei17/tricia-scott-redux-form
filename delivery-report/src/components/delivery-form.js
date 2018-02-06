import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {required, nonEmpty, length, number, selection} from '../validators';
import Input from './input';
import {makePost} from '../actions';



export class DeliveryForm extends React.Component {
  
  onSubmit(values){
    return this.props.dispatch(makePost(values));
  }

  render() {
    // debugger
    let errorMessage;
    if (this.props.error){
      errorMessage = <div>{this.props.error}</div>
    }

    let successMessage;
    if (this.props.submitSucceeded) {
      successMessage = <div>Your report was Successfully Submitted.</div>;
    }

    return (
      <div className="delivery-form">
        
        <h2>Report a problem with your delivery</h2>

        <form
          onSubmit={this.props.handleSubmit(values => this.onSubmit(values))
        }>

        {successMessage}
        {errorMessage}

        <div className='form-input'>
          <label htmlFor="trackingNumber">Tracking number</label>
          <Field 
            component={Input} 
            element='input'
            type="text" 
            name='trackingNumber' 
            id='trackingNumber' 
            validate={[required, nonEmpty, length, number]}
          />
        </div>

        <div className='form-input'>
          <label htmlFor='delivery-issue-list'>What is your issue?</label>
           <Field 
            component={Input}
            element='select'
            id="delivery-issue-list" 
            name='delivery-issue-list'
            validate={[selection]}>
              <option value="not-delivered" default>My delivery hasn't arrived</option>
              <option value="wrong-item">The wrong item was deliverd</option>
              <option value="missing-part">Part of my order was missing</option>
              <option value="damaged">Some of my order arrived damaged</option>
              <option value="other">Other (give details below)</option>
            </Field>
            </div>
        <div className='form-input'>
          <label htmlFor="other-issue">Give more details (optional)</label>
          <Field component='textarea' id="other-issue" name="other-issue"></Field>
        </div>
          <button type="submit">Submit</button>   
      </form>
    </div>
    )
  }
}

export default reduxForm({
  form: 'delivery'
})(DeliveryForm);