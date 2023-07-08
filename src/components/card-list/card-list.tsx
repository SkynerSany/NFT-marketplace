import Card from './card/card';
import CreatorCard from './creator-card/creator-card';
import FeauteredCreatorCard from './featured-creators-card/featured-creators-card';
import { ICardListProps } from './card-list.interfaces';
import './card-list.scss';

const cardsType = {
  'items': <Card />,
  'top-creators': <CreatorCard />,
  'featured-creators': <FeauteredCreatorCard />,
  'news': <></>
}

export default function CardList({count, type, size}: ICardListProps) {
  const cards = new Array(count).fill(cardsType[type]);
  return (
    <div className={`card-list card-list_${size}`}>
      {
        cards.map((card) => card)
      }
    </div>
  )
}
