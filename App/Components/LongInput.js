import React, { Component } from 'react'
import { TextInput, View } from 'react-native'
import { Colors, Fonts, Images } from 'App/Theme'
import _ from 'lodash'

export default class Input extends Component {
  constructor(props) {
    super(props)
    this.onFocus = this.onFocus.bind(this)
    this.onBlur = this.onBlur.bind(this)
    this.onChangeText = this.onChangeText.bind(this)
    this.blur = this.blur.bind(this)
    this.clear = this.clear.bind(this)
    this.state = {
      focused: false,
      text: props.text,
      error: undefined,
    }
  }

  onChangeText(text) {
    const { editable = true, onChange } = this.props
    if (onChange) {
      onChange(text)
    }
    if (editable) {
      this.setState({
        text,
      })
    }
  }

  blur() {
    this.textInput.blur()
  }

  onFocus() {
    this.setState({
      focused: true,
      error: undefined,
    })
  }

  onBlur() {
    const { checkOnBlur = false } = this.props
    this.setState({
      focused: false,
    }, () => checkOnBlur && this.validate())
  }

  clear() {
    this.textInput.clear()
    this.setState({
      text: '',
      error: undefined,
    })
  }

  validate(text) {
    const {
      validate = () => {
      },
    } = this.props
    const error = validate(text || this.state.text)
    if (error) {
      this.setState({
        error,
        focused: false,
      })
      return false
    } else {
      return true
    }
  }

  getValue = () => {
    const { text } = this.state
    return text
  }

  render() {
    const {
      style = {},
      placeholder = '',
      checkOnSubmit = false,
      focusable = true,
      maxLength = undefined,
    } = this.props
    const {
      height = 200,
      errorColor = Colors.error,
      backgroundColor = Colors.paleGray,
      borderRadius = 5,
      borderWidth = 0,
      fontSize = 15,
      lineHeight = 23,
      padding = 10,
      fontFamily = Fonts.family.regular,
      color = Colors.title,
      selectedColor = Colors.title,
      ...containerStyles
    } = style

    const { focused, error, text } = this.state
    return (
      <View style={{
        borderColor: error ? errorColor : focused ? selectedColor : color,
        borderWidth,
        borderRadius,
        padding,
        backgroundColor,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        ...containerStyles,
      }}>
        <TextInput
          ref={(ref) => this.textInput = ref}
          onFocus={() => this.onFocus()}
          onBlur={() => this.onBlur()}
          onChangeText={this.onChangeText}
          onSubmitEditing={({ nativeEvent: { text } }) => checkOnSubmit && this.validate(text)}
          placeholder={placeholder}
          allowFontScaling={false}
          autoCapitalize="none"
          autoComplete="off"
          autoCorrect={false}
          multiline={true}
          underlineColorAndroid="transparent"
          focused={focused}
          style={{
            minHeight: height,
            flexGrow: 1,
            fontSize,
            fontFamily,
            lineHeight,
            color: error ? errorColor : selectedColor,
            padding: 0,
          }}
          placeholderTextColor={Colors.gray03}
          defaultHeight={lineHeight}
          value={_.isString(error) ? error : text}
          editable={focusable}
          maxLength={maxLength}
        />
      </View>
    )
  }
}
