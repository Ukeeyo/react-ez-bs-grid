import { LoremIpsum } from "lorem-ipsum";

const bgmax = 1
const bgmin = 0.3
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

const generateSectionHeaderRow = (title) => {
	const row = [{
		style: {
			backgroundColor: `rgba(0, 0, 0, 0.9`,
			color: "white",
			fontSize: "40px",
			padding: 15
		},
		topText: {
			content: title,
			containerProps: {
				className: "justify-content-center"
			}
		},
	}];

	return { columns: row }
}

const generateCatTile = (params) => {
	return {
		style: {
			backgroundColor: `rgba(0, 0, 0, ${Math.random() * (bgmax - bgmin) + bgmin})`,
			color: "white",
			fontSize: "25px",
			padding: 15
		},
		topText: {
			content: params.topText,
			containerProps: {
				className: "justify-content-center"
			}
		},
		image: {
			src: params.image,
			containerProps: {
				className: "justify-content-center"
			},
			props: {
				roundedCircle: true,
				style: {
					height: 100,
					width: 100
				}
			}
		},
		bottomText: {
			content: params.bottomText,
			containerProps: {
				className: "justify-content-center"
			}
		}
	}
}

const generateCatRow = (rowNum, numCols) => {
	const row = [];
	for (var i = 0; i < numCols; i++) {
		row.push(generateCatTile({
			topText: `Top ${rowNum}-${i}`,
			image: `https://placekitten.com/100/100?image=${rowNum}${i}`,
			bottomText: `Bottom ${rowNum}-${i}`
		}));
	}
	return { columns: row };
}

const generateParagraphRow = () => {
	const row = [
	{
		style: {
			backgroundColor: `rgba(0, 0, 0, ${Math.random() * (bgmax - bgmin) + bgmin})`,
			color: 'white'
		},
		topText: {
			content: 'Paragraph 1',
			containerProps: {
				className: "justify-content-center",
				style: {
					fontSize: "25px",
				},
			}
		},
		paragraph: {
			content: lorem.generateParagraphs(4),
			containerProps: {
				style: {
					marginLeft: 10,
					marginRight: 10,
				}
			},
			props: {
				className: 'text-left'
			}
		}
	},
	{
		style: {
			backgroundColor: `rgba(0, 0, 0, ${Math.random() * (bgmax - bgmin) + bgmin})`,
			color: 'white'
		},
		topText: {
			content: 'Paragraph 2',
			containerProps: {
				className: "justify-content-center",
				style: {
					fontSize: "25px",
				},
			}
		},
		paragraph: {
			content: lorem.generateParagraphs(4),
			props: {
				className: 'text-center'
			}
		}
	},
	{
		style: {
			backgroundColor: `rgba(0, 0, 0, ${Math.random() * (bgmax - bgmin) + bgmin})`,
			color: 'white'
		},
		topText: {
			content: 'Paragraph 3',
			containerProps: {
				className: "justify-content-center",
				style: {
					fontSize: "25px",
				},
			}
		},
		paragraph: {
			content: lorem.generateParagraphs(4),
			containerProps: {
				style: {
					marginLeft: 10,
					marginRight: 10,
				}
			},
			props: {
				className: 'text-right'
			}
		}
	},
	]

	return { columns: row };
}

const generateHeadingsRow = () => {
	const row = [];

	for (let i = 1; i <= 6 ; i++) {
		const tile = {};
		tile[`h${i}`] = {
			containerProps: {
				className: 'row align-items-center'
			},
			content: `h${i}`,
			props: {
				style: {
					color: 'white'
				}
			}
		}
		row.push(tile);
	}

	return { 
		props: {
			className: 'align-items-center'
		},
		columns: row 
	};
}

export default {
	generateGridModel: () => {
		const rows = [];

		rows.push(generateSectionHeaderRow('Cat Tiles'));
		for (var i = 0; i < 2; i++) {
			rows.push(generateCatRow(i, 4))
		}
		rows.push(generateSectionHeaderRow('Paragraph Tiles'));
		rows.push(generateParagraphRow());
		rows.push(generateSectionHeaderRow('Headings'));
		rows.push(generateHeadingsRow());

		return { 
			rows, 
			style: {
				backgroundColor: 'purple' 
			},
		}
	}
}