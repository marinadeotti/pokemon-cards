import { render, screen } from '@testing-library/react';
import { expect, test } from '@jest/globals';
import { PokemonCard } from '../../@types/pokemon-types';
import { BrowserRouter as Router } from 'react-router-dom';
import Card from '../Card';

const mockCard: PokemonCard = {
    id: 'xy7-54',
    name: 'Gyarados',
    images: {
        small: 'https://images.pokemontcg.io/xy7/54.png',
        large: 'https://images.pokemontcg.io/xy7/54_hires.png',
    },
    types: ['Water'],
};

test('renders the card with the correct information', () => {
    render(
        <Router>
            <Card {...mockCard} />
        </Router>
    );

    expect(screen.getByText('Gyarados')).toBeTruthy();
    expect(screen.getByAltText('Gyarados')).toBeTruthy();
    expect(screen.getByText('ID: xy7-54')).toBeTruthy();
    expect(screen.getByText('Type: Water')).toBeTruthy();
});
