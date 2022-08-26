import React, { Component } from 'react'
import { connect } from 'react-redux'
import './TicketBooking.css'

export class TicketBooking extends Component {
  render() {
    return (
      <div>TicketBooking</div>
    )
  }
}

const mapStateToProps = (state) => ({})



export default connect(mapStateToProps)(TicketBooking)