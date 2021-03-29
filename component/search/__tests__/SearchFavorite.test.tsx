import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { SearchProvider } from '../../../store/SearchContext';
import SearchFavorite from '../SearchFavorite';

const customRender = (ui, { providerProps, ...renderOptions }) => {
	return render(<SearchProvider {...providerProps}>{ui}</SearchProvider>, renderOptions);
};

describe('SearchFavorite', () => {
	beforeEach(() => {
		jest.resetModules();
	});
	it('favorite with two item, and cancel one.', async () => {
		const providerProps = {
			searchKey: '',
			list: [
				{ title: '1st favorite', id: 1101 },
				{ title: '2nd favorite', id: 1102 },
			],
		};

		customRender(<SearchFavorite />, { providerProps });
		await waitFor(() => {
			expect(screen.getByText(/1st favorite/i)).toBeTruthy();
			expect(screen.getByText(/2nd favorite/i)).toBeTruthy();
		});
		fireEvent.mouseOver(screen.getByText('1st favorite'));
		fireEvent.click(screen.getByText('Unsave'));

		expect(screen.queryByText(/1st favorite/)).toBeNull();
	});
});
