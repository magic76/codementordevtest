import { SearchProvider } from '../store/SearchContext';

const MyApp = ({ Component, pageProps }) => (
	<SearchProvider>
		<Component {...pageProps} />
	</SearchProvider>
);

export default MyApp;
