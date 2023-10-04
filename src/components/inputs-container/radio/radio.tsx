import './radio.scss';
import { IRadio } from './radio.interfaces';

export default function Radio({ label, name, handleChange, isChecked }: IRadio) {
  return (
    <label className='radio-label'>
      <input
        type="radio"
        className='radio__input'
        name={name}
        value={label}
        onChange={handleChange}
        checked={isChecked}
      />
      <div
        className={`radio ${isChecked ? "radio--active" : ""}`}
        aria-hidden="true"
      ><div></div></div>
      {
        label
      }
    </label>
  );
}