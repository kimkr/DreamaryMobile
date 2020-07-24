import React, { Component } from 'react'
import styled from 'styled-components'
import { Metrics } from 'App/Theme'

const Container = styled.View`
  padding-top: ${Metrics.screenPaddingTop};
  width: 100%;
  height: ${Metrics.headerHeight};
  background-color: #FFFFFF;
  position: absolute;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
  border-bottom-color: rgba(41, 41, 41, 0.2);
  border-bottom-width: 1px;
  top: 0;
`

class Header extends Component {
  render() {
    const { children, style = {} } = this.props
    return (
      <Container style={style}>
        {children}
      </Container>
    )
  }
}

export default Header
