import React, { Component } from 'react'
import styled from 'styled-components'
import { Icon, Touchable } from 'App/Components'
import { Colors, Fonts } from 'App/Theme'

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
export const SelectImage = styled.Image`
  width: 100%;
`
export const SelectButton = ({ id, selected, source, onPress, title }) => (
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
