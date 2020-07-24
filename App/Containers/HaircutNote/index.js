import React, { Component } from 'react'
import styled from 'styled-components'
import { Colors, Images } from 'App/Theme'
import { Header, Icon, Space } from 'App/Components'
import { ScrollView, Container, ScreenWrapper, HeaderTitle } from './components'
import Strings from './strings'

class HaircutNote extends Component {
  onClickBack = () => {

  }

  render() {
    return (
      <ScreenWrapper>
        <ScrollView overScrollMode={'never'}>
          <Container>
          </Container>
        </ScrollView>
        <Header>
          <Icon style={{ width: 15, height: 15, padding: 1 }}
                onPress={this.onClickBack}
                source={Images.arrowLeft} />
          <HeaderTitle>{Strings.headerTitle}</HeaderTitle>
          <Space width={15} height={15} />
        </Header>
      </ScreenWrapper>
    )
  }
}

export default HaircutNote
