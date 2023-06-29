import CreatorCard from './creator-card/creator-card';
import { ICreatorListProps } from './creator-list.interfaces';
import './creator-list.scss';

export default function CreatorList({ count }: ICreatorListProps) {
  const cards = new Array(count).fill(<CreatorCard />);
  return (
    <div className='creator-list'>
      {
        cards.map((card) => card)
      }
    </div>
  )
}
