export default {
	name: "blog",
	type: "document",
	title: "Blogs",
	fields: [
		{
			name: "title",
			type: "string",
			title: "Title",
		},
		{
			title: "Meta Description",
			type: "string",
			name: "metadesc",
		},
		{
			name: "content",
			title: "Content",
			type: "array",
			of: [
				{
					type: "block",
				},
				{
					type: "image",
					fields: [
						{
							type: "text",
							name: "alt",
							title: "Alternative text",
							description: `Some of your visitors cannot see images, 
                      be they blind, color-blind, low-sighted; 
                      alternative text is of great help for those 
                      people that can rely on it to have a good idea of 
                      what\'s on your page.`,
							options: {
								isHighlighted: true,
							},
						},
					],
				},
			],
		},
		{
			name: "launchAt",
			type: "datetime",
			title: "Launch Scheduled At",
		},
	],
};
