import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

import { initialState, allReducers } from '../../store'
import { numberAdd2, login } from '../../store/actions'

const UseReducer = props => {

    const [state, dispatch] = useReducer(allReducers, initialState)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <SectionTitle title="Exemplo com Reducer" />
            <div className="center">
                {state.user ? 
                    <span className="text">{state.user.name}</span> 
                    : <span className="text">Sem usuário</span>}
                <span className="text">{state.number}</span>
                <div>
                    <button className="btn"
                        onClick={() => login(dispatch, 'João')} >Login</button>
                    <button className="btn"
                        onClick={() => numberAdd2(dispatch, 2)}>+2</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
