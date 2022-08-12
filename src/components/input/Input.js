import { Container } from "./styles";

export default function Input(props) {
  const { type = "text", width = "29.79vw", height = "65px" } = props;
  const { loading = false, minLength = "", maxLength = "" } = props;
  const { border = "none", boxShadow = "none", borderRadius = "6px" } = props;
  const { backGround = "#ffffff", color = "#9F9F9F", required = true } = props;
  const { padding = "none" } = props;
  const { reference = null, eventKey = null } = props;
  const { placeholder, value, onChange } = props;

  function loadingInput() {
    if (loading === false) return { backGround, disabled: false };

    return { backGround: "#F2F2F2", disabled: true };
  }

  return (
    <Container
      ref={reference}
      onKeyDown={eventKey}
      height={height}
      width={width}
      padding={padding}
      backGround={loadingInput().backGround}
      type={type}
      required={required}
      minLength={minLength}
      maxLength={maxLength}
      border={border}
      color={color}
      boxShadow={boxShadow}
      borderRadius={borderRadius}
      disabled={loadingInput().disabled}
      placeholder={placeholder}
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  );
}
