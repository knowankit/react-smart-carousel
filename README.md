# react-smart-carousel

[![NPM](https://img.shields.io/npm/v/react-smart-carousel.svg)](https://www.npmjs.com/package/react-smart-carousel) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

![Trello clone](https://github.com/knowankit/react-smart-carousel/blob/develop/smart-carousel.gif)
<p align="center">
  <a href="https://twitter.com/knowankit">
    <img alt="Twitter: Ankit Kumar" src="https://img.shields.io/twitter/follow/knowankit.svg?style=social" target="_blank" />
  </a>
</p>

## Install

```bash
npm install --save react-smart-carousel
```

If you prefer to use `yarn`, you can do:

```bash
yarn add react-smart-carousel
```

## Usage

```tsx
import React, { Component } from 'react'

import ReactSmartCarousel from 'react-smart-carousel'
import 'react-smart-carousel/dist/index.css'

import one from './images/1.jpg'
import two from './images/2.jpg'
import three from './images/3.jpg'
import four from './images/4.jpg'
import five from './images/5.jpg'
import six from './images/6.jpg'

class Example extends Component {
  render() {
    return <ReactSmartCarousel images={[one, two, three, four, five, six]} />
  }
}
```

## Props

* `images` - An array of images

## License

MIT © [knowankit](https://github.com/knowankit)
