import Card from './card/card';
import { ICardListProps } from './card-list.interfaces';
import './card-list.scss';

export default function CardList({count}: ICardListProps) {
  const cards = new Array(count).fill(<Card />);
  return (
    <div className='card-list'>
      {
        cards.map((card) => card)
      }
    </div>
  )
}
