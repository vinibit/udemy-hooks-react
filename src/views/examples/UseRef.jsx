import React, { useState, useEffect, useRef } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseRef = (props) => {

    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')
    
    const countRef = useRef(0)
    const inputRef1 = useRef(null)
    const inputRef2 = useRef(null)
    
    const merge = (s1, s2) => {        
        return [...s1]
            .map((c, i) => `${c}${s2[i] || ''}`)
            .join('')
        
    }

    useEffect(() => { 
        countRef.current++ 
        inputRef2.current.focus()
    }, [value1])

    useEffect(() => {
        countRef.current++ 
        inputRef1.current.focus()
    }, [value2])   

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />

            <SectionTitle title="Exercício 01" />
            <div className="center">
                <div>
                    <span className="text">Valor: </span>
                    <span className="text">{merge(value1, value2)} [</span>
                    <span className="text red">{countRef.current}</span>                    
                    <span className="text">]</span>
                </div>
                <input type="text" className="input"
                    ref={inputRef1} 
                    value={value1} onChange={e => setValue1(e.target.value)} />
            </div>
            
            <SectionTitle title="Exercício 02" />
            <div className="center">
                <div>
                    <input type="text" className="input"
                        ref={inputRef2} 
                        value={value2} onChange={e => setValue2(e.target.value)} />
                </div>
            </div>
        </div>
    )
}

export default UseRef