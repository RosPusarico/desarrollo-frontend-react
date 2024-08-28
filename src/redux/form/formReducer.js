import { SET_FORM_DATA , CLEAR_FORM_DATA } from './formTypes';

const initialState = {
    formData: {
        username: '',
        email: '',
        
    },
    password: 'mod7ReactUSIP',
};

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FORM_DATA : {
            console.log("-------");
            if(action.payload.password !== state.password){
                return state;
            }
            
            return {
                ...state,
                formData: {
                    ...state.formData,
                    ...action.payload,                   
                }
            }
        }
        case CLEAR_FORM_DATA: {
            return {
                ...state,
                formData: {
                    username: '',
                    email: '',
                },
            };
        }

        default:
            return state;
    }
};

export default formReducer;