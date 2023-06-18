const Post = (props) => {
  return (
    <>
      <tr>
        <td>{props.post.id}</td>
        <td>{props.post.title}</td>
        <td>{props.post.content}</td>
        <td>
          <button
            className="btn btn-warning me-2"
            onClick={() => props.editPost(props.post.id)}
          >
            <i className="fa-solid fa-pen-to-square"></i> Edit
          </button>
          <button
            className="btn btn-danger"
            onClick={() => props.deletePost(props.post.id)}
          >
            <i className="fa-solid fa-trash"></i> Delete
          </button>
        </td>
      </tr>
    </>
  );
};
export default Post;
