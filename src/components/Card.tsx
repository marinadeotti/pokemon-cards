import { useNavigate } from 'react-router-dom';
import { PokemonCard } from '../@types/pokemon-types';

const Card = (card: PokemonCard) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/pokemon?id=${card.id}`);
  };

  return (
    <div onClick={handleClick} className="bg-indigo-900 border border-indigo-700 rounded-lg shadow-lg flex flex-col items-center mx-4 text-center text-white hover:cursor-pointer overflow-hidden">
      <div className='bg-indigo-700 w-full py-2 block mb-4'>
        <h1 className="font-bold text-white text-xl">{card.name}</h1>
      </div>
      <img src={card.images.small} alt={card.name} width={245} height={342} />
      <div className="py-4 text-lg">
        <p>ID: {card.id}</p>
        <p>Type: {card.types ? card.types?.join(', ') :  'No type'}</p>
      </div>
    </div>
  );
};

export default Card;
