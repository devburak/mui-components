import React from 'react'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'

export const LoadingButton = (props) => {
  const { isBusy, progressprops } = props
  return (
    <Button {...props} disabled={isBusy}>
      {isBusy && <CircularProgress {...progressprops} />}
      {!isBusy && props.children}
    </Button>
  )
}
