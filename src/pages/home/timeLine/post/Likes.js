import { useState } from "react";
import { useGlobal } from "../../../../context/globalContext";
import createLike from "../../../../services/api/createLike";
import deleteLike from "../../../../services/api/deleteLike";
import { Oval } from "react-loader-spinner";
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

export default function Likes({ likes, id }) {
  const { global } = useGlobal();
  const [like, setLike] = useState(haveALike(likes, global.user.id));
  const [loading, setLoading] = useState(false);

  return (
    <LikesContainer>
      {loading === false
        ? hanleLike(loading, setLoading, like, setLike, global, id, likes)
        : spinner}
      <h6>{likes?.length} likes</h6>
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
