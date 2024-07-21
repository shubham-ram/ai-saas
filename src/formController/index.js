import CheckboxController from './CheckboxController';
import InputController from './InputController'
import PasswordController from './PasswordController'

const MAPPING = {
    text: InputController,
    password: PasswordController,
    checkbox: CheckboxController
}

const getField = (type = 'text') => {
    const element = MAPPING[type];

    if (!element) {
        // TODO remove this, and throw an error
        return <div>No element found</div>;
    }

    return element;
};

export default getField;