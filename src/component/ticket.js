import React, { Component } from 'react';
import './css/App.css';
const tickets =[
  {title: 'JamshedpurFC - ISL Season 4', address: 'JRD Tata Sports Complex, Bhubaneshwar, Jamshedpur', price: 'INR 50 - 2,500', date: 'SAT, FEB 10, 2018 20:00 Onward'},
  {title: 'JamshedpurFC - ISL Season 4', address: 'JRD Tata Sports Complex, Bhubaneshwar, Jamshedpur', price: 'INR 50 - 2,500', date: 'SAT, FEB 10, 2018 20:00 Onward'},
  {title: 'JamshedpurFC - ISL Season 4', address: 'JRD Tata Sports Complex, Bhubaneshwar, Jamshedpur', price: 'INR 50 - 2,500', date: 'SAT, FEB 10, 2018 20:00 Onward'},
  {title: 'JamshedpurFC - ISL Season 4', address: 'JRD Tata Sports Complex, Bhubaneshwar, Jamshedpur', price: 'INR 50 - 2,500', date: 'SAT, FEB 10, 2018 20:00 Onward'},
  {title: 'JamshedpurFC - ISL Season 4', address: 'JRD Tata Sports Complex, Bhubaneshwar, Jamshedpur', price: 'INR 50 - 2,500', date: 'SAT, FEB 10, 2018 20:00 Onward'},
  {title: 'JamshedpurFC - ISL Season 4', address: 'JRD Tata Sports Complex, Bhubaneshwar, Jamshedpur', price: 'INR 50 - 2,500', date: 'SAT, FEB 10, 2018 20:00 Onward'}
  ]
class Ticket extends Component {
  rendertickets = () => (
    tickets.map(function(data, key){
      return(
        <div key={key} className="col-xs-12 col-sm-6 col-lg-4">
          <div className="box">
            <div className="dropdown visiter-icon">
              <div className="dropdown-menu">
                <p>Who's attending (9)</p>
                <a href="#"> <img src="http://www.kyazoonga.com/images/rsvp-blank-1.jpg" alt="" /> </a>
                <a href="#"> <img src="http://www.kyazoonga.com/images/rsvp-blank-1.jpg" alt="" /> </a>
                <a href="#"> <img src="http://www.kyazoonga.com/images/rsvp-blank-1.jpg" alt="" /> </a>
                <a href="#"> <img src="http://www.kyazoonga.com/images/rsvp-blank-1.jpg" alt="" /> </a>
                <a href="#"> <img src="http://www.kyazoonga.com/images/rsvp-blank-1.jpg" alt="" /> </a>
                <a href="#"> <img src="http://www.kyazoonga.com/images/rsvp-blank-1.jpg" alt="" /> </a>
                <a href="#"> <img src="http://www.kyazoonga.com/images/rsvp-blank-1.jpg" alt="" /> </a>
                <a href="#"> <img src="http://www.kyazoonga.com/images/rsvp-blank-1.jpg" alt="" /> </a>
                <a href="#"> <img src="http://www.kyazoonga.com/images/rsvp-blank-1.jpg" alt="" /> </a>
                <a href="#"> <img src="http://www.kyazoonga.com/images/rsvp-blank-1.jpg" alt="" /> </a>
              </div>
            </div>
            <a href="#" className="block-link">
              <div className="ticket-img">
                <img src="http://54.149.90.101/EventBuilder/Images/sport/ht-isl-jfc.gif" alt="" />
                <span className="ticket-price">{data.price}</span>
              </div>
              <div className="ticket-info">
                <span className="time-info">{data.date}</span>
                <h3 className="ticket-title">{data.title}</h3>
                <p className="venue-info">{data.address}</p>
              </div>
            </a>
            <div className="social clearfix">
              <div className="pull-left">
                <a className="btn btn-default btn-xs ical" href="#">
              <i className="fa fa-calendar"></i> &nbsp;iCal</a>
                <a className="btn btn-default btn-xs ml-10" href="#">
              <i className="fa fa-calendar"></i> &nbsp;Google</a>
              </div>
              <div className="pull-right">
                <a className="btn btn-default btn-xs btn-circle" href="#">
              <i className="fa fa-facebook"></i></a>
                <a className="btn btn-default btn-xs btn-circle" href="#">
              <i className="fa fa-twitter"></i></a>
                <a className="btn btn-default btn-xs btn-circle" href="#">
              <i className="fa fa-twitter"></i></a>
                <a className="btn btn-default btn-xs btn-circle" href="#">
              <i className="fa fa-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>
      )
    })
  ) 
  render() {
    return (
      <section className="hot-ticket-sec ticket-boxes">
        <div className="container">
          <h2 className="site-title">Hot Tickets <small>Get tickets to your favourite events</small></h2>
          <div className="row">
            {this.rendertickets()}
          </div>
          <div className="btn-sec text-center p-20 pt-0">
            <a href="#" className="btn btn-primary btn-custome-lg">Discover More</a>
          </div>
        </div>
      </section>
    );
  }
}

export default Ticket;
