
# loginpanel

> Login Panel with Material-ui components

[![NPM](https://img.shields.io/npm/v/loginpanel.svg)](https://www.npmjs.com/package/loginpanel) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save loginpanel

yarn add loginpanel
```

## Usage

```jsx
import  React, { Component } from  'react'
import  LoginPanel  from  'loginpanel'

class  Example  extends  Component {

	const  handleSubmit = event =>{
		event.preventDefault();
		//get values from child component
		const  username = event.target[0].value  // or document.getElementById('username').value
		const  password = event.target[2].value  // or document.getElementById('password').value
		const  remember = event.target[5].checked // or document.getElementById('rememberme').checked
		
		// console.log(event.target) //scope event.target
	}

	render() {
		return  <LoginPanel  onSubmit={handleSubmit}  />
	}
}
```
**

## Props
You can use it with some props from material-ui attributes
| name| type|from @material-ui|
|--|--|--|
| formControl | Object | no|
| website | Object | no |
| forgetpassword | Object | no|
| signin | Object | no |
| signup | Object | no |
| onSubmit | Function | no (have to declare to handle values)|
| isbusy | Boolean | no |
| progressprops | Object | yes (from [buttonloading](https://www.npmjs.com/package/buttonloading))|
| buttonprops | Object | yes (from [buttonloading](https://www.npmjs.com/package/buttonloading))|
| usernameprops | Object | yes (from [@material-ui/core/TextField](https://material-ui.com/components/text-fields/))|
| passwordprops| Object | yes (from [@material-ui/core/TextField](https://material-ui.com/components/text-fields/))|


**Default values of props**

```jsx
passwordprops = { InputProps: { 
		startAdornment: (<InputAdornment  position='start'>
			 <LockRounded  /> </InputAdornment> )},
		autoComplete:  'current-password',
		variant:  'outlined',
		margin:  'normal',
		required:  true,
		fullWidth:  true,
		name:  'password',
		label:  'Password'
	}
```
**

The reserved identifiers are:
		**username** = @material-ui/core/**TextField** for "username"
		**password** =  @material-ui/core/**TextField** for "password"
		**rememberme** = @material-ui/core/**Checkbox** for "remember me"
	


**PeerDependency**
Do not use it if you are not already using
**[@material-ui/icons](https://material-ui.com/)**,
**[@material-ui/core](https://material-ui.com/)**,
also **[buttonloading](https://www.npmjs.com/package/buttonloading)**

## License

MIT © [Burak İmrek](https://github.com/devburak)
