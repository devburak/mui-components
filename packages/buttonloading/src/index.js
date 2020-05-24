import React from 'react'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'

export const LoadingButton = (props) => {
  const { isbusy, progressprops } = props
  return (
    <Button {...props} disabled={isbusy}>
      {isbusy && <CircularProgress {...progressprops} />}
      {!isbusy && props.children}
    </Button>
  )
}
