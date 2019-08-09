import React from 'react'
import View from './view'
import {setName} from '../../actions'
import { connect} from 'react-redux'

class UserForm extends React.Component {
  state = {name: ''}

  onSubmit = async (event) => {
    event.preventDefault()

    this.props.setName(this.state.name)

    this.setState({ name: '' })
  }

  onChange = event => {
    const { value } = event.target

    this.setState({ name: value })
  }

  render() {
    return (
      <View 
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      value={this.state.name}
      user={this.props.user}
      />
    )
  }
}

const mapDispatchToProps = {setName}

export default connect(null, mapDispatchToProps)(UserForm)