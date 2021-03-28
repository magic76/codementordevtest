import { useContext, useRef } from 'react';
import { debounce } from 'lodash';

// context
import { SearchContext } from '../../../store/SearchContext';

const SearchInput = () => {
	const { searchKey, setSearchKey } = useContext(SearchContext);
	const inputRef = useRef();
	const debounceSetSearchKey = debounce(key => {
		setSearchKey(key);
	}, 300);
	const changeKeyHandler = e => {
		debounceSetSearchKey(e.target.value);
		(inputRef.current as any).value = e.target.value;
	};
	return (
		<input
			aria-label="searchInput"
			ref={inputRef}
			defaultValue={searchKey}
			style={{ width: '200px', margin: '20px 0 0 0 ' }}
			onChange={changeKeyHandler}
			placeholder="Please enter the keyword"
		/>
	);
};

export default SearchInput;
