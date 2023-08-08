import React from "react";

export class Mailbox extends React.Component {
  unreadMessages = this.props.unreadMessages;
  render() {
    return (
      <div style={{border: '5px solid purple'}}>
        <h4>Componente MailBox</h4>
        {/* somente vai mostrar o elemento <h2> quando conter mensagens não lidas. */}
        {(this.unreadMessages.length > 0) &&
          <h2>
            You have {this.unreadMessages.length} unread messages.
          </h2>
        }
      </div>
    );
  }
}