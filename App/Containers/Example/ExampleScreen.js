import React from 'react'
import { Platform, View, Button, ActivityIndicator, Image } from 'react-native'
import { connect } from 'react-redux'
import ExampleActions, { liveInEurope } from 'App/Stores/Example'
import { ErrorText, Instructions, LogoContainer, Result, Text } from './components'
import { ApplicationStyles, Helpers, Images, Metrics } from 'App/Theme'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\nCmd+D or shake for dev menu.',
  android: 'Double tap R on your keyboard to reload,\nShake or press menu button for dev menu.',
})

class ExampleScreen extends React.Component {
  componentDidMount() {
    this._fetchUser()
  }

  render() {
    return (
      <View
        style={[
          Helpers.fill,
          Helpers.rowMain,
          Metrics.mediumHorizontalMargin,
          Metrics.mediumVerticalMargin,
        ]}
      >
        {this.props.userIsLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <View>
            <LogoContainer>
              <Image style={Helpers.fullSize} source={Images.logo} resizeMode={'contain'} />
            </LogoContainer>
            <Text>To get started, edit App.js</Text>
            <Instructions>{instructions}</Instructions>
            {this.props.userErrorMessage ? (
              <ErrorText>{this.props.userErrorMessage}</ErrorText>
            ) : (
              <View>
                <Result>
                  {"I'm a fake user, my name is "}
                  {this.props.user.name}
                </Result>
                <Result>
                  {this.props.liveInEurope ? 'I live in Europe !' : "I don't live in Europe."}
                </Result>
              </View>
            )}
            <Button
              style={ApplicationStyles.button}
              onPress={() => this._fetchUser()}
              title="Refresh"
            />
          </View>
        )}
      </View>
    )
  }

  _fetchUser() {
    this.props.fetchUser()
  }
}

const mapStateToProps = ({
                           example: {
                             user,
                             userIsLoading,
                             userErrorMessage
                           }
                         }) => ({
  user,
  userIsLoading,
  userErrorMessage,
  liveInEurope: liveInEurope({ user }),
})

const mapDispatchToProps = (dispatch) => ({
  fetchUser: () => dispatch(ExampleActions.fetchUser()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExampleScreen)
