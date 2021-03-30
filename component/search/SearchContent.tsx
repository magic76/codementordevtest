import { useContext, useEffect, useState } from 'react';

// component
import { SearchContext, ISearchItem } from '../../store/SearchContext';
import SearchRow from './feature/SearchRow';

// util
import { getAlgoliasearch } from './feature/algoliasearch';

const SearchContent: React.FC = () => {
	const { searchKey } = useContext(SearchContext);
	const [searchResult, setSearchResult] = useState<ISearchItem[]>([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (!searchKey) {
			return;
		}
		setLoading(true);
		getAlgoliasearch(searchKey).then(({ hits }) => {
			setSearchResult(hits as any);
			setLoading(false);
		});
	}, [searchKey]);
	const isEmpty = searchResult.length === 0;
	if (!searchKey) {
		return <div></div>;
	}
	if (loading) {
		return <div>loading...</div>;
	}
	if (isEmpty) {
		return <div>No result</div>;
	}
	return (
		<>
			{searchResult.map(item => (
				<SearchRow key={item.id} searchItem={item} />
			))}
		</>
	);
};

export default SearchContent;
