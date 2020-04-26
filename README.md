# react-ez-bs-grid

> Easy component for creating react grids with Bootstrap

[![NPM](https://img.shields.io/npm/v/react-ez-bs-grid.svg)](https://www.npmjs.com/package/react-ez-bs-grid) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install
### This package requires react-bootstrap to function
if you haven't already installed it:
```bash
npm install --save react-bootstrap bootstrap
```
You must also include a bootsrap style sheet in your application:
[more info at the react-bootstrap documentation site](https://react-bootstrap.netlify.app/getting-started/introduction)
```javascript
{/* The following line can be included in your src/index.js or App.js file*/}

import 'bootstrap/dist/css/bootstrap.min.css';
```
Finally, you can install react-ez-bs-grid!
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
If you want to start using EZBSG, you'll want to ensure that your JSON model is shaped correctly. By parsing this model, EZBSG translates the JSON directly to a responsive bootstrap grid
#### the EZBSG component requires a model prop that is shaped like the following JSON:
```javascript
const exampleModel = {
	rows: [/* array of row models */]
	props: {
		/* Props to be passed to the grid component */
		style: { ... } /* standard react component props are supported */
	}
}
```
#### Each row should be shaped like the following JSON:
```javascript
const exampleRow = {
	columns: [/* array of column models */]
	/* props for the bootstrap row component things like style can be passed here */
	props: { 
		className: 'text-center' 
	}
}
```
#### Each column should be shaped like the following JSON:
```javascript
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
#### The final model should resemble this following:
```javascript
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
I know it seems like a lot of nested JSON, but I find it easier to manage once the model generation is automated. ;-)

## Supported Column Types
Currently EZBSG supports the following types:
|type|props|Description| 
|--|--|--|
| grid |accepts `model` prop (exactly like the regular grid)  | place a grid within a column to group related content responsively
|text|`content` - The text to be displayed in the column| Simple text placed within the column|
|image|see [Bootstrap Image documentation](https://react-bootstrap.netlify.app/components/images/#images)|creates a bootstrap `Image` component inside the column|
|paragraph|`content` - the text to place inside of the `<p>` tag|Creates a `<p>` tag within the column
|h1-h6|`content` - the text to place inside of the heading tag|Creates a heading tag within the column

## Example
There is an example application included in this repo, to run it simply run `npm run start-example` from the root directory.

## Development
The easiest way to make changes to this library is by running the sample application locally.

Step 1: run `npm start` in the root of the repo
Step 2: (In another window) change to the example directory `cd example`
step 3: run `npm start` in the example directory
step 4: Hack

## License

MIT © [Ukeeyo](https://github.com/Ukeeyo)