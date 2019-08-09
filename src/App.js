import React from 'react';
import { allMessages } from './actions'
import { connect } from 'react-redux'
import MessageForm from './components/MessageForm'
import UserForm from './components/UserForm'


class App extends React.Component {
  state = { message: '' }

  source = new EventSource('http://localhost:5000/stream')

  componentDidMount() {
    this.source.onmessage = (event) => {
      const messages = JSON.parse(event.data)
      this.props.allMessages(messages)
    }
  }

  

  render() {
    const messages = this
      .props
      .messages
      .map((message, index) => <p key={index}>{message.user}: {message.text}</p>)

    

    return <main>
      <UserForm user={this.props.user}/>
      <MessageForm user={this.props.user} />
      {messages}
    </main>
  }
}

const mapDispatchToProps = {
  allMessages
}

const mapStateToProps = state => {
  return {
    messages: state.messages,
    user: state.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)