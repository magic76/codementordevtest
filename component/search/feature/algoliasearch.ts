import algoliasearch from 'algoliasearch';

import config from '../../../config/config';
const client = algoliasearch(config.ALGOLIA_APLICATION_ID, config.ALGOLIA_APLICATION_KEY);
const index = client.initIndex(config.ALGOLIA_INDEX_NAME);
export const getAlgoliasearch = searchKey => index.search(searchKey);
