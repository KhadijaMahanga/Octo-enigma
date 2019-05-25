module.exports = {
  staticFileGlobs: [
    'build/static/css/**.css',
    'build/static/js/**.js',
	'build/favicon.ico',
	'build/index.php',
	'build/',
	'/'
  ],
  swFilePath: './build/service-worker.js',
  stripPrefix: 'build/',
  handleFetch: false,
  importScripts: ['custom-fetch-handler.js'],
  runtimeCaching: [{
	urlPattern: '/*',
    handler: 'networkFirst'
  }]
}