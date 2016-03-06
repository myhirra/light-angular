import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';

const config = {
	entry:[
		'webpack-dev-server/client?http://localhost:3000',
    	'webpack/hot/only-dev-server',
		`${__dirname}/../src/index.js`
	],
	output: {
		path: `${__dirname}/../dist/`,
		filename: 'light-angular.js',
		publicPath: '/'
	},
	resolve: {
		extensions: ['', '.js'],
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
          	loader: 'babel'
		}]
  	},
	devtool: 'source-map',
	cache: false,
	plugins: [
		 new webpack.HotModuleReplacementPlugin(),
	]
};

new WebpackDevServer(webpack(config), {
  publicPath: '/',
  hot: true,
  historyApiFallback: true,
  noInfo: true
}).listen(3000, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:3000');
});

export default config;
