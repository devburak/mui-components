# buttonloading

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/buttonloading.svg)](https://www.npmjs.com/package/buttonloading) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save buttonloading
```

## Usage

```jsx
import React, { Component } from 'react'

import {LoadingButton} from 'buttonloading'
import 'buttonloading/dist/index.css'

class Example extends Component {
  render() {
    return <LoadingButton />
  }
}
```
## 
This component user @material-ui/core button and can take its arguments. 
Also use CircularProgress from the @material-ui/core and it can take progressprops to porps CircularProgress
##
such as 
```jsx
const [isBusy,setBusy] = useState(true)
const progressprops = {color:"primary", size:24}

//
  <LoadingButton color="primary" progressprops={progressprops} isBusy={isBusy} onClick={handleClick}> TEXT OF Button </LoadingButton>
```

## License

MIT © [Burak İmrek](https://github.com/devburak)
