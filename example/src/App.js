import React from 'react'
import { EZBSG } from 'react-ez-bs-grid'
import ModelGenerator from './helpers/ModelGenerator'

const model = ModelGenerator.generateGridModel()

const App = () => {
  return <EZBSG model={model} />
}

export default App
