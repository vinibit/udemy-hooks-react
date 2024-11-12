import React from 'react'
import PageTitle from 'components/layout/PageTitle'
import SectionTitle from 'components/layout/SectionTitle'
import { useCounter } from 'hooks/useCounter'
import { useFetch } from 'hooks/useFetch'

const url = 'http://files.cod3r.com.br/curso-react/estados.json'

const UseCustom = (props) => {

    const {count, increment, decrement, reset} = useCounter(0)

    // fetch('http://files.cod3r.com.br/curso-react/estados.json')
    //     .then(res => res.json())
    //     .then(json => console.log(json)) 
    const res = useFetch(url, 'get')

    return (
        <div className="UseCustom">
            <PageTitle
                title="Seu Hook"
                subtitle="Vamos aprender como criar o nosso próprio Hook!"
            />

            <SectionTitle title="Exercício 01" />
            <div className="center">
                <span className="text">{count}</span>
                <div>
                    <button className="btn"
                        onClick={() => increment()}>+</button>
                    <button className="btn"
                        onClick={() => decrement()}>-</button>
                    <button className="btn"
                        onClick={() => reset()}>Reset</button>
                </div>
            </div>

            <SectionTitle title="Exercício 02" />
            <div className="left">
                <ul style={{ 
                        listStyleType: 'none',
                        padding: 0, 
                    }}>
                    {
                        !res.loading ? 
                            res.data.map((state, index) => <li key={index}>{state.nome} - {state.sigla}</li>) 
                            : false
                    }
                </ul>
            </div>
        </div>
    )
}

export default UseCustom
