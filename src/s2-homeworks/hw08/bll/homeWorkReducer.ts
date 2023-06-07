import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any


    switch (action.type) {

        case 'sort': { // by name
            const sortArray = ((a: UserType, b: UserType) => a.name > b.name ? 1 : -1)
            const sortArrayReverse = ((a: UserType, b: UserType) => a.name > b.name ? -1 : 1)


            switch (action.payload) {

                case 'up':
                    return [...state].sort(sortArray)

                case 'down':
                    return [...state].sort(sortArrayReverse)


                default:
                    return state
            }

            // need to fix
        }
        case 'check': {

            return state.filter(el => el.age >= action.payload)// need to fix
        }

        default:
            return state
    }
}
