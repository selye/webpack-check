import { Link, useNavigate, useParams } from "react-router-dom";

export const Contact = () => {
  const { editid } = useParams();
  const navigate = useNavigate();
  console.log(editid);

  const handleChange = () => {
    navigate("/about", {
      state: {
        id: 12345,
      },
    });
  };

  return (
    <div>
      contact: {editid} <br />
      <button onClick={handleChange}>button</button>
      <Link to={"edit"}>edit</Link>
    </div>
  );
};
