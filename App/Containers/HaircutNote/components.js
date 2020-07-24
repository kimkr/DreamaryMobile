import React, { Component } from 'react'
import styled from 'styled-components'
import { Icon, Touchable } from 'App/Components'
import { Colors, Fonts, Images, Metrics } from 'App/Theme'

export const ScrollView = styled.ScrollView`
  flex: 1;
  flex-grow: 1;
`
export const ScreenWrapper = styled.View`
  flex: 1;
  background-color: ${Colors.white};
  position: relative;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`
export const Container = styled.View`
  padding-top: 75px;
  position: relative;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`
export const HeaderTitle = styled.Text`
  font-family: ${Fonts.family.regular};
  font-size: 15px;
  line-height: 31px;
  color: ${Colors.title};
  text-align: center;
`
export const Section = styled.View`
  margin-top: 15px;
  margin-bottom: 15px;
  padding-left: 35.5px;
  padding-right: 34.5px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`
export const SectionTitle = styled.Text`
  font-family: ${Fonts.family.regular};
  font-size: 13px;
  line-height: 22px;
  color: ${Colors.title};  
  text-align: left;
`
export const SelectTitle = styled.Text`
  font-family: ${Fonts.family.regular};
  font-size: 13px;
  line-height: 31px;
  color: ${props => props.selected ? Colors.purple : Colors.gray04};
  text-align: center;
`
export const SelectContainer = styled.View`
  flex: 1;
  background-color: ${props => props.selected ? Colors.lightPurple : Colors.white};
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-width: 1px;
  border-color: ${props => props.selected ? Colors.purple : Colors.gray01};
  padding-top: 30px;
  padding-left: 20px;
  padding-right: 20px;
`

const SelectTitleContainer = styled(SelectContainer)`
  padding-top: 0px;
  padding-left: 0px;
  padding-right: 0px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const SelectImage = styled.Image`
  width: 100%;
`
export const SelectIconButton = ({ id, selected, source, onPress, title }) => (
  <Touchable
    style={{
      flex: 1,
      height: 90,
    }}
    onPress={() => onPress(id)}
  >
    <SelectContainer selected={selected === id}>
      <SelectImage source={source} />
      <SelectTitle selected={selected === id}>{title}</SelectTitle>
    </SelectContainer>
  </Touchable>
)
export const SelectTextButton = ({ id, selected, onPress, title }) => (
  <Touchable
    style={{
      flex: 1,
      height: 40,
      minWidth: '30%',
    }}
    onPress={() => onPress(id)}
  >
    <SelectTitleContainer selected={selected === id} style={{ padding: 0 }}>
      <SelectTitle selected={selected === id}>{title}</SelectTitle>
    </SelectTitleContainer>
  </Touchable>
)
export const SectionQuestion = styled.Text`
  font-family: ${Fonts.family.regular};
  font-size: 11px;
  line-height: 17;
  color: ${Colors.title};  
  text-align: left;
`
export const SectionQuestionImage = styled.Image`
  width: 17px;
  height: 17px;
`

export const ImageButton = ({ id, source, onPress }) => (
  <Touchable
    style={{
      width: 95,
      height: 95,
    }}
    onPress={() => onPress(id)}
  >
    <SelectImage source={source} style={{ borderRadius: 5, backgroundColor: Colors.paleGray, width: 95, height: 95 }}
                 resizeMode={'contain'} />
  </Touchable>
)

export const AlbumButton = ({ onPress }) => (
  <Touchable
    style={{
      width: 95,
      height: 95,
    }}
    onPress={() => onPress()}
  >
    <SelectImage source={Images.addPhoto}
                 resizeMode={'center'}
                 style={{ borderRadius: 5, backgroundColor: Colors.paleGray, width: 95, height: 95 }} />
  </Touchable>
)

export const TextButton = ({ onPress, children }) => (
  <Touchable
    style={{
      flex: 1,
      height: 40,
    }}
    onPress={() => onPress()}
  >
    <SelectTitle selected={false}
                 style={{ fontSize: 17, lineHeight: 31, color: Colors.title }}>{children}</SelectTitle>
  </Touchable>
)

export const Guide = styled.Text`
  width: ${Metrics.screenWidth - 30};
  margin-left: 15px;
  margin-right: 15px;
  padding: 10px;
  font-family: ${Fonts.family.regular};
  font-size: 13px;
  line-height: 19px;
  color: ${Colors.gray06};
  text-align: center; 
  background-color: ${Colors.paleGray};
  border-radius: 10px;
`

export const Line = styled.View`
  width: ${Metrics.screenWidth - 30};
  height: 0.5px;
  margin-left: 15px;
  margin-right: 15px; 
  background-color: rgba(0, 0, 0, 0.2);
`

export const DateButton = ({ onPress, children }) => (
  <Touchable
    style={{
      width: 64,
      height: 40,
      borderRadius: 5,
      backgroundColor: Colors.paleGray,
    }}
    onPress={() => onPress()}
  >
    <SelectTitle selected={false}
                 style={{
                   fontSize: 15, lineHeight: 40, color: Colors.title,
                 }}>{children}</SelectTitle>
  </Touchable>
)
export const UnitText = styled.Text`
  font-family: ${Fonts.family.regular};
  font-size: 12px;
  line-height: 31px;
  color: ${Colors.title};
  text-align: center;
`

export const SaveButton = ({ onPress, children }) => (
  <Touchable
    style={{
      width: Metrics.screenWidth - 30,
      height: 40,
      borderRadius: 5,
      backgroundColor: Colors.purple,
      position: 'absolute',
      bottom: 20 + Metrics.screenPaddingBottom,
      left: 15,
    }}
    onPress={() => onPress()}
  >
    <SelectTitle selected={false}
                 style={{
                   fontSize: 15, lineHeight: 40, color: Colors.white,
                 }}>{children}</SelectTitle>
  </Touchable>
)
export const RequiredText = styled.Text`
  font-family: ${Fonts.family.regular};
  font-size: 15px;
  line-height: 31px;
  color: ${Colors.title};
  text-align: center;
`
