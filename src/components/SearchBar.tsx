import React, { useState } from 'react';
import Button from './Button';

export interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent form submission
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSearch} className="flex justify-center lg:pb-12 pb-6">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search by Pokemon name"
        className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 mr-2"
      />
      <Button type="submit">
        Search
      </Button>
    </form>
  );
};

export default SearchBar;
