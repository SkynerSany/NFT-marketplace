export interface IRadio {
    label: string,
    name: string,
    isChecked: boolean,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
}