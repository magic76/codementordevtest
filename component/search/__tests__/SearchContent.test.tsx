import { render, screen, waitFor } from '@testing-library/react';
import { SearchProvider } from '../../../store/SearchContext';
jest.mock('../feature/algoliasearch', () => ({
	getAlgoliasearch: async () => ({
		hits: [
			{ title: '1st title', id: 1101 },
			{ title: '2nd title', id: 1102 },
		],
	}),
}));
import SearchContent from '../SearchContent';

const customRender = (ui, { providerProps, ...renderOptions }) => {
	return render(<SearchProvider {...providerProps}>{ui}</SearchProvider>, renderOptions);
};

describe('SearchContent', () => {
	beforeEach(() => {
		jest.resetModules();
	});
	it('renders list with two items', async () => {
		const providerProps = {
			searchKey: '',
		};

		customRender(<SearchContent />, { providerProps });
		expect(screen.getByText(/loading/i)).toBeTruthy();
		await waitFor(() => {
			expect(screen.getByText(/1st title/i)).toBeTruthy();
			expect(screen.getByText(/2nd title/i)).toBeTruthy();
		});
	});
});
