import { type } from '@testing-library/user-event/dist/type';
import { SET_FORM_DATA , CLEAR_FORM_DATA} from './formTypes';

export const saveFormData = (formData) => {
    return {
        type: SET_FORM_DATA,
        payload: formData,
    };
};

export const clearFormData=() =>({
    type: CLEAR_FORM_DATA
});
