import styles from "./Task.module.css"
import DeleteIcon from '@mui/icons-material/Delete';

const Task = ({id,descricao,concluida, setDbTask}) => {

    const marcarTarefaFeita = (id) => {
        let dados = JSON.parse(localStorage.getItem("tarefas"));
        for(let i = 0; i < dados.length  ; i++){
            if(dados[i].id === id){
                dados[i].concluida = true    
            }
            
        }
        
        localStorage.setItem("tarefas", JSON.stringify(dados))
        setDbTask(dados)
    }

    const removerTarefa = (id) => {
        let dados = JSON.parse(localStorage.getItem("tarefas"));
        const novosDados = dados.filter((dado) => dado.id !== id )

        localStorage.setItem("tarefas", JSON.stringify(novosDados))
        setDbTask(novosDados)

    }

  return (
    <div className={styles.containerTask} >
        {concluida === true && <input type="radio" checked  onClick={() => marcarTarefaFeita(id) }/> }
        {concluida === false && <input type="radio"  onClick={() => marcarTarefaFeita(id) }/> }
        {concluida === true && <span className={styles.estiloConcluida} > {descricao}  {concluida} </span> }
        {concluida === false && <span className={styles.estiloAndamento} > {descricao}  {concluida} </span> }
        <button className={styles.botao} onClick={() => removerTarefa(id)} >
            <DeleteIcon fontSize="small" />
        </button>
    </div>
  )
}

export default Task