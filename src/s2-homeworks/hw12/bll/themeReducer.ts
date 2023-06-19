const initState:ThemesType = {
    id: 1
}


export type ThemesType = {
    id: number

}
export const themeReducer = (state:ThemesType = initState, action: changeThemeId): ThemesType => {
    switch (action.type) {

        case 'SET_THEME_ID':
            return {...state,id:action.id}
        default:
            return state
    }
}

export type changeThemeId = {
    type:'SET_THEME_ID',
    id:number
}

export const changeThemeId = (id: number): changeThemeId => ({type: 'SET_THEME_ID', id} as const)
