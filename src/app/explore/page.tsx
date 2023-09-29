import CardList from '@/components/card-list/card-list';
import './explore.scss';
import Filter from '@/components/filter/filter';
import Pagination from '@/components/pagination/pagination';

const items = [<CardList count={12} size='small' type='items' />, <CardList count={12} size='small' type='items' />];

export default function Explore() {
  return (
    <div className="page explore">
      <div className="wrapper">
        <Filter />
        <section className='explore__card-list'>
          <h2 className="block__title">
            <span>Explore</span>
            <span>Artworks</span>
          </h2>
          <Pagination items={items} />
        </section>
      </div>
    </div>
  )
};
