import { useContext, useState } from 'react';

// component
import { SearchContext, ISearchItem } from '../../../store/SearchContext';

const SearchRow: React.FC<{ searchItem: ISearchItem }> = ({ searchItem }) => {
	const { title, author_name, categories = [], id } = searchItem;
	const [isShowControllButton, setShowControllButton] = useState(false);
	return (
		<div
			onMouseEnter={() => setShowControllButton(true)}
			onMouseLeave={() => setShowControllButton(false)}
			style={{ borderBottom: 'solid 1px #e2e2e2', paddingBottom: '10px', margin: '10px 0' }}
		>
			<div>{title}</div>
			<div style={{ display: 'flex' }}>
				<div>{author_name}</div>
				<>
					{categories.map(categorie => (
						<div
							style={{
								whiteSpace: 'nowrap',
								backgroundColor: '#e2e2e2',
								margin: '0 5px',
								padding: '0 5px',
							}}
						>
							{categorie}
						</div>
					))}
				</>
				<div style={{ marginLeft: 'auto' }}>
					{isShowControllButton ? (
						<ControllButton searchItem={searchItem} />
					) : (
						<SavedButton searchItem={searchItem} />
					)}
				</div>
			</div>
		</div>
	);
};

const ControllButton: React.FC<{ searchItem: ISearchItem }> = ({ searchItem }) => {
	const { add, remove, list } = useContext(SearchContext);
	const isAdd = list.some(item => item.id === searchItem.id);
	const style = { backgroundColor: '#ffffff', border: 'solid 1px', borderRadius: '2px', cursor: 'pointer' };
	return (
		<>
			{isAdd ? (
				<button onClick={() => remove(searchItem)} style={style}>
					Unsave
				</button>
			) : (
				<button onClick={() => add(searchItem)} style={style}>
					Save
				</button>
			)}
		</>
	);
};

const SavedButton: React.FC<{ searchItem: ISearchItem }> = ({ searchItem }) => {
	const { list } = useContext(SearchContext);
	const isSaved = list.some(item => item.id === searchItem.id);
	return isSaved ? (
		<button style={{ color: '#ffffff', backgroundColor: '#e2e2e2', border: '0', borderRadius: '2px' }}>
			Saved
		</button>
	) : (
		<></>
	);
};

export default SearchRow;
