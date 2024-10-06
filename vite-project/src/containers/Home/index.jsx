import { useState } from "react";
import Button from "../../components/button";
import { Container, ContainerItens, Input, TodoList, ListItem } from "./styles";
import { v4 as uuidv4 } from "uuid";
import Verify from "../../assets/verificar.png";
import Delete from "../../assets/excluir.png";

function Home() {
  const [list, setList] = useState([{ id: uuidv4(), task: "Nada" }]);
  const [task, setTask] = useState("");

  function getInput(e) {
    setTask(e.target.value);
  }
  function pushTask() {
    setList([...list, { id: uuidv4(), task, finished: false }]);
  }

  function deleteTask(id) {
    const newList = list.filter((item) => item.id !== id);

    setList(newList);
  }

  function markTask(id) {
    const newList = list.map((item) =>
      item.id === id ? { ...item, finished: !item.finished } : item
    );
    setList(newList);
  }
  return (
    <Container>
      <ContainerItens>
        <Input
          onChange={getInput}
          type="text"
          placeholder="O que tenho q fazer..."
        />
        <Button onClick={pushTask}>Adicionar</Button>
        <TodoList>
          {list.map((item) => (
            <ListItem key={item.id} isFinished={item.finished}>
              <img src={Verify} onClick={() => markTask(item.id)} />
              <li>{item.task}</li>
              <img src={Delete} onClick={() => deleteTask(item.id)} />
            </ListItem>
          ))}
        </TodoList>
      </ContainerItens>
    </Container>
  );
}

export default Home;
