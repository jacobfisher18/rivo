import React, { Component } from 'react';
import ReactModal from 'react-modal';

ReactModal.defaultStyles.overlay.backgroundColor = 'rgba(144, 19, 254, 0.8)';

class EventModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      date: "date",
      time: "time",
      price: "price",
      address: "address",
      ticketsLink: "",
      websiteLink: "",
      description: "description"
    }
  }

  componentWillMount() {
    /* set state via API */
  }

  handleCloseModal () {
    this.props.closeModal();
  }

  render() {

    var IMGStyle = {
      backgroundImage: "url(" + this.props.img + ")"
    };

    return (
      <ReactModal className="eventModal" isOpen={this.props.showModal} onRequestClose={this.handleCloseModal.bind(this)} contentLabel={this.props.name}>
        <div className="eventModalIMGWrapper" style={IMGStyle}>
          <div className="eventModalExit pointer" onClick={this.handleCloseModal.bind(this)}>x</div>
        </div>
        <div className="eventModalDetails">
          <p className="eventModalName eventModalItem">{this.props.name}</p>
          <p className="eventModalDate eventModalItem">{this.state.date}</p>
          <p className="eventModalTime eventModalItem">{this.state.time}</p>
          <p className="eventModalPrice eventModalItem">{this.state.price}</p>
          <p className="eventModalAddress eventModalItem">{this.state.address}</p>
          <div className="eventModalLinks">
            <div className="eventModalLink eventModalGetTickets pointer">Get Tickets</div>
            <div className="eventModalLink eventModalWebsite pointer">Event Website</div>
          </div>
          <p className="eventModalDescription eventModalItem">{this.state.description}</p>
        </div>
        <div className="eventModalTags">
          <div className="eventModalTag">#Echoplex</div>
          <div className="eventModalTag">#Kanye</div>
        </div>
      </ReactModal>
    );
  }
}

export default EventModal;
