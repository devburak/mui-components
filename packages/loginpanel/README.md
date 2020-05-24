
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
	}  //look at material-ui.com for details 

  usernameprops = {
      InputProps: {
        startAdornment: (
          <InputAdornment position='start'>
            <AccountCircle />
          </InputAdornment>
        )
      },
      label: 'User Name or Email',
      fullWidth: true,
      name: 'username',
      autoComplete: 'email',
      autoFocus: true,
      variant: 'outlined',
      margin: 'normal',
      required: true
    } //look at material-ui.com for details 


	isbusy = false
	
    progressprops = { color: 'primary', size: 21 }
    
    buttonprops = { color: 'primary', type: 'submit', variant: 'contained' }

	website = {
      name: 'website',
      url: 'https://material-ui.com',
      copyrightvisible: true,
      logo: '/broken-image.jpg'
    }
    
    formControl = {
      label: 'Remember me',
      control: { value: 'remember', color: 'primary' }
    }
    
    forgetpassword = { text: 'Forgot password?', link: '#', visible: true }
    
    signin = { text: 'SIGN IN', icon: undefined }
    
    signup = {
      text: "Don't have an account? Sign Up",
      link: '#',
      visible: true
    }
```

**onSubmit** have to be function from parent component to handle variables.

You can run just defined onSubmit.

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
