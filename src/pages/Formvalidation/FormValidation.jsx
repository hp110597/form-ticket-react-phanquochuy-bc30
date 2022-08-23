import React, { Component } from 'react'
import { connect } from 'react-redux'
import Form from './Form'
import Table from './Table'
 
class FormValidation extends Component {
  render() {
    return (
      <div className='container' >
        <h3>Form Validation</h3>
        <Form/>
        <br />
        <Table/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({})



export default connect(mapStateToProps)(FormValidation)