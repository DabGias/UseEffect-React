import { useState } from "react"
import Comp1 from "./components/Comp1"

function App() {
  const [comp, setComp] = useState(false)

  return(
    <>
      <h1>Aula 05</h1>
      {comp === true ? <Comp1/> : ""}
      <br/>
      <br/>
      <button onClick={() => {setComp(!comp)}}>
        {comp === true ? "Remover componente!" : "Criar componente!"}
      </button>
    </>
  )
}

export default App