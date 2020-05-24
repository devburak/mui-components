function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var buttonloading = require('buttonloading');
var Avatar = _interopDefault(require('@material-ui/core/Avatar'));
var CssBaseline = _interopDefault(require('@material-ui/core/CssBaseline'));
var TextField = _interopDefault(require('@material-ui/core/TextField'));
var Container = _interopDefault(require('@material-ui/core/Container'));
var FormControlLabel = _interopDefault(require('@material-ui/core/FormControlLabel'));
var Checkbox = _interopDefault(require('@material-ui/core/Checkbox'));
var Link = _interopDefault(require('@material-ui/core/Link'));
var Grid = _interopDefault(require('@material-ui/core/Grid'));
var Box = _interopDefault(require('@material-ui/core/Box'));
var LockRounded = _interopDefault(require('@material-ui/icons/LockRounded'));
var AccountCircle = _interopDefault(require('@material-ui/icons/AccountCircle'));
var InputAdornment = _interopDefault(require('@material-ui/core/InputAdornment'));
var Typography = _interopDefault(require('@material-ui/core/Typography'));
var styles = require('@material-ui/core/styles');
var Visibility = _interopDefault(require('@material-ui/icons/Visibility'));
var VisibilityOff = _interopDefault(require('@material-ui/icons/VisibilityOff'));
var IconButton = _interopDefault(require('@material-ui/core/IconButton'));

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
  return /*#__PURE__*/React__default.createElement(Typography, {
    variant: "body2",
    color: "textSecondary",
    align: "center"
  }, website.copyrightvisible && 'Copyright © ', /*#__PURE__*/React__default.createElement(Link, {
    color: "inherit",
    href: website.url
  }, website.name), ' ', new Date().getFullYear(), '.');
}

var useStyles = styles.makeStyles(function (theme) {
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
  var _useState = React.useState(false),
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
      startAdornment: /*#__PURE__*/React__default.createElement(InputAdornment, {
        position: "start"
      }, /*#__PURE__*/React__default.createElement(AccountCircle, null))
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
      startAdornment: /*#__PURE__*/React__default.createElement(InputAdornment, {
        position: "start"
      }, /*#__PURE__*/React__default.createElement(LockRounded, null))
    },
    autoComplete: 'current-password',
    variant: 'outlined',
    margin: 'normal',
    required: true,
    fullWidth: true,
    name: 'password',
    label: 'Password'
  } : _props$passwordprops;
  return /*#__PURE__*/React__default.createElement(Container, {
    component: "main",
    maxWidth: "xs"
  }, /*#__PURE__*/React__default.createElement(CssBaseline, null), /*#__PURE__*/React__default.createElement("div", {
    className: classes.paper
  }, /*#__PURE__*/React__default.createElement(Avatar, _extends({
    alt: website.name,
    src: website.logo,
    className: classes.large
  }, props.avatar)), /*#__PURE__*/React__default.createElement(Typography, {
    component: "h1",
    variant: "h5"
  }, website.name), /*#__PURE__*/React__default.createElement("form", {
    className: classes.form,
    onSubmit: onSubmit
  }, /*#__PURE__*/React__default.createElement(TextField, _extends({
    id: "username"
  }, usernameprops)), /*#__PURE__*/React__default.createElement(TextField, _extends({
    type: showPassword ? 'text' : 'password',
    id: "password"
  }, passwordprops, {
    InputProps: _extends(_extends({}, passwordprops.InputProps), {}, {
      endAdornment: /*#__PURE__*/React__default.createElement(IconButton, {
        "aria-label": "toggle password visibility",
        onClick: function onClick() {
          return setShowPass(!showPassword);
        },
        edge: "end"
      }, showPassword ? /*#__PURE__*/React__default.createElement(Visibility, null) : /*#__PURE__*/React__default.createElement(VisibilityOff, null))
    })
  })), /*#__PURE__*/React__default.createElement(FormControlLabel, {
    control: /*#__PURE__*/React__default.createElement(Checkbox, {
      id: "rememberme",
      value: formControl.control.value,
      color: formControl.control.color
    }),
    label: formControl.label
  }), /*#__PURE__*/React__default.createElement(buttonloading.LoadingButton, _extends({
    type: "submit",
    fullWidth: true,
    className: classes.submit,
    progressprops: progressprops,
    isbusy: isbusy,
    startIcon: signin.icon
  }, buttonprops), signin.text), /*#__PURE__*/React__default.createElement(Grid, {
    container: true
  }, /*#__PURE__*/React__default.createElement(Grid, {
    item: true,
    xs: true
  }, forgetpassword.visible ? /*#__PURE__*/React__default.createElement(Link, {
    href: forgetpassword.link,
    variant: "body2"
  }, forgetpassword.text) : undefined), /*#__PURE__*/React__default.createElement(Grid, {
    item: true
  }, signup.visible ? /*#__PURE__*/React__default.createElement(Link, {
    href: signup.link,
    variant: "body2"
  }, signup.text) : undefined)))), /*#__PURE__*/React__default.createElement(Box, {
    mt: 8
  }, /*#__PURE__*/React__default.createElement(Copyright, {
    website: website
  })));
}

module.exports = LoginPanel;
//# sourceMappingURL=index.js.map
