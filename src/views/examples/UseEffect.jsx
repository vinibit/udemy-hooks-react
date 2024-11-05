import React, {useEffect, useState} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calculateFactorial(num) {
    if (num < 0) return -1
    if (num === 0) return 1
    return calculateFactorial(num - 1) * num
}

const UseEffect = (props) => {

    const [number, setNumber] = useState(1)
    const [factorial, setFactorial] = useState(1)
    const [even, setEven] = useState(false)

    useEffect(() => setFactorial(calculateFactorial(number)), [number])
    useEffect(() => setEven(number % 2 === 0), [number])        

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title="Exercício 01" />
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">
                        {factorial === -1 ? 'Não existe' : factorial}
                    </span>
                </div>
                <input type="number" 
                    className="input" 
                    value={number} 
                    onChange={e => setNumber(e.target.value)} />
            </div>

            <SectionTitle title="Exercício 02" />
            <div className="center">
                <div>
                    <span className='text'>Número é </span>
                    <span className='text red'>
                        {even ? 'par' : 'ímpar'}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default UseEffect
