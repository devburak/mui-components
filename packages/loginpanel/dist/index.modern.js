import React, { useState } from 'react';
import { LoadingButton } from 'buttonloading';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockRounded from '@material-ui/icons/LockRounded';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputAdornment from '@material-ui/core/InputAdornment';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';

function Copyright(props) {
  const {
    website
  } = props;
  return /*#__PURE__*/React.createElement(Typography, {
    variant: "body2",
    color: "textSecondary",
    align: "center"
  }, website.copyrightvisible && 'Copyright © ', /*#__PURE__*/React.createElement(Link, {
    color: "inherit",
    href: website.url
  }, website.name), ' ', new Date().getFullYear(), '.');
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7)
  }
}));

function LoginPanel(props) {
  const [showPassword, setShowPass] = useState(false);
  const classes = useStyles();
  const {
    website = {
      name: 'website',
      url: 'https://material-ui.com',
      copyrightvisible: true,
      logo: '/broken-image.jpg'
    },
    formControl = {
      label: 'Remember me',
      control: {
        value: 'remember',
        color: 'primary'
      }
    },
    forgetpassword = {
      text: 'Forgot password?',
      link: '#',
      visible: true
    },
    signin = {
      text: 'SIGN IN',
      icon: undefined
    },
    signup = {
      text: "Don't have an account? Sign Up",
      link: '#',
      visible: true
    },
    onSubmit,
    isbusy = false,
    progressprops = {
      color: 'primary',
      size: 21
    },
    buttonprops = {
      color: 'primary',
      type: 'submit',
      variant: 'contained'
    },
    usernameprops = {
      InputProps: {
        startAdornment: /*#__PURE__*/React.createElement(InputAdornment, {
          position: "start"
        }, /*#__PURE__*/React.createElement(AccountCircle, null))
      },
      label: 'User Name or Email',
      fullWidth: true,
      name: 'username',
      autoComplete: 'email',
      autoFocus: true,
      variant: 'outlined',
      margin: 'normal',
      required: true
    },
    passwordprops = {
      InputProps: {
        startAdornment: /*#__PURE__*/React.createElement(InputAdornment, {
          position: "start"
        }, /*#__PURE__*/React.createElement(LockRounded, null))
      },
      autoComplete: 'current-password',
      variant: 'outlined',
      margin: 'normal',
      required: true,
      fullWidth: true,
      name: 'password',
      label: 'Password'
    }
  } = props;
  return /*#__PURE__*/React.createElement(Container, {
    component: "main",
    maxWidth: "xs"
  }, /*#__PURE__*/React.createElement(CssBaseline, null), /*#__PURE__*/React.createElement("div", {
    className: classes.paper
  }, /*#__PURE__*/React.createElement(Avatar, Object.assign({
    alt: website.name,
    src: website.logo,
    className: classes.large
  }, props.avatar)), /*#__PURE__*/React.createElement(Typography, {
    component: "h1",
    variant: "h5"
  }, website.name), /*#__PURE__*/React.createElement("form", {
    className: classes.form,
    onSubmit: onSubmit
  }, /*#__PURE__*/React.createElement(TextField, Object.assign({
    id: "username"
  }, usernameprops)), /*#__PURE__*/React.createElement(TextField, Object.assign({
    type: showPassword ? 'text' : 'password',
    id: "password"
  }, passwordprops, {
    InputProps: { ...passwordprops.InputProps,
      endAdornment: /*#__PURE__*/React.createElement(IconButton, {
        "aria-label": "toggle password visibility",
        onClick: () => setShowPass(!showPassword),
        edge: "end"
      }, showPassword ? /*#__PURE__*/React.createElement(Visibility, null) : /*#__PURE__*/React.createElement(VisibilityOff, null))
    }
  })), /*#__PURE__*/React.createElement(FormControlLabel, {
    control: /*#__PURE__*/React.createElement(Checkbox, {
      id: "rememberme",
      value: formControl.control.value,
      color: formControl.control.color
    }),
    label: formControl.label
  }), /*#__PURE__*/React.createElement(LoadingButton, Object.assign({
    type: "submit",
    fullWidth: true,
    className: classes.submit,
    progressprops: progressprops,
    isbusy: isbusy,
    startIcon: signin.icon
  }, buttonprops), signin.text), /*#__PURE__*/React.createElement(Grid, {
    container: true
  }, /*#__PURE__*/React.createElement(Grid, {
    item: true,
    xs: true
  }, forgetpassword.visible ? /*#__PURE__*/React.createElement(Link, {
    href: forgetpassword.link,
    variant: "body2"
  }, forgetpassword.text) : undefined), /*#__PURE__*/React.createElement(Grid, {
    item: true
  }, signup.visible ? /*#__PURE__*/React.createElement(Link, {
    href: signup.link,
    variant: "body2"
  }, signup.text) : undefined)))), /*#__PURE__*/React.createElement(Box, {
    mt: 8
  }, /*#__PURE__*/React.createElement(Copyright, {
    website: website
  })));
}

export default LoginPanel;
//# sourceMappingURL=index.modern.js.map
