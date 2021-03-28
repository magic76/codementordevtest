import { useContext } from 'react';

// component
import SearchRow from './feature/SearchRow';

// context
import { SearchContext } from '../../store/SearchContext';

const Favorite = () => {
	const { list } = useContext(SearchContext);

	return (
		<>
			{list.map(searchItem => (
				<SearchRow searchItem={searchItem} />
			))}
		</>
	);
};

export default Favorite;
