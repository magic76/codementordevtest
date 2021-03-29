import { render, screen, waitFor } from '@testing-library/react';
import { useContext, useEffect } from 'react';
import { SearchProvider, SearchContext, ISearchItem } from '../SearchContext';

const Test1 = () => {
	const { list } = useContext(SearchContext);

	return (
		<>
			{list.map(item => (
				<div>{item.title}</div>
			))}
		</>
	);
};

const Test2 = () => {
	const { list, add, remove } = useContext(SearchContext);
	useEffect(() => {
		add({ title: '3rd item', id: 1103 } as ISearchItem);
	}, []);
	return (
		<>
			{list.map(item => (
				<div>{item.title}</div>
			))}
		</>
	);
};
const Test3 = () => {
	const { list, add, remove } = useContext(SearchContext);
	useEffect(() => {
		remove({ title: '1st item', id: 1101 } as ISearchItem);
	}, []);
	return (
		<>
			{list.map(item => (
				<div>{item.title}</div>
			))}
		</>
	);
};
const customRender = (ui, { providerProps, ...renderOptions }) => {
	return render(<SearchProvider {...providerProps}>{ui}</SearchProvider>, renderOptions);
};
describe('SearchContext', () => {
	it('renders with two tabs', async () => {
		const providerProps = {
			searchKey: '',
			list: [
				{ title: '1st item', id: 1101 },
				{ title: '2nd item', id: 1102 },
			],
		};
		customRender(<Test1 />, { providerProps });
		expect(screen.getByText(/1st item/i)).toBeTruthy();
		expect(screen.getByText(/2nd item/i)).toBeTruthy();
	});
	it('add item ', async () => {
		const providerProps = {
			searchKey: '',
			list: [
				{ title: '1st item', id: 1101 },
				{ title: '2nd item', id: 1102 },
			],
		};
		customRender(<Test2 />, { providerProps });
		await waitFor(() => {
			expect(screen.getByText(/3rd item/i)).toBeTruthy();
		});
	});
	it('remove item ', async () => {
		const providerProps = {
			searchKey: '',
			list: [
				{ title: '1st item', id: 1101 },
				{ title: '2nd item', id: 1102 },
			],
		};
		customRender(<Test3 />, { providerProps });
		await waitFor(() => {
			expect(screen.queryByText(/1st item/)).toBeNull();
		});
	});
});
