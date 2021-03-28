import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SearchInput from '../SearchInput';
import { SearchProvider } from '../../../../store/SearchContext';

const customRender = (ui, { providerProps, ...renderOptions }) => {
	return render(<SearchProvider {...providerProps}>{ui}</SearchProvider>, renderOptions);
};

describe('SearchInput', () => {
	it('enter word should change input value', () => {
		const providerProps = {
			searchKey: '',
		};

		const utils = customRender(<SearchInput />, { providerProps });
		const input = utils.getByLabelText('searchInput');
		userEvent.type(input, 'react');
		expect(input.value).toEqual('react');
	});
});
