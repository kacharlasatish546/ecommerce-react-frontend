export default function (state = [], action) {
    console.log('I am in reducer!!!', action.type);
    switch (action.type) {
        case 'ALL_PRODUCTS':
            console.log("All Products reducer", action.payload.data)
            return action.payload.data;
        case 'CURRENT_PRODUCT':
            console.log("CURRENT_PRODUCT reducer", action.payload.data)
            return action.payload.data;
        case 'ADD_PRODUCT':
            console.log("ADD_PRODUCT reducer", action.payload.data)
            return "";
    }

    return state;


}