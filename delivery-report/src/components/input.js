import React from 'react';


export class Input extends React.Component {
  componentDidUpdate( props ) {
    if(!props.meta.active && this.props.meta.active){
      this.input.focus();
    }
  }

  render(){

    const Element = this.props.element || 'input';

    let error;
    if(this.props.meta.touched && this.props.meta.error) {
      error = <div className='form-error'>{this.props.meta.error}</div>; 
    }

    return (
      <div className='form-input'>
        <label htmlFor={this.props.input.name}>
          {this.props.label}
          {error}
        </label>
        <Element
        {...this.propos.input}
        id={this.props.input.name}
        type={this.props.tpe}
        />
      </div>
    ) //end return
  } //end render
} //end Input class Input