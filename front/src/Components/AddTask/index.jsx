import { useRef } from "react"
import { useState } from "react"
import styles from "./AddTask.module.css"
import styled from "styled-components";
import ControlPointIcon from '@mui/icons-material/ControlPoint';





const AddTask = ({setDbTask}) => {

    const [tarefa, setTarefa] = useState("")

    const foco = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        if(tarefa.length === 0 || tarefa.length < 5){
            alert("A descrição deve conter pelo menos 5 caracteres")
            foco.current.focus()
            return
        }
        let dados = JSON.parse(localStorage.getItem("tarefas"));
        if(dados === null){
            dados = []
        }
         console.log(dados)
        const dado = {
            id: dados.length, 
            concluida: false,
            descricao: tarefa
        }

         
        dados.push(dado)
        
        localStorage.setItem("tarefas", JSON.stringify(dados))
        //setDbTask(dados)

        setDbTask(dados)

        console.log(dado)
        setTarefa("")
        foco.current.focus()

    }

    //Estilos

    const Botao = styled.button`
        height: 1.8rem;
        margin-left: .5rem ;
        font-size: 1rem;
        background-color: white;
        color: #00FFFF;
        border-radius: 8px;
        border: none;
        padding:  auto 0;
        border: 3px solid #00FFFF;
    `

    return (
    
        <form onSubmit={handleSubmit} >
            <input className={styles.entrada} width="500px" type="text" value={tarefa} onChange={(e) => setTarefa(e.target.value) } ref={foco} />
            <Botao  type="submit" > <ControlPointIcon fontSize="small" /> </Botao>
        </form> 
    
  )
}

export default AddTask