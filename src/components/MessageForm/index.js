import React from 'react'
import request from 'superagent'
import View from './view'

class MessageForm extends React.Component {
  state = { message: '' }

  onSubmit = async (event) => {
    event.preventDefault()

    await request.post('https://safe-ocean-30227.herokuapp.com/message')
      .send({ 
        message: this.state.message,
        user: this.props.user 
      })

    this.setState({ message: '' })
  }

  onChange = event => {
    const { value } = event.target

    this.setState({ message: value })
  }

  render() {
    return (
      <View onSubmit={this.onSubmit} onChange={this.onChange} value={this.state.message} />
    )
  }
}

export default MessageForm
