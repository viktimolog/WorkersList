import React from 'react'
import Header from '../components/Header'
import {connect} from 'react-redux'

const AppHeaderContainer = () => (<Header/>)
export default connect()(AppHeaderContainer)
