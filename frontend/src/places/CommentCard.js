import { useContext } from "react";
import { CurrentUser } from "../contexts/CurrentUser";

function CommentCard({ comment, onDelete }) {
  const { currentUser } = useContext(CurrentUser);

  let deleteButton = null;

  if (currentUser?.userId === comment.authorId) {
    deleteButton = (
      <button className="btn btn-danger" onClick={onDelete}>
        Delete Comment
      </button>
    );
  }

  return (
    <div className="border col-sm-4">
      <h2 className="placedetailinfo2">
        {comment.rant ? "Rant! 😡" : "Rave! 😻"}
      </h2>
      <h4 className="placedetaildes">{comment.content}</h4>
      <h3 className="placedetaildes">
        <strong>
          - {comment.author.firstName} {comment.author.lastName}
        </strong>
      </h3>
      <h4 className="placedetaildes">Rating: {comment.stars}</h4>
      {deleteButton}
    </div>
  );
}

export default CommentCard;
