import { render, screen, fireEvent } from '@testing-library/react';

describe('SearchTab', () => {
	beforeEach(() => {
		jest.resetModules();
	});
	it('renders with two tabs', async () => {
		jest.mock('next/router', () => ({
			useRouter() {
				return {
					route: '/search',
					pathname: '/search',
					query: '',
					asPath: '',
					push: path => {
						expect(path).toEqual('/favorite');
					},
				};
			},
		}));

		const SearchTab = require('../SearchTab').default;
		render(<SearchTab />);
		expect(screen.getByText(/Search/i)).toBeTruthy();
		expect(screen.getByText(/Favorite/i)).toBeTruthy();
		fireEvent.click(screen.getByText('Favorite'));
	});
});
