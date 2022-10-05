import Button from "../components/Button";
import Container from "../components/Container";
import Editable from "../components/Editable";

function Editor() {
  return (
    <div className="p-4">
      <header className="mb-4 text-right">
        <Button variant="primary">Publish</Button>
      </header>

      <Editable>
        <Container className="mx-auto">First container</Container>
      </Editable>

      <Editable as={Container} className="mx-auto">
        Second container
      </Editable>

      <Editable as={Container} className="flex gap-4 mx-auto">
        <span>Third container</span>
        <span>→</span>
        <Editable>Edit me</Editable>
      </Editable>
    </div>
  );
}

export default Editor;
