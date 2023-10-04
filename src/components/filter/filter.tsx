import InputsContainer from '../inputs-container/inputs-container';
import { IInput } from '../inputs-container/inputs-container.interfaces';
import './filter.scss';

const INPUTS_CHECKBOX_CATEGORIES: IInput = {
  type: 'checkbox',
  name: 'categories',
  labels: ['General', 'Illustration', 'Gaming', 'Featured'],
};

const INPUTS_RADIO_BY: IInput = {
  type: 'radio',
  name: 'by',
  labels: ['Featured', 'Illustration', 'Gaming'],
};

const FILTER_LIST = [
  {
    name: 'Categories',
    inputsList: INPUTS_CHECKBOX_CATEGORIES,
  },
  {
    name: 'Order By',
    inputsList: INPUTS_RADIO_BY,
  },
];

export default function Filter() {
  return (
    <section className="filter">
      <h3 className="filter__title">Filter</h3>
      <ul className="filter__list">
        {
          FILTER_LIST.map(({ name, inputsList }) => (
            <li className="filter__type">
              <p>{name}</p>
              <InputsContainer inputs={inputsList} className='filter__name-list'/>
            </li>
          ))
        }
      </ul>
    </section>
  );
}
