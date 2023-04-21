import React from "react";
import { truncateString } from "../lib/lib";
import PrimaryButton from "../ui/PrimaryButton";
import { Link } from "react-router-dom";

const PostCard = (props) => {
  const {
    post: { body, id, title, userId },
  } = props;
  return (
    <div className="bg-white mb-5 last-mb-0 rounded-lg py-3 px-5 flex">
      <div>
        <Link to={`${id}`}>
          <PrimaryButton outline className="mr-3">
            #{id}
          </PrimaryButton>
        </Link>
      </div>
      <div>
        <h6>{title}</h6>
        <p className="text-sm">{truncateString(body)}</p>
      </div>
    </div>
  );
};

export default PostCard;
