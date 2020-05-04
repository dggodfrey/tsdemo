const glob = require('glob');

module.exports = {
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.json', '.jsx'],
		alias: {
            '@legacyUtils': 'src/legacy/deeply/nested/because/why/not/else/util.js',
            '@utils': 'src/utils',
		}
	},
	plugins: [],
};
