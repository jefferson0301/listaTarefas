import { useEffect, useState } from "react"
//import tarefas from "./assets/dados.js"
import AddTask from "./Components/AddTask/index.jsx"
import Task from "./Components/Task/index.jsx";
import TaskIcon from '@mui/icons-material/Task';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import styled from "styled-components";
import './index.css';


function App() {

  

  let dados = JSON.parse(localStorage.getItem("tarefas")) || []
  

  const [dbTask, setDbTask] = useState([])
  const [concluida, setConcluida] = useState(false)
  const [loading, setLoading] = useState(true)
  
  console.log(dbTask)

  useEffect(() => {

    setTimeout(() => {
      setDbTask(dados)
      console.log(dbTask)
      console.log(dados)
      setLoading(false)
    }, 1000)
    
  }, [setDbTask])

 

  //estilizações
 
  const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: .5rem;
    padding: 2rem 0 ;
    width: 100%;
    height: 100%;
    background-color: #DCDCDC;
  `
  const ContainerConcluidas = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    width: 450px;
  `
  const Botao = styled.button`
    font-size: 1.2rem;
    background-color: white;
    color: #00FFFF;
    border-radius: 8px;
    border: none;
    height: 1.5rem;
    padding: 0 .5rem;
    border: 3px solid #00FFFF;
  `

  const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
  `

  return (
    <Container>
      
      <AddTask setDbTask={setDbTask} />
      <ContainerConcluidas>
        <Botao onClick={() => setConcluida(true)} >Concluidas</Botao>
        <Botao onClick={() => setConcluida(false)} >Andamento</Botao>
      </ContainerConcluidas>
      
      {loading === true && <p>Caregando ... {<HourglassTopIcon  fontSize="small" />}  </p> }
      {loading === false && 
      <>
        {dbTask.length === 0 && <Div> <p>Insira dados</p> <TaskIcon color="primary" /> </Div> }
        {dbTask.length !== 0 && <>

        {dbTask.map((task, index) => (
          <div key={index} >
            {task.concluida === concluida &&  <Task setDbTask={setDbTask} id={task.id} descricao={task.descricao} concluida={task.concluida} /> }
          </div>
        ))  }
        </> }
      </> }
      
      
    </Container>
   
  )
}

export default App
