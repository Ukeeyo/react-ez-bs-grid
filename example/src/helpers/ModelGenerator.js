// This is a helper utility to help demonstrate how the model can be created

import { LoremIpsum } from "lorem-ipsum";
const lorem = new LoremIpsum({
	sentencesPerParagraph: {
		max: 8,
		min: 4
	},
	wordsPerSentence: {
		max: 16,
		min: 4
	}
});

const randomBackground = () => {
	const bgmax = 1
	const bgmin = 0.3
	return `rgba(0, 0, 0, ${Math.random() * (bgmax - bgmin) + bgmin})`
}

const generateSectionHeaderRow = (title) => {
	const columns = [{
		type: 'text',
		colProps: {
			style: {
				backgroundColor: `rgba(0, 0, 0, 0.9`,
				color: "white",
				fontSize: "40px",
				padding: 15
			},
			className: "text-center"
		},
		content: title,
	}];

	return { columns }
}

const generateHeadingsRow = () => {
	const columns = [];

	for (let i = 1; i <= 6 ; i++) {
		const tile = {
			type: `h${i}`,
			content: `h${i}`,
			props: {
				style: {
					color: 'white'
				}
			}
		}
		columns.push(tile);
	}

	return { 
		props: {
			className: 'align-items-center',
			style: {
				backgroundColor: randomBackground()
			}
		},
		columns 
	};
}

const generateImageRow = (numImages, padding) => {
	const columns = [];
	for (var i = 0; i < numImages; i++) {
		columns.push({
			type: 'image',
			props: {
				src: `https://placekitten.com/300/300?image=${i}`,
				roundedCircle: true,
			},
			colProps: {
				style: {
					paddingTop: padding,
					paddingBottom: padding,
					backgroundColor: randomBackground(),
				}
			}
		})
	}
	return {
		props: {
			className: "text-center",
		},
		columns
	}
}

const generateParagraphRow = () => {
	const columns = [];

	columns.push({
		type: 'paragraph',
		content: lorem.generateParagraphs(4),
		props: {
			className: 'text-left'
		},
		colProps: {
			style: {
			backgroundColor: randomBackground(),
			color: 'white'
		},
		}
	})

	columns.push({
		type: 'paragraph',
		content: lorem.generateParagraphs(4),
		props: {
			className: 'text-center'
		},
		colProps: {
			style: {
			backgroundColor: randomBackground(),
			color: 'white'
		},
		}
	})

	columns.push({
		type: 'paragraph',
		content: lorem.generateParagraphs(4),
		props: {
			className: 'text-right'
		},
		colProps: {
			style: {
			backgroundColor: randomBackground(),
			color: 'white'
		},
		}
	})

	return { columns };
}

const generateSubGrid = (heading) => {
	const subColumns = [];
	subColumns.push(generateSectionHeaderRow(heading));
	subColumns.push(generateImageRow(1, 0));
	subColumns.push({
		columns: [{
			type: 'h5',
			content: 'This way related content is grouped togeather',
			props: {
				className: 'text-left',
					style: {
						color: 'red'
				}
			}
		}]
	})
	subColumns.push({ 
		columns:[{
					type: 'paragraph',
					content: lorem.generateParagraphs(2),
					props: {
						className: 'text-left',
						style: {
							color: 'white'
						}
					}
				}]
	});

	return subColumns;
}

const generateGridception = () => {
	const columns = [];

	
	const model1 = {
		rows: generateSubGrid('Grid 1')
	}
	const model2 = {
		rows: generateSubGrid('Grid 2')
	}
	const model3 = {
		rows: generateSubGrid('Grid 3')
	}

	columns.push({
		type: 'grid',
		colProps: {
			style: {
				padding: 0,
			}
		},
		props: {
			model: model1
		}
	})

	columns.push({
		type: 'grid',
		colProps: {
			style: {
				padding: 0,
			}
		},
		props: {
			model: model2
		}
	})

	columns.push({
		type: 'grid',
		colProps: {
			style: {
				padding: 0,
			}
		},
		props: {
			model: model3
		}
	})

	return { 
		props: {
			style: {
				backgroundColor: randomBackground(),
			}
		},
		columns 
	};
}

export default {
	generateGridModel: () => {
		const rows = [];

		rows.push(generateSectionHeaderRow('Image Tiles'));
		rows.push(generateImageRow(3, 10));

		rows.push(generateSectionHeaderRow('Paragraphs'));
		rows.push(generateParagraphRow());

		rows.push(generateSectionHeaderRow('Headings'));
		rows.push(generateHeadingsRow());

		rows.push(generateSectionHeaderRow('Grid-Ception!'));
		rows.push(generateGridception());

		return { 
			rows, 
			style: {
				backgroundColor: 'purple' 
			},
		}
	}
}