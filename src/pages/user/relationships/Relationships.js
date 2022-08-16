import { useState } from "react";
import { useGlobal } from "../../../context/globalContext";
import Button from "../../../components/button/Button";
import { ThreeDots } from "react-loader-spinner";
import createRelationships from "../../../services/api/createRelationships";
import unfollow from "../../../services/api/unfollow";

const spinner = <ThreeDots height="60" width="60" color="#ac0000" />;

export default function Relationships({ id }) {
  const { global } = useGlobal();
  const [loading, setLoading] = useState(false);
  const [follow, setFollow] = useState(
    global.users.filter(user => user.id == id)[0].follow
  );

  console.log(global.users);

  function send() {
    if (loading === true) return;

    setLoading(true);

    if (follow === true) {
      unfollow(global, id, setLoading, setFollow);
    } else {
      createRelationships(global, id, setLoading, setFollow);
    }
  }

  return (
    <span onClick={send}>
      <Button
        name={follow ? "Unfollow" : "Follow"}
        font='normal 700 14px "Lato", sans-serif'
        backgroundColor={follow ? "#ffffff" : "#1877F2"}
        color={follow ? "#1877F2" : "#ffffff"}
        height="31px"
        width="10.79vw"
        loading={loading}
        nameLoading={spinner}
      />
    </span>
  );
}
