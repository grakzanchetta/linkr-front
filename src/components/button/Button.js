import { Container } from "./styles";
import { ThreeDots } from "react-loader-spinner";

export default function Button(props) {
  const { width = "29.79vw", height = "60px", loading = false } = props;
  const { backgroundColor = "#1877F2", borderRadius = "6px", name } = props;
  const { font = "normal 700 27px 'Oswald', sans-serif" } = props;

  function loadingButton() {
    if (loading === false) return { opacity: 1, name };

    return {
      opacity: 0.7,
      name: <ThreeDots color="#FFFFFF" height={20} width={99} />
    };
  }

  return (
    <Container
      type="submit"
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      opacity={loadingButton().opacity}
      borderRadius={borderRadius}
      font={font}
    >
      {loadingButton().name}
    </Container>
  );
}
