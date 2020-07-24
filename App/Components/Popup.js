import React, { PureComponent } from 'react'
import styled from 'styled-components'
import Dialog, { SlideAnimation, DialogContent } from 'react-native-popup-dialog'
import { Colors, Metrics } from 'App/Theme'

const Container = styled.View`
  width: 100%;
  flex-direction: column;
`
export default class Popup extends PureComponent {
  render() {
    const { visible = false, onClose, width = Metrics.screenWidth - 70, children } = this.props
    return (
      <Dialog
        onTouchOutside={() => onClose()}
        width={width}
        visible={visible}
        modalAnimation={
          new SlideAnimation({
            slideFrom: 'bottom',
          })
        }
      >
        <DialogContent
          style={{
            borderRadius: 5,
            padding: 20,
            margin: 0,
            backgroundColor: Colors.white,
          }}
        >
          <Container>
            {children}
          </Container>
        </DialogContent>
      </Dialog>
    )
  }
}
