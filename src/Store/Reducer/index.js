const INITIAL_STATE = {
    users: [{
        name: "Nazim",
        name2:"Ali"
    }
    ]
}

export default (state = INITIAL_STATE, action) => {
    console.log(action)
    switch (action.type) {
        case "SETDATA":
            return ({
                ...state,
                users: [...state.users, action.payload]
            })
    }
    return state;
}