import React, { Component } from 'react'
import styled from 'styled-components'
import { Colors, Fonts, Images } from 'App/Theme'
import RCSlider from '@react-native-community/slider'

const Thumbnail = styled.View`
  width: 15px;
  height: 15px;
  border-radius: 7.5px;
  background-color: ${Colors.purple};
`
const Container = styled.View`
  position: relative;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`
const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const VerticalBar = styled.View`
  width: 1px;
  height: 8px;
  background-color: ${Colors.gray03};
`
const Label = styled.Text`
  font-family: ${Fonts.family.regular};
  font-size: 13px;
  color: ${Colors.title};
  line-height: 19px;
  text-align: center;
`
const Unit = (data) => data && data.length > 0 ? data.length - 1 : 1

class HorizontalSlider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: undefined,
      stamp: undefined,
      unit: Unit(props.data),
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (!state.value) {
      return {
        value: props.value || 0,
        stamp: props.stamp,
      }
    } else if (props.stamp !== state.stamp) {
      return {
        value: props.value,
        stamp: props.stamp,
      }
    }
    return null
  }

  onChange = (value, callback = () => {
  }) => {
    this.setState({ value }, callback)
  }

  onComplete = (value) => {
    const { unit } = this.state
    const { onComplete, data } = this.props
    // const index = Math.floor(value * unit)
    // const selected = data[index]
    requestAnimationFrame(() => {
      this.onChange(value, onComplete(value))
    })
  }

  render() {
    const {
      style = {}, data = [0, 1], labels = [],
    } = this.props
    const { value, unit } = this.state
    const { width = 305 } = style
    const min = data[0]
    const max = data[data.length - 1]
    const step = data[1] - data[0]
    return (
      <Container style={{ width }}>
        <Row style={{ position: 'absolute', paddingHorizontal: 16, top: 12, width }}>
          {
            labels.map(() => (<VerticalBar />))
          }
        </Row>
        <RCSlider
          value={value}
          // onValueChange={this.onChange}
          style={{ width, height: 30 }}
          step={step}
          minimumValue={min}
          maximumValue={max}
          minimumTrackTintColor={Colors.gray02}
          maximumTrackTintColor={Colors.gray02}
          thumbImage={Images.sliderDot}
          onSlidingComplete={this.onComplete}
        />
        <Row style={{ position: 'absolute', paddingHorizontal: 0, top: 36, width }}>
          {
            labels.map((label) => (<Label>{label}</Label>))
          }
        </Row>
      </Container>
    )
  }
}

export default HorizontalSlider
