const initState = {
    themeId: 1,
}
 export type initStateType ={
    themeId: number
}
export const themeReducer = (state = initState, action: changeThemeIdType): initStateType => { // fix any
    debugger
    switch (action.type) {
        // дописать
        case "SET_THEME_ID":
            return {...state, themeId: action.id}
        default:
            return state
    }
}
type changeThemeIdType= {
    type: 'SET_THEME_ID',
    id: number
}
export const changeThemeId = (id: number): changeThemeIdType => ({ type: 'SET_THEME_ID', id }) as const// fix any
