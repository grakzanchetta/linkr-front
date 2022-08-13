import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobal } from "../../../context/globalContext";
import { Container, Input, UserContainer, Box } from "./styles";
import search from "../../../assets/images/Vector.svg";

export default function Form() {
  const [value, setValue] = useState("");
  const [filter, setFilter] = useState({ arr: [] });
  const { global } = useGlobal();
  const inputRef = useRef(null);
  const onMouse = useRef(false);
  const navigate = useNavigate();

  if (document.activeElement === inputRef.current) {
    filter.arr =
      value.length === 0
        ? global.users
        : global.users?.filter(({ username }) => username.includes(value));
  }

  function blur(id) {
    if (onMouse.current === true && id === null) return;

    if (id !== null) {
      setFilter({ ...filter, arr: [] });

      return navigate(`/user/${id}`);
    }

    setFilter({ ...filter, arr: [] });
  }

  return (
    <Container>
      <Input
        inputRef={inputRef}
        onFocus={() => setFilter({ ...filter, arr: global.users })}
        onBlur={() => blur(null)}
        placeholder="Search for people"
        minLength={3}
        debounceTimeout={300}
        onChange={e => setValue(e.target.value)}
        style={{ backgroundImage: `url(${search})` }}
      />
      <Box
        onMouseEnter={() => (onMouse.current = true)}
        onMouseLeave={() => (onMouse.current = false)}
      >
        {filter.arr?.map(({ id, pictureUrl, username }, index) => (
          <UserContainer onClick={() => blur(id)} key={index}>
            <img src={pictureUrl} alt={username} />
            <span>{username}</span>
          </UserContainer>
        ))}
      </Box>
    </Container>
  );
}