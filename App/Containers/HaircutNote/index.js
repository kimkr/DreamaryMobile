import React, { Component } from 'react'
import { Colors, Images, Metrics } from 'App/Theme'
import { Header, Icon, Space, Box, Row, HorizontalSlider, Touchable, Input } from 'App/Components'
import {
  ScrollView, Container, ScreenWrapper, HeaderTitle, Section, SectionTitle,
  SelectIconButton, SelectTextButton, SectionQuestion, SectionQuestionImage,
}
  from './components'
import Strings from './strings'
import _ from 'lodash'

class HaircutNote extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hairStyle: undefined,
      hairThick: undefined,
      scalpState: undefined,
      beforeDamage: 0,
      showBeforeDamage: false,
      nextVisitMonth: 0,
      nextVisitWeek: 0,
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

  onChangeBeforeDamage = (beforeDamage) => {
    this.setState({ beforeDamage })
  }

  openBeforeDamagePopup = () => {
    this.setState({ showBeforeDamage: true })
  }

  onChange = () => {

  }

  render() {
    const {
      hairStyle, hairThick, scalpState, beforeDamage,
      nextVisitMonth, nextVisitWeek,
    } = this.state
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
            <Section>
              <SectionTitle>{Strings.beforeDamageTitle}</SectionTitle>
              <Space height={15} />
              <HorizontalSlider
                width={Metrics.screenWidth - 86}
                value={beforeDamage}
                stamp={beforeDamage}
                ref={ref => this.slider = ref}
                onComplete={(value) => this.onChangeBeforeDamage(value)}
                data={[0, 1, 2, 3]}
                labels={Strings.beforeDamages}
              />
              <Space height={40} />
              <Touchable onPress={this.openBeforeDamagePopup}>
                <Row>
                  <SectionQuestionImage source={Images.info} />
                  <Space width={2} />
                  <SectionQuestion>{Strings.beforeDamagesQuestion}</SectionQuestion>
                </Row>
              </Touchable>
            </Section>
            <Section>
              <SectionTitle>{Strings.nextVisitTitle}</SectionTitle>
              <Space height={15} />
              <Row>
                <Input
                  text={nextVisitMonth + ''}
                  ref={(ref) => (this.nextVisitMonthInput = ref)}
                  checkOnSubmit={true}
                  checkOnBlur={true}
                  onChange={(val) => this.setState({ nextVisitMonth: val })}
                  validate={(text) => {
                    try {
                      let intVal = _.parseInt(text)
                      console.log('intVal', intVal)
                      if (intVal < 0 || intVal > 99) {
                        return '0~99 입력해주세요'
                      }
                    } catch (e) {
                      return '0~99 입력해주세요'
                    }
                  }}
                  style={{ flex: 1, height: 40, paddingHorizontal: 8, justifyContent: 'flex-end' }}
                />
                <Space width={10} />
                <SectionTitle>{Strings.unitMonth}</SectionTitle>
              </Row>
              <Space height={10} />
              <Row>
                <Input
                  text={nextVisitWeek + ''}
                  ref={(ref) => (this.nextVisitWeekInput = ref)}
                  checkOnSubmit={true}
                  checkOnBlur={true}
                  onChange={(val) => this.setState({ nextVisitWeek: val })}
                  validate={(text) => {
                    try {
                      let intVal = _.parseInt(text)
                      if (intVal < 0 || intVal > 4) {
                        return '0~4 입력해주세요'
                      }
                    } catch (e) {
                      return '0~4 입력해주세요'
                    }
                  }}
                  style={{ flex: 1, height: 40,  paddingHorizontal: 8, justifyContent: 'flex-end' }}
                />
                <Space width={10} />
                <SectionTitle>{Strings.unitWeek}</SectionTitle>
              </Row>
            </Section>
            <Space height={240} />
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
