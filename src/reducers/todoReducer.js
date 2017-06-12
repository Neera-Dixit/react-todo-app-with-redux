//Todoreducer which manages user actions like ADD_ITEM,CHANGEITEM_STATUS and REMOVE_ITEM
const todo = (state = {}, action) => {

    switch(action.type) {
        case 'ADD_ITEM' : {
            return {
                item : action.item,
                status: false,
                itemId : action.itemId
            }
        }

        case 'CHANGEITEM_STATUS' : {
            if(state.itemId !== action.itemId){
                return state;
            }

            return {
                ...state,
                status : !state.status
            };
        }

        case 'REMOVE_ITEM' : {
           return state.itemId !== action.itemId
        }

        default : return state;
    }
};

//todo reducer is a pure function
const todos = (state = [], action) => {

    switch(action.type) {
        case 'ADD_ITEM' : {
            return [...state,todo(undefined,action)];
            break;
        }

        case 'CHANGEITEM_STATUS' : {
            let data = state.map((item)=>{
               return  todo(item,action);
            });
            return data;
            break;
        }

        case 'REMOVE_ITEM' : {
            return state.filter((item)=>todo(item,action));
            break;
        }

        default : return state;
    }
};

export default todos;