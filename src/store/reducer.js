const initialState = {
    counter : 0
}
const reducer = (state = initialState, action) => {
    const newState = {...state};

    switch(action.type)
    {
        case "INCREMENT" :
        newState.counter++;
        break;
        case "DECREMENT" :
        newState.counter--;
        break;
    }

    return newState;
}

export default reducer