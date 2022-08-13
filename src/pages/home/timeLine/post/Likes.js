import { useState } from "react";
import { useGlobal } from "../../../../context/globalContext";
import createLike from "../../../../services/api/createLike";
import deleteLike from "../../../../services/api/deleteLike";
import { Oval } from "react-loader-spinner";
import ReactTooltip from "react-tooltip";
import { Heart, RegHeart, LikesContainer } from "./styles";

const spinner = (
  <Oval
    height={30}
    width={30}
    color="#ac0000"
    secondaryColor="yellow"
    strokeWidth={2}
    strokeWidthSecondary={2}
  />
);

export default function Likes({ likes, id, index }) {
  const { global } = useGlobal();
  const [like, setLike] = useState(haveALike(likes, global.user.id));
  const [loading, setLoading] = useState(false);

  return (
    <LikesContainer>
      {loading === false
        ? hanleLike(loading, setLoading, like, setLike, global, id, likes)
        : spinner}
      <h6 data-tip data-for={`${index}`}>
        {likes?.length} likes
      </h6>
      <ReactTooltip id={`${index}`} className="tooltip">
        <h5>{descritionLike(likes, like)}</h5>
      </ReactTooltip>
    </LikesContainer>
  );
}

const haveALike = (arr, id) => arr?.some(l => (l.id = id));

const hanleLike = (loading, setLoading, like, setLike, global, id, likes) =>
  like === false ? (
    <RegHeart
      onClick={() =>
        likeOrDislike(loading, setLoading, like, setLike, global, id, likes)
      }
    />
  ) : (
    <Heart
      onClick={() =>
        likeOrDislike(loading, setLoading, like, setLike, global, id, likes)
      }
    />
  );

function likeOrDislike(loading, setLoading, like, setLike, global, id, likes) {
  if (loading === true) return;

  setLoading(true);

  if (like === false) {
    createLike(global, id, setLike, setLoading, likes);
  } else {
    deleteLike(global, id, setLike, setLoading, likes);
  }
}

function descritionLike(arr, like) {
  let text = "";

  for (let i = 0; i < arr.length; i++) {
    if (like === true) {
      if (i === 0) {
        text += "Você";
        continue;
      }

      if (arr.length === 2) {
        text += ` and ${arr[0].username}`;
        break;
      }

      text = `, ${arr[0].username} and other ${arr.length - 2} people`;
      break;
    } else {
      if (arr.length === 1) {
        text = `${arr[0].username}`;
        break;
      }

      if (arr.length === 2) {
        text = `${arr[0].username} and ${arr[1].username}`;
        break;
      }

      text = `${arr[0].username}, ${arr[1].username} and other ${
        arr.length - 2
      } people`;
      break;
    }
  }

  return text;
}
