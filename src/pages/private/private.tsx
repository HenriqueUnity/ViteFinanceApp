import { Link } from "react-router-dom";

export const Private = () => {
  return (
    <div>
      <h1>area privada</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, architecto
        fugit sint odio enim temporibus dolore, inventore quas sunt, perferendis
        doloremque autem eos magnam iste rerum minus at illum molestiae.
      </p>
      <Link to="/tips">Dicas</Link>
      <Link to="/finance">Minhas finanças</Link>
    </div>
  );
};
