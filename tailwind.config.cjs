const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				// Configure your color palette here
				orange: 'hsl(26, 100%, 55%)',
				paleorange: 'hsl(25, 100%, 94%)'
			},
			dropShadow: {
				'3xl' : '0 25px 25px rgba(255, 121, 26, 0.25)',
			},
		}
	},

	variants: {
		extend: {}
	},

	plugins: []
};

module.exports = config;
