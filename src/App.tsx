import { Draggable, DragDropContext, Droppable } from "@hello-pangea/dnd";

function App() {
  const onDragEnd = () => {};
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <span>hello</span>
    </DragDropContext>
  );
}

export default App;
