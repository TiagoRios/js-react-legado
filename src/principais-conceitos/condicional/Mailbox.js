import React from "react";

export default class Mailbox extends React.Component {
  unreadMessages = this.props.unreadMessages;

  render() {
    return (
      <div style={{ border: '5px solid purple' }}>
        {
          (this.unreadMessages.length > 0) &&
          <h2>
            You have {this.unreadMessages.length} unread messages.
          </h2>
        }
      </div>
    );
  }
}