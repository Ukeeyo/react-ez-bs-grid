# react-ez-bs-grid

> Easy component for creating react grids with Bootstrap

[![NPM](https://img.shields.io/npm/v/react-ez-bs-grid.svg)](https://www.npmjs.com/package/react-ez-bs-grid) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-ez-bs-grid
```

## Usage

```jsx
import React, { Component } from 'react'

import { EZBSG } from 'react-ez-bs-grid'

class Example extends Component {
  render() {
    return <EZBSG model={gridModel} />
  }
}
```

## Model
the model props should be shaped like the following JSON:
```
const exampleModel = {
	rows: [/* array of row models */]
	style: { ... } /* standard react component props are supported */
}
```
Each row should be shaped like the following JSON:
```
const exampleRow = {
	columns: [/* array of column models */]
	/* props for the bootstrap row component things like style can be passed here */
	props: { 
		className: 'text-center' 
	}
}
```
Each column should be shaped like the following JSON:
```
const exampleColumn= {
	type: 'img' /* string defining the type of component to place inside of the column */
	/* All props for the defined component type should be added here */
	props: { 
		src: 'https://placekitten.com/300/300' 
	}
	colProps: {
		style: { ... } /* props for the bootstrap Col component */
	}
}
```
The final model should resemble this following:
```
const model = {
	"rows": [{
		"columns": [{
			"type": "text",
			"colProps": {
				"style": {
					"backgroundColor": "rgba(0, 0, 0, 0.9",
					"color": "white",
					"fontSize": "40px",
					"padding": 15
				},
				"className": "text-center"
			},
			"content": "Image Tiles"
		}]
	}, {
		"props": {
			"className": "text-center"
		},
		"columns": [{
			"type": "image",
			"props": {
				"src": "https://placekitten.com/300/300?image=0",
				"roundedCircle": true
			},
			"colProps": {
				"style": {
					"paddingTop": 10,
					"paddingBottom": 10,
					"backgroundColor": "rgba(0, 0, 0, 0.9594841427236049)"
				}
			}
		}, {
			"type": "image",
			"props": {
				"src": "https://placekitten.com/300/300?image=1",
				"roundedCircle": true
			},
			"colProps": {
				"style": {
					"paddingTop": 10,
					"paddingBottom": 10,
					"backgroundColor": "rgba(0, 0, 0, 0.825284755385659)"
				}
			}
		}, {
			"type": "image",
			"props": {
				"src": "https://placekitten.com/300/300?image=2",
				"roundedCircle": true
			},
			"colProps": {
				"style": {
					"paddingTop": 10,
					"paddingBottom": 10,
					"backgroundColor": "rgba(0, 0, 0, 0.30283335827638463)"
				}
			}
		}]
	}]
}
```


## License

MIT © [Ukeeyo](https://github.com/Ukeeyo)
