import React, { useState } from 'react';

export interface ISearchItem {
	id: number;
	categories: string[];
	title: string;
	author_name: string;
	content: string;
}

export const SearchContext = React.createContext({
	list: [],
	add: (item: ISearchItem) => {},
	remove: (item: ISearchItem) => {},
	searchKey: '',
	setSearchKey: (value: string) => {},
});

export const SearchProvider: React.FC<{ searchKey?: string; list?: ISearchItem[] }> = props => {
	const [searchKey, setSearchKey] = useState(props.searchKey ?? '');
	const [list, setList] = useState<ISearchItem[]>(props.list ?? []);
	const add = (currentItem: ISearchItem) => {
		setList([...list, currentItem]);
	};
	const remove = (currentItem: ISearchItem) => {
		setList([...list].filter(item => item.id !== currentItem.id));
	};
	return (
		<SearchContext.Provider
			value={{
				list,
				add,
				remove,
				searchKey,
				setSearchKey,
			}}
		>
			{props.children}
		</SearchContext.Provider>
	);
};
