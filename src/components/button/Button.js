import { Container } from "./styles";

export default function Button(props) {
  const { width = "29.79vw", height = "60px", loading = false } = props;
  const { backgroundColor = "#1877F2", borderRadius = "6px", name } = props;
  const { font = "normal 700 27px 'Oswald', sans-serif" } = props;
  const { nameLoading } = props;

  function loadingButton() {
    if (loading === false) return { opacity: 1, name };

    return {
      opacity: 0.7,
      name: nameLoading
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
