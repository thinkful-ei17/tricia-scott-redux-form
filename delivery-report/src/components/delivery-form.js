import React from 'react';
import {reduxForm, Field} from 'redux-form';



export class DeliveryForm extends React.Component {
  
  onSubmit(values){
    console.log(values);
  }

  render() {
    return(
    <div className="delivery-form">
     <h2>Report a problem with your delivery</h2>
      <form
        onSubmit={this.props.handleSubmit(values =>
          this.onSubmit(values)
      )}>
        <div className='form-input'>
          <label htmlFor="tracking-num">Tracking number</label>
          <Field component='input' type="text" name='tracking-num' id='tracking-num'/>
        </div>
        <div className='form-input'>
          <label htmlFor='delivery-issue-list'>What is your issue?</label>
           <Field component='select' id="delivery-issue-list" name='delivery-issue-list'>
              <option value="My delivery hasn't arrived">My delivery hasn't arrived</option>
              <option value="The wrong item was deliverd">The wrong item was deliverd</option>
              <option value="Part of my order was missing">Part of my order was missing</option>
              <option value="Some of my order arrived damaged">Some of my order arrived damaged</option>
              <option value="Other (give details below)">Other (give details below)</option>
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