import { useEffect, useState } from "react"


function Comp1() {
    const [valor, setValor] = useState(0)
    const [valor2, setValor2] = useState(0)
    const [valor3, setValor3] = useState(0)

    useEffect(() => {
        console.log("Sou chamado em todas as alterações do componente 1!")
    })

    useEffect(() => {
        console.log("Só sou executado quando o componente 1 é criado!")
    }, [])

    useEffect(() => {
        console.log("Só sou chamado quando o Valor ou Valor 2 forem alterados!")
    }, [valor, valor2])

    useEffect(() => {
        return () => console.log("Removeram o Comp1!")
    }, [])
    
    return(
        <>
            <h2>Componente 1</h2>
            <p>valor: {valor}</p>
            <button onClick={() => {setValor(valor + 1)}}>Aumentar Valor</button>

            <p>valor 2: {valor2}</p>
            <button onClick={() => {setValor2(valor2 + 1)}}>Aumentar valor 2</button>

            <p>valor 3: {valor3}</p>
            <button onClick={() => {setValor3(valor3 + 1)}}>Aumentar valor 3</button>
        </>
    )
}

export default Comp1