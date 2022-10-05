import Button from "../components/Button";
import Editable from "../components/Editable";

function Editor() {
  return (
    <div className="p-4">
      <header className="mb-4 text-right">
        <Button variant="primary">Publish</Button>
      </header>

      <Editable>
        <div className="container h-40 mx-auto bg-red-100" />
      </Editable>

      <Editable>
        <div className="container h-40 mx-auto bg-green-100" />
      </Editable>

      <Editable>
        <div className="container h-40 mx-auto bg-yellow-100" />
      </Editable>
    </div>
  );
}

export default Editor;
