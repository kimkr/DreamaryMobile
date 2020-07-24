import React, { Component } from 'react'
import styled from 'styled-components'
import { Colors, Images } from 'App/Theme'
import { Header, Icon, Space, Box } from 'App/Components'
import { ScrollView, Container, ScreenWrapper, HeaderTitle, Section, SectionTitle, SelectButton } from './components'
import Strings from './strings'

class HaircutNote extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hairStyle: undefined,
      hairThick: undefined
    }
  }

  onClickBack = () => {

  }

  onClickHairStyle = (hairStyle) => {
    this.setState({ hairStyle })
  }

  onClickHairThick = (hairThick) => {
    this.setState({ hairThick })
  }

  render() {
    const { hairStyle, hairThick } = this.state
    return (
      <ScreenWrapper>
        <ScrollView overScrollMode={'never'}>
          <Container>
            <Section>
              <SectionTitle>{Strings.hairStyleTitle}</SectionTitle>
              <Space height={15} />
              <Box>
                <SelectButton
                  id={'hairStyle3'}
                  title={Strings.hairStyle3}
                  source={Images.hairStyle3}
                  onPress={this.onClickHairStyle}
                  selected={hairStyle} />
                <SelectButton
                  id={'hairStyle2'}
                  title={Strings.hairStyle2}
                  source={Images.hairStyle2}
                  onPress={this.onClickHairStyle}
                  selected={hairStyle} />
                <SelectButton
                  id={'hairStyle1'}
                  title={Strings.hairStyle1}
                  source={Images.hairStyle1}
                  onPress={this.onClickHairStyle}
                  selected={hairStyle} />
              </Box>
            </Section>
            <Section>
              <SectionTitle>{Strings.hairStyleTitle}</SectionTitle>
              <Space height={15} />
              <Box>
                <SelectButton
                  id={'hairStyle3'}
                  title={Strings.hairThick3}
                  source={Images.hairThick3}
                  onPress={this.onClickHairThick}
                  selected={hairThick} />
                <SelectButton
                  id={'hairStyle2'}
                  title={Strings.hairThick2}
                  source={Images.hairThick2}
                  onPress={this.onClickHairThick}
                  selected={hairThick} />
                <SelectButton
                  id={'hairStyle1'}
                  title={Strings.hairThick1}
                  source={Images.hairThick1}
                  onPress={this.onClickHairThick}
                  selected={hairThick} />
              </Box>
            </Section>

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
