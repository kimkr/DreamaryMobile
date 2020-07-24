import React from 'react'
import styled from 'styled-components'
import { View } from 'react-native'
import { Touchable } from 'App/Components'
import { Colors } from 'App/Theme'

const IconImage = styled.Image`
  margin: 0;
  flex: 1;
`
export default ({
  onPress = undefined,
  style = {},
  source,
  disabled = false,
  resizeMode = 'contain',
}) => {
  const { padding = 0, paddingVertical = 0, paddingHorizontal = 0, tintColor = undefined } = style
  return disabled ? (
    <View
      style={{
        ...style,
        backgroundColor: Colors.transparent,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <IconImage
        source={source} resizeMode={resizeMode} disabled={true} style={{ tintColor }} />
    </View>
  ) : (
    <Touchable
      backgroundColor={Colors.transparent}
      disabled={onPress === undefined}
      onPress={() => onPress && onPress()}
      style={{
        ...style,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <IconImage source={source} resizeMode={resizeMode} style={{ tintColor }} />
    </Touchable>
  )
}
