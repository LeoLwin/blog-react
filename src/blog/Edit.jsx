const Edit = (props) => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-6 ">
          <h1>Edit Post</h1>
          <input
            class="form-control"
            defaultValue={props.post.id}
            type="text"
            placeholder="title"
            onChange={props.savePostTitleToState}
          />
          <br />
          <br />
          <textarea
            class="form-control"
            placeholder="contents"
            defaultValue={props.post.content}
            onChange={props.savePostContentToState}
          ></textarea>
          <br />
          <br />
          <button class="btn btn-secondary me-2" onClick={props.cancel}>
            <i class="fa-solid fa-xmark"></i>
            Cancel
          </button>
          <button class="btn btn-success " onClick={props.updatePost}>
            {" "}
            <i class="fa-solid fa-floppy-disk"> </i> Save
          </button>
        </div>
      </div>
    </div>
  );
};
export default Edit;
