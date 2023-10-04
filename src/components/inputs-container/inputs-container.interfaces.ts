export interface IInputsContainerProps {
    inputs: IInput,
    className: string
}

export interface IInput {
    type: 'checkbox' | 'radio',
    name: string,
    labels: string[]
}