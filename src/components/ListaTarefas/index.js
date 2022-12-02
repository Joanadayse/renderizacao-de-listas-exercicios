import { useState } from "react";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton,
  LinhaHorizontal,
  Remove
} from "./styled";

import SegundoComponente from "../SegundoComponente";

export function ListaTarefas() {
  const [lista, setLista] = useState(["Fazer exercícios", "Estudar React"]);
  const [novaTarefa, setNovaTarefa] = useState("");
  const [tarefasExcluidas, setTarefasExcluidas]= useState([])

  const onChangeTarefa = (event) => {
    setNovaTarefa(event.target.value);
  };

  const adicionaTarefa = (event) => {
    event.preventDefault()
    const novaLista = [...lista, novaTarefa];
    setLista(novaLista);
    setNovaTarefa("");
    
  };

  // const precionaEnter =(event)=>{
  //   if(event.key==="Enter"){
  //     event.preventDefault()

  //   }
  // }



  return (
    <ListaTarefasContainer>
      {/* <InputContainer onSubmit={(event)=>adicionaTarefa(event)}> */}
      <InputContainer onSubmit={(event)=>adicionaTarefa(event)}>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChange={onChangeTarefa}
        />
        {/* <AddTaskButton onClick={(event)=>precionaEnter(event)}>Adicionar</AddTaskButton> */}
        <AddTaskButton type="submit">Adicionar</AddTaskButton>
      </InputContainer>
      <ListaContainer>
        <ul>
          {lista.map((tarefa, index) => {
            return (
              <Tarefa key={index}>
                <p>{tarefa}</p>
               <SegundoComponente lista={lista} setLista={setLista} tarefa={tarefa} tarefasExcluidas={tarefasExcluidas} setTarefasExcluidas={setTarefasExcluidas}/>
              </Tarefa>
            );
          })}
        </ul>
      </ListaContainer>
      <LinhaHorizontal/>
      {tarefasExcluidas.map((item , index)=>{
        return(
          // <div key={index} >
          // <p color="red">{item }</p>
          // </div>
          <Remove>
            <p>{item}</p>
          </Remove>
        )
      })}
    </ListaTarefasContainer>
  );
}
