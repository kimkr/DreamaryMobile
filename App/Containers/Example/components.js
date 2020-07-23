import React from 'react'
import styled from 'styled-components/native'
import { Metrics, Fonts, Colors } from 'App/Theme'

export const ErrorText = styled.Text`
  font-family: ${Fonts.family.regular};
  font-size: ${Fonts.size.regular};
  color: ${Colors.bloodRed};
  margin-bottom: ${Metrics.tiny}px;
  text-align: center;
`

export const Instructions = styled.Text`
  font-family: ${Fonts.family.regular};
  font-size: ${Fonts.size.regular};
  font-style: italic;
  margin-bottom: ${Metrics.tiny}px;
  text-align: center;
`

export const LogoContainer = styled.View`
  font-family: ${Fonts.family.regular};
  width: 100%;
  height: 300px;
  margin-bottom: 25px;
`

export const Result = styled.Text`
  font-family: ${Fonts.family.regular};
  font-size: ${Fonts.size.regular};
  margin-bottom: ${Metrics.tiny}px;
  text-align: center;
`

export const Text = styled.Text`
  font-family: ${Fonts.family.regular};
  font-size: ${Fonts.size.regular};
  margin-bottom: ${Metrics.tiny}px;
  text-align: center;
`
