const Create = (props) => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-6 ">
          <h1>Create New Post</h1>
          <input
            class="form-control"
            ref={props.getTitle}
            onChange={props.savePostTitleToState}
            type="text"
            placeholder="title"
          />
          <br />
          <textarea
            class="form-control"
            ref={props.getContent}
            onChange={props.savePostContentToState}
            placeholder="content"
          ></textarea>
          <br />
          <br />
          <button class="btn btn-secondary" onClick={props.cancel}>
            <i class="fa-solid fa-xmark"></i>
            Cancel
          </button>
          <button class="btn btn-success ms-2 " onClick={props.savePosts}>
            <i class="fa-solid fa-floppy-disk"></i> Save
          </button>
        </div>
      </div>
    </div>
  );
};
export default Create;
