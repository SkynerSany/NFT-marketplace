import CardList from '@/components/card-list/card-list';
import './explore.scss';
import Filter from '@/components/filter/filter';

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
          <CardList count={12} size='small' type='items' />
        </section>
      </div>
    </div>
  )
};
