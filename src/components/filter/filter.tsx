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
                        <label htmlFor="1"><input type="radio" name="" id="1" />Featured</label>
                    </li>
                    <li className="filter__name">
                        <label htmlFor="2"><input type="radio" name="" id="2" />Illustration</label>
                    </li>
                    <li className="filter__name">
                        <label htmlFor="3"><input type="radio" name="" id="3" />Gaming</label>
                    </li>
                    <li className="filter__name">
                        <label htmlFor="4"><input type="radio" name="" id="4" />Featured</label>
                    </li>
                </ul>
            </li>
            <li className="filter__type">
                <p>Order By</p>
                <ul className="filter__name-list">
                    <li className="filter__name">
                        <label htmlFor="1"><input type="radio" name="" id="1" />Featured</label>
                    </li>
                    <li className="filter__name">
                        <label htmlFor="2"><input type="radio" name="" id="2" />Illustration</label>
                    </li>
                    <li className="filter__name">
                        <label htmlFor="3"><input type="radio" name="" id="3" />Gaming</label>
                    </li>
                    <li className="filter__name">
                        <label htmlFor="4"><input type="radio" name="" id="4" />Featured</label>
                    </li>
                </ul>
            </li>
        </ul>
    </section>
  )
}
