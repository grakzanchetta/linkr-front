export default function logout(global, navigate) {
  localStorage.removeItem("token");
  global.token = null;
  global.user = null;
  global.users = null;
  navigate("/");
}
