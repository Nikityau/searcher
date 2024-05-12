import produce from "immer";

const ustate = {
    data: {
        username: 'user',
        role: 'user'
    }
}


export const userReducer = (state = ustate, action) => {

    switch (action.type) {
        case "user/login":
            return produce(state, draft => {
                draft.data = {
                    username: action.payload.username,
                    role: action.payload.role,
                }

                return draft
            })
        case "user/logout":
            return produce(state, draft => {
                draft.data = null

                return draft
            })
    }

    return state
}