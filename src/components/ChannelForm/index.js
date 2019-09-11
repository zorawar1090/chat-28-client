import React from 'react'
import request from 'superagent'
import View from './view'

export default class ChannelForm extends React.Component {
  state = { name: '' }

  onSubmit = async (event) => {
    event.preventDefault()

    await request.post('https://safe-ocean-30227.herokuapp.com/channel')
      .send({ 
        name: this.state.name
      })

    this.setState({ message: '' })
  }

  onChange = event => {
    const { value } = event.target

    this.setState({ message: value })
  }

  render() {
    return (
      <View onSubmit={this.onSubmit} onChange={this.onChange} value={this.state.name} user={this.props.user} />
    )
  }
}

