import React from 'react'
import Header from '../components/Header'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const AppHeaderContainer = () => (
  <Header />
)

export default connect()(AppHeaderContainer)
