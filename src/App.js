import React from 'react';
import { allChannels } from './actions'
import { connect } from 'react-redux'
import MessageForm from './components/MessageForm'
import UserForm from './components/UserForm'
import ChannelForm from './components/ChannelForm'


class App extends React.Component {
  state = { message: '' }

  source = new EventSource('https://safe-ocean-30227.herokuapp.com/stream')

  componentDidMount() {
    this.source.onmessage = (event) => {
      const channels = JSON.parse(event.data)
      this.props.allMessages(channels)
    }
  }

  

  render() {
    const channels = this
      .props
      .channels
      .map((channel, index) => <p key={index}>{channel.name}</p>)

    

    return <main>
      <ChannelForm user={this.props.user} />
      <UserForm user={this.props.user}/>
      <MessageForm user={this.props.user} />
      {channels}
    </main>
  }
}

const mapDispatchToProps = {
  allChannels
}

const mapStateToProps = state => {
  return {
    channels: state.channels,
    user: state.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)