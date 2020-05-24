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

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function Copyright(props) {
  var website = props.website;
  return /*#__PURE__*/React.createElement(Typography, {
    variant: "body2",
    color: "textSecondary",
    align: "center"
  }, website.copyrightvisible && 'Copyright © ', /*#__PURE__*/React.createElement(Link, {
    color: "inherit",
    href: website.url
  }, website.name), ' ', new Date().getFullYear(), '.');
}

var useStyles = makeStyles(function (theme) {
  return {
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
  };
});

function LoginPanel(props) {
  var _useState = useState(false),
      showPassword = _useState[0],
      setShowPass = _useState[1];

  var classes = useStyles();
  var _props$website = props.website,
      website = _props$website === void 0 ? {
    name: 'website',
    url: 'https://material-ui.com',
    copyrightvisible: true,
    logo: '/broken-image.jpg'
  } : _props$website,
      _props$formControl = props.formControl,
      formControl = _props$formControl === void 0 ? {
    label: 'Remember me',
    control: {
      value: 'remember',
      color: 'primary'
    }
  } : _props$formControl,
      _props$forgetpassword = props.forgetpassword,
      forgetpassword = _props$forgetpassword === void 0 ? {
    text: 'Forgot password?',
    link: '#',
    visible: true
  } : _props$forgetpassword,
      _props$signin = props.signin,
      signin = _props$signin === void 0 ? {
    text: 'SIGN IN',
    icon: undefined
  } : _props$signin,
      _props$signup = props.signup,
      signup = _props$signup === void 0 ? {
    text: "Don't have an account? Sign Up",
    link: '#',
    visible: true
  } : _props$signup,
      onSubmit = props.onSubmit,
      _props$isbusy = props.isbusy,
      isbusy = _props$isbusy === void 0 ? false : _props$isbusy,
      _props$progressprops = props.progressprops,
      progressprops = _props$progressprops === void 0 ? {
    color: 'primary',
    size: 21
  } : _props$progressprops,
      _props$buttonprops = props.buttonprops,
      buttonprops = _props$buttonprops === void 0 ? {
    color: 'primary',
    type: 'submit',
    variant: 'contained'
  } : _props$buttonprops,
      _props$usernameprops = props.usernameprops,
      usernameprops = _props$usernameprops === void 0 ? {
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
  } : _props$usernameprops,
      _props$passwordprops = props.passwordprops,
      passwordprops = _props$passwordprops === void 0 ? {
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
  } : _props$passwordprops;
  return /*#__PURE__*/React.createElement(Container, {
    component: "main",
    maxWidth: "xs"
  }, /*#__PURE__*/React.createElement(CssBaseline, null), /*#__PURE__*/React.createElement("div", {
    className: classes.paper
  }, /*#__PURE__*/React.createElement(Avatar, _extends({
    alt: website.name,
    src: website.logo,
    className: classes.large
  }, props.avatar)), /*#__PURE__*/React.createElement(Typography, {
    component: "h1",
    variant: "h5"
  }, website.name), /*#__PURE__*/React.createElement("form", {
    className: classes.form,
    onSubmit: onSubmit
  }, /*#__PURE__*/React.createElement(TextField, _extends({
    id: "username"
  }, usernameprops)), /*#__PURE__*/React.createElement(TextField, _extends({
    type: showPassword ? 'text' : 'password',
    id: "password"
  }, passwordprops, {
    InputProps: _extends(_extends({}, passwordprops.InputProps), {}, {
      endAdornment: /*#__PURE__*/React.createElement(IconButton, {
        "aria-label": "toggle password visibility",
        onClick: function onClick() {
          return setShowPass(!showPassword);
        },
        edge: "end"
      }, showPassword ? /*#__PURE__*/React.createElement(Visibility, null) : /*#__PURE__*/React.createElement(VisibilityOff, null))
    })
  })), /*#__PURE__*/React.createElement(FormControlLabel, {
    control: /*#__PURE__*/React.createElement(Checkbox, {
      id: "rememberme",
      value: formControl.control.value,
      color: formControl.control.color
    }),
    label: formControl.label
  }), /*#__PURE__*/React.createElement(LoadingButton, _extends({
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
