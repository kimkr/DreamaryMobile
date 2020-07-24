import React, { Component } from 'react'
import styled from 'styled-components'
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
  color: #292929;
  text-align: center;
`
