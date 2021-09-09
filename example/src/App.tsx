import React from 'react'

import { ReactSmartCarousel } from 'react-smart-carousel'
import 'react-smart-carousel/dist/index.css'
import one from './images/1.jpg'
import two from './images/2.jpg'
import three from './images/3.jpg'
import four from './images/4.jpg'
import five from './images/5.jpg'
import six from './images/6.jpg'

const App = () => {
  return <ReactSmartCarousel images={[one, two, three, four, five, six]} />
}

export default App
