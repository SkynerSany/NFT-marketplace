export interface IInputsContainerProps {
    inputs: IInput
}

export interface IInput {
    type: 'checkbox' | 'radio',
    name: string,
    labels: string[]
}