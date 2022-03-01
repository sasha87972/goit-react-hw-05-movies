import { Wrapper, Button, Message } from "./notExistingRoute.styled";
import { useNavigate } from "react-router-dom";
export default function NotExistingRoute() {
  const navigate = useNavigate();
  const prevPage = () => {
    navigate(-1);
  };
  return (
    <Wrapper>
      <Message>No such page!</Message>
      <Button type="button" onClick={prevPage}>
        Go back
      </Button>
    </Wrapper>
  );
}
