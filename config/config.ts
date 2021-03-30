const getNextConfig = require('next/config').default;

const publicRuntimeConfig = getNextConfig()?.publicRuntimeConfig || {};

const config = {
	ALGOLIA_APLICATION_ID: publicRuntimeConfig.ALGOLIA_APLICATION_ID,
	ALGOLIA_APLICATION_KEY: publicRuntimeConfig.ALGOLIA_APLICATION_KEY,
	ALGOLIA_INDEX_NAME: 'Community_articles_staging',
};

export default config;
