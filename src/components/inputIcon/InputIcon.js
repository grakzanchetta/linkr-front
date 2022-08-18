import { InputBox, Plane } from "./styles";

export default function InputIcon(props) {
  const { width = "48.9vw", height = "60px" } = props;
  const { value, onChange, loading = false } = props;

  function loadingInput() {
    if (loading === false) return { backGround: "#252525", disabled: false };

    return { backGround: "#F2F2F2", disabled: true };
  }

  return (
    <InputBox
      width={width}
      height={height}
      backGround={loadingInput().backGround}
    >
      <input
        type="text"
        placeholder="write a comment..."
        required
        disabled={loadingInput().disabled}
        value={value}
        onChange={e => onChange(e.target.value)}
      />
      <button type="submit">
        <Plane />
      </button>
    </InputBox>
  );
}
