import React from 'react'
import request from 'superagent'
import View from './view'
import { url } from '../../constants'

export default class ChannelForm extends React.Component {
  state = { name: '' }

  onSubmit = async (event) => {
    event.preventDefault()

    await request.post(`${url}/channel`)
      .send({ 
        name: this.state.name
      })

    this.setState({ name: '' })
  }

  onChange = event => {
    const { value } = event.target

    this.setState({ name: value })
  }

  render() {
    return (
      <View onSubmit={this.onSubmit} onChange={this.onChange} value={this.state.name} user={this.props.user} />
    )
  }
}

