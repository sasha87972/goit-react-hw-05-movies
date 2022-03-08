import { Wrapper, Button, Message } from "./notExistingRoute.styled";
import { useNavigate } from "react-router-dom";
export default function NotExistingRoute() {
  const navigate = useNavigate();
  const mainPage = () => {
    navigate("/");
  };
  return (
    <Wrapper>
      <Message>No such page!</Message>
      <Button type="button" onClick={mainPage}>
        Go to main
      </Button>
    </Wrapper>
  );
}
