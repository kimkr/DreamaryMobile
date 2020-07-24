import React, { Component } from 'react'
import { Colors, Images } from 'App/Theme'
import { Header, Icon, Space, Box, Row } from 'App/Components'
import {
  ScrollView, Container, ScreenWrapper, HeaderTitle, Section, SectionTitle,
  SelectIconButton, SelectTextButton,
}
  from './components'
import Strings from './strings'

class HaircutNote extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hairStyle: undefined,
      hairThick: undefined,
      scalpState: undefined,
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

  onClickScalpState = (scalpState) => {
    this.setState({ scalpState })
  }

  render() {
    const { hairStyle, hairThick, scalpState } = this.state
    return (
      <ScreenWrapper>
        <ScrollView overScrollMode={'never'}>
          <Container>
            <Section>
              <SectionTitle>{Strings.hairStyleTitle}</SectionTitle>
              <Space height={15} />
              <Box>
                <SelectIconButton
                  id={'hairStyle3'}
                  title={Strings.hairStyle3}
                  source={Images.hairStyle3}
                  onPress={this.onClickHairStyle}
                  selected={hairStyle} />
                <SelectIconButton
                  id={'hairStyle2'}
                  title={Strings.hairStyle2}
                  source={Images.hairStyle2}
                  onPress={this.onClickHairStyle}
                  selected={hairStyle} />
                <SelectIconButton
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
                <SelectIconButton
                  id={'hairThick3'}
                  title={Strings.hairThick3}
                  source={Images.hairThick3}
                  onPress={this.onClickHairThick}
                  selected={hairThick} />
                <SelectIconButton
                  id={'hairThick2'}
                  title={Strings.hairThick2}
                  source={Images.hairThick2}
                  onPress={this.onClickHairThick}
                  selected={hairThick} />
                <SelectIconButton
                  id={'hairThick1'}
                  title={Strings.hairThick1}
                  source={Images.hairThick1}
                  onPress={this.onClickHairThick}
                  selected={hairThick} />
              </Box>
            </Section>
            <Section>
              <Row>
                <SectionTitle>{Strings.scalpStateTitle}</SectionTitle>
                <SectionTitle style={{ color: Colors.gray03 }}>{Strings.scalpStateGuide}</SectionTitle>
              </Row>
              <Space height={15} />
              <Box>
                {
                  Strings.scalpStates.map((title, idx) => (
                    <SelectTextButton
                      id={`scaleState-${idx}`}
                      title={title}
                      onPress={this.onClickScalpState}
                      selected={scalpState} />
                  ))
                }
                <Space style={{
                  flex: 1, minWidth: '30%', height: 40, backgroundColor: Colors.paleGray,
                  borderWidth: 1, borderColor: Colors.gray01,
                }} />
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
