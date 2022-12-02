import bin from "../../assets/bin.png";
import {RemoveButton} from "./styled"

function SegundoComponente (props){

    const removeTarefa = (tarefa) => {
        const listaFiltrada = props.lista.filter((item) => item !== tarefa);
        props.setLista(listaFiltrada);

        const listaExcluida = props.lista.filter((item)=> item === tarefa);
        const itemTerminado=listaExcluida[0]
        const novaListaExcluida=[...props.tarefasExcluidas,itemTerminado]
        props.setTarefasExcluidas(novaListaExcluida)
      };

    return(
        <RemoveButton onClick={() => removeTarefa(props.tarefa)}>
        <img src={bin} alt="" width="16px" />
      </RemoveButton>
    )

}

export default SegundoComponente