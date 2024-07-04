import React, { useEffect, useState, useCallback } from 'react';
import { fetchCard } from '../services/api';
import { Attack } from '../@types/pokemon-types';
import { PokemonCard } from '../@types/pokemon-types';
import Loader from '../components/Loader';
import Modal from '../components/Modal';
import { usePokemon } from '../contexts/PokemonContext';

const PokemonDetails: React.FC = () => {
  const [selectedAttack, setSelectedAttack] = useState<Attack | null>(null);
  const [pokemon, setPokemon] = useState<PokemonCard | null>(null);
  const [notFound, setNotFound] = useState(false);

  const { id } = usePokemon()

  useEffect(() => {
    fetchCard(id!)
      .then(card => {
        setPokemon(card)
      })
      .catch(e => {
        console.log(e)
        setNotFound(true)
      })
  }, [id]);

  const handleAttackClick = useCallback((attack: any) => {
    setSelectedAttack(attack);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedAttack(null);
  }, []);

  if (notFound) {
    return <div className="text-center mt-12">Pokémon not found.</div>;
  }

  if (!pokemon) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto px-4 pb-12 text-white lg:w-2/5">
      <h1 className="text-4xl font-bold text-center my-12">{pokemon.name}</h1>
      <div className="grid grid-cols-1 gap-4 ">
        <div className="flex justify-center ">
          <img src={pokemon.images?.large} alt={pokemon.name} className="max-w-full max-h-fit" />
        </div>
        <div className='text-center'>
          <p>ID: {pokemon.id}</p>
          <p>Type: {pokemon.types ? pokemon.types.join(', ') : 'No type'}</p>
          <h2 className="text-2xl font-bold mt-4">Abilities</h2>
          <ul>
            {pokemon.abilities ? pokemon.abilities.map((item, index) => (
              <li key={index}>
                <p>{item.name} ({item.type}):</p>
                <p>{item.text}</p>
              </li>
            )) : 'No abilities'}
          </ul>
          <h2 className="text-2xl font-bold mt-4">Weaknesses</h2>
          <ul>
            {pokemon.weaknesses ? pokemon.weaknesses.map((w, index) => (
              <li key={index} >
                {w.type}: {w.value}
              </li>
            )) : 'No weaknesses'}
          </ul>
          <h2 className="text-2xl font-bold mt-4">Attacks</h2>
          <ul>
            {pokemon.attacks ? pokemon.attacks.map((a, i) => (
              <li key={i} onClick={() => handleAttackClick(a)} className="cursor-pointer hover:underline">
                {a.name} {a.damage}
              </li>
            )) : 'No attacks'}
          </ul>
        </div>
      </div>
      <Modal isOpen={!!selectedAttack} onClose={handleCloseModal}>
        {selectedAttack && (
          <div className="grid space-y-2">
            <h2 className="text-2xl font-bold">{selectedAttack.name}</h2>
            <p><b>Cost</b>: {selectedAttack.cost?.join(', ')}</p>
            <p><b>Name</b>: {selectedAttack.name}</p>
            <p><b>Damage</b>: {selectedAttack.damage}</p>
            <p><b>Description</b>: {selectedAttack.text}</p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default PokemonDetails;
