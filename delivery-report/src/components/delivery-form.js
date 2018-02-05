import React from 'react';



export class DeliveryForm extends React.Component {


  render() {
    return(
    <div class="delivery-form">
     <h2>Report a problem with your delivery</h2>
      <form>
        <div class='form-input'>
          <label htmlFor="tracking-num">Tracking number</label>
          <input type="text" name='tracking-num' id='tracking-num'/>
        </div>
        <div class='form-input'>
          <label htmlFor='delivery-issue-list'>What is your issue?</label>
           <select id="delivery-issue-list">
              <option value="My delivery hasn't arrived">My delivery hasn't arrived</option>
              <option value="The wrong item was deliverd">The wrong item was deliverd</option>
              <option value="Part of my order was missing">Part of my order was missing</option>
              <option value="Some of my order arrived damaged">Some of my order arrived damaged</option>
              <option value="Other (give details below)">Other (give details below)</option>
            </select>
            </div>
          <div class='form-input'>
            <label htmlFor="other-issue">Give more details (optional)</label>
            <textarea id="other-issue" name="other-issue"></textarea>
          </div>
            <button type="submit">Submit</button>   
        </form>
      </div>
    )
  }
}