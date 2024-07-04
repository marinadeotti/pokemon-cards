import React from 'react';
import Card from './Card';
import Slider from 'react-slick';
import { CardListProps } from '../@types/pokemon-types';

const sliderSettings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const CardList: React.FC<CardListProps> = ({ cards, goToNextPage }) => {
  const handleBeforeChange = (oldIndex: number, newIndex: number) => {
    // Check if the user navigates to the last slide and then clicks "Next"
    if (oldIndex < newIndex && newIndex === cards.length - 1) {
      goToNextPage();
    }
  };

  return (
    <div>
      <div className="hidden lg:grid lg:grid-cols-5 gap-y-8 justify-between">
        {cards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
      <div className="lg:hidden px-6">
        <Slider {...sliderSettings} beforeChange={handleBeforeChange}>
          {cards.map((card) => (
            <div key={card.id}>
              <Card {...card} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CardList;
