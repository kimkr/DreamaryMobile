import React, { Component } from 'react'
import { Colors, Images, Metrics } from 'App/Theme'
import { Header, Icon, Space, Box, Row, HorizontalSlider, Touchable, Input, LongInput, Popup, Col }
  from 'App/Components'
import {
  ScrollView, Container, ScreenWrapper, HeaderTitle, Section, SectionTitle,
  SelectIconButton, SelectTextButton, SectionQuestion, SectionQuestionImage,
  ImageButton, AlbumButton, TextButton, Guide, Line, DateButton, UnitText,
}
  from './components'
import Strings from './strings'
import _ from 'lodash'
import DateTimePicker from '@react-native-community/datetimepicker'

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
      afterNote: undefined,
      productNote: undefined,
      customerNote: undefined,
      privateNote: undefined,
      showAlbumPopup: false,
      showDatePicker: false,
      date: new Date(),
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

  closeBeforeDamagePopup = () => {
    this.setState({ showBeforeDamage: false })
  }


  openShowAlbumPopup = () => {
    this.setState({ showAlbumPopup: true })
  }

  closeShowAlbumPopup = () => {
    this.setState({ showAlbumPopup: false })
  }

  onChange = () => {

  }

  onClickImage = (id) => {
    this.openShowAlbumPopup()
  }

  onClickAddPhoto = () => {
    this.openShowAlbumPopup()
  }

  onChangeDate = (date) => {
    this.setState({
      date,
      showDatePicker: false,
    })
  }

  openDatePicker = () => {
    this.setState({
      showDatePicker: true,
    })
  }

  render() {
    const {
      hairStyle, hairThick, scalpState, beforeDamage, showBeforeDamage, showAlbumPopup,
      nextVisitMonth, nextVisitWeek, afterNote, productNote, customerNote, privateNote, date, showDatePicker,
    } = this.state
    return (
      <ScreenWrapper>
        <Popup visible={showAlbumPopup} onClose={this.closeShowAlbumPopup}>
          <Col style={{ height: 75, padding: 10, alignItems: 'flex-start' }}>
            <TextButton onPress={this.closeShowAlbumPopup}>{Strings.takePhoto}</TextButton>
            <Space height={10} />
            <TextButton onPress={this.closeShowAlbumPopup}>{Strings.choosePhoto}</TextButton>
          </Col>
        </Popup>
        <ScrollView overScrollMode={'never'}>
          <Container>
            <Space height={20} />
            <Row style={{ paddingHorizontal: 35, justifyContent: 'space-between' }}>
              <Row>
                <DateButton onPress={this.openDatePicker}>{date.getFullYear() + ''}</DateButton>
                <Space width={10} />
                <UnitText>{Strings.dateUnits[0]}</UnitText>
              </Row>
              <Row>
                <DateButton onPress={this.openDatePicker}>{date.getMonth() + ''}</DateButton>
                <Space width={10} />
                <UnitText>{Strings.dateUnits[1]}</UnitText>
              </Row>
              <Row>
                <DateButton onPress={this.openDatePicker}>{date.getDate() + ''}</DateButton>
                <Space width={10} />
                <UnitText>{Strings.dateUnits[2]}</UnitText>
              </Row>
            </Row>
            <Space height={24} />
            <Line />
            <Space height={10} />
            <Guide>{Strings.guide}</Guide>
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
                  style={{ flex: 1, height: 40, paddingHorizontal: 8, justifyContent: 'flex-end' }}
                />
                <Space width={10} />
                <SectionTitle>{Strings.unitWeek}</SectionTitle>
              </Row>
            </Section>
            <Section>
              <SectionTitle>{Strings.beforeImage}</SectionTitle>
              <Space height={15} />
              <Row>
                <ImageButton onPress={this.onClickImage} source={Images.beforeImage} />
                <Space width={10} />
                <AlbumButton onPress={this.onClickAddPhoto} />
              </Row>
            </Section>
            <Section>
              <SectionTitle>{Strings.afterImage}</SectionTitle>
              <Space height={15} />
              <Row>
                <ImageButton onPress={this.onClickImage} source={Images.afterImage} />
                <Space width={10} />
                <AlbumButton onPress={this.onClickAddPhoto} />
              </Row>
            </Section>
            <Section>
              <SectionTitle>{Strings.afterNoteTitle}</SectionTitle>
              <Space height={15} />
              <LongInput
                placeholder={Strings.afterNoteHint}
                text={afterNote}
                ref={(ref) => (this.afterNoteInput = ref)}
                checkOnSubmit={true}
                checkOnBlur={true}
                onChange={(val) => this.setState({ afterNote: val })}
                validate={(text) => {
                  if (!text || text.length < 1) {
                    return '입력해주세요'
                  }
                }}
              />
            </Section>
            <Section>
              <Row>
                <SectionQuestionImage source={Images.lock} />
                <Space width={2} />
                <SectionTitle>{Strings.productNoteTitle}</SectionTitle>
                <Space width={2} />
                <SectionTitle style={{ color: Colors.error }}>{Strings.private}</SectionTitle>
              </Row>
              <Space height={15} />
              <LongInput
                placeholder={Strings.productNoteHint}
                text={productNote}
                ref={(ref) => (this.productNoteInput = ref)}
                checkOnSubmit={true}
                checkOnBlur={true}
                onChange={(val) => this.setState({ productNote: val })}
                validate={(text) => {
                  if (!text || text.length < 1) {
                    return '입력해주세요'
                  }
                }}
              />
            </Section>
            <Section>
              <SectionTitle>{Strings.customerNoteTitle('태훈')}</SectionTitle>
              <Space height={15} />
              <LongInput
                text={customerNote}
                placeholder={Strings.customerNoteHint}
                ref={(ref) => (this.customerNoteInput = ref)}
                checkOnSubmit={true}
                checkOnBlur={true}
                onChange={(val) => this.setState({ customerNote: val })}
                validate={(text) => {
                  if (!text || text.length < 1) {
                    return '입력해주세요'
                  }
                }}

              />
            </Section>
            <Section>
              <Row>
                <SectionQuestionImage source={Images.lock} />
                <Space width={2} />
                <SectionTitle>{Strings.privateNoteTitle}</SectionTitle>
                <Space width={2} />
                <SectionTitle style={{ color: Colors.error }}>{Strings.private}</SectionTitle>
              </Row>
              <Space height={15} />
              <LongInput
                text={privateNote}
                placeholder={Strings.privateNoteHint}
                ref={(ref) => (this.privateNoteInput = ref)}
                checkOnSubmit={true}
                checkOnBlur={true}
                onChange={(val) => this.setState({ privateNote: val })}
                validate={(text) => {
                  if (!text || text.length < 1) {
                    return '입력해주세요'
                  }
                }}
              />
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
        {showDatePicker && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={'date'}
            is24Hour={true}
            maximumDate={new Date(2020, 12, 31)}
            minimumDate={new Date()}
            display="default"
            onChange={(e, d) => this.onChangeDate(d)}
          />
        )}
      </ScreenWrapper>
    )
  }
}

export default HaircutNote
