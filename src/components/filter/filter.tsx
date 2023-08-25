import './filter.scss';

export default function Filter() {
  return (
    <section className="filter">
        <h3 className="filter__title">Filter</h3>
        <ul className="filter__list">
            <li className="filter__type">
                <p>Categories</p>
                <ul className="filter__name-list">
                    <li className="filter__name">
                        Featured
                    </li>
                </ul>
            </li>
        </ul>
    </section>
  )
}
