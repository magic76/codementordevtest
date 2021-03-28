import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SearchRow from '../SearchRow';
import { SearchProvider } from '../../../../store/SearchContext';

const customRender = (ui, { providerProps, ...renderOptions }) => {
	return render(<SearchProvider {...providerProps}>{ui}</SearchProvider>, renderOptions);
};

const renderSearchItem = () => {
	const providerProps = {
		searchKey: '',
	};

	customRender(
		<SearchRow
			searchItem={{
				id: 1,
				categories: ['typea', 'typeb'],
				title: 'first item',
				author_name: 'first author',
				content: 'first content',
			}}
		/>,
		{ providerProps },
	);
};

describe('Search Content', () => {
	it('renders with current item', async () => {
		renderSearchItem();
		expect(screen.getByText(/first item/i)).toBeTruthy();
	});

	it('', async () => {
		renderSearchItem();
		fireEvent.mouseOver(screen.getByText('first item'));
		fireEvent.click(screen.getByText('Save'));
		expect(screen.getByText(/Unsave/)).toBeTruthy();
		fireEvent.mouseLeave(screen.getByText('first item'));
		expect(screen.getByText(/Saved/)).toBeTruthy();
	});
});
