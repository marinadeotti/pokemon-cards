import { render, screen, fireEvent } from '@testing-library/react';
import { expect, jest, test } from '@jest/globals';
import SearchBar, { SearchBarProps } from '../SearchBar';


const onSearchMock = jest.fn();

const renderSearchBar = (props: Partial<SearchBarProps> = {}) => {
    const defaultProps: SearchBarProps = {
        onSearch: onSearchMock,
    };
    return render(<SearchBar {...defaultProps} {...props} />);
};

test('renders search input and button', () => {
    renderSearchBar();
    const searchInput = screen.getByPlaceholderText('Search by Pokemon name');
    const searchButton = screen.getByRole('button', { name: /search/i });

    expect(searchInput).toBeTruthy();
    expect(searchButton).toBeTruthy();
});

test('calls onSearch prop with searchTerm when form is submitted', () => {
    renderSearchBar();
    const searchInput = screen.getByPlaceholderText('Search by Pokemon name');
    const searchButton = screen.getByRole('button', { name: /search/i });

    fireEvent.change(searchInput, { target: { value: 'Charmander' } });
    fireEvent.click(searchButton);

    expect(onSearchMock).toHaveBeenCalledWith('Charmander');
});