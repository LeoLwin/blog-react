import React, { useState, useEffect, useRef } from "react";

import Create from "./Create";
import Post from "./Post";
import Edit from "./Edit";

const List = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState([
    { id: 1, title: "t1", content: "c1" },
    { id: 2, title: "t2", content: "c2" },
  ]);
  const [isCreate, setIsCreate] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState("");

  const savePostTitleToState = (event) => {
    setTitle(event.target.value);
  };
  const savePostContentToState = (event) => {
    setContent(event.target.value);
  };
  const getTitle = useRef();
  const getContent = useRef();

  const toggleCreate = () => {
    setIsCreate(true);
  };

  const editPost = (id) => {
    setIsEdit(true);
    setEditId(id);
  };

  const updatePost = () => {
    setIsEdit(false);
    const updatedPost = posts.map((eachPost) => {
      if (eachPost.id === editId) {
        return {
          ...eachPost,
          title: title || eachPost.title,
          content: content || eachPost.content,
        };
      }
      return eachPost;
    });
    setPosts(updatedPost);
  };

  const deletePost = (id) => {
    const modifiedPost = posts.filter((eachpost) => {
      return eachpost.id !== id;
    });
    setPosts(modifiedPost);
  };

  useEffect(() => {
    console.log(title);
    console.log(content);
    console.log(posts);
  }, [title, content, posts]);

  const savePosts = () => {
    const newPost = {
      id: Date.now(),
      title,
      content,
    };
    setPosts([...posts, newPost]);
    getTitle.current.value = "";
    getContent.current.value = "";
    setIsCreate(false);
  };

  const cancel = () => {
    setIsEdit(false);
    setIsCreate(false);
  };

  if (isCreate) {
    return (
      <Create
        savePostTitleToState={savePostTitleToState}
        savePostContentToState={savePostContentToState}
        savePosts={savePosts}
        getTitle={getTitle}
        getContent={getContent}
        cancel={cancel}
      />
    );
  } else if (isEdit) {
    const editPost = posts.find((post) => {
      return post.id === editId;
    });

    return (
      <Edit
        savePostTitleToState={savePostTitleToState}
        savePostContentToState={savePostContentToState}
        post={editPost}
        updatePost={updatePost}
        cancel={cancel}
      />
    );
  } else {
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-12 ">
            <button className="btn btn-primary" onClick={toggleCreate}>
              <i className="fa-solid fa-plus"></i>
              New
            </button>

            <table className="table mt-3">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Title</th>
                  <th scope="col">Content</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post) => (
                  <Post
                    key={post.title}
                    post={post}
                    editPost={editPost}
                    deletePost={deletePost}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
};
export default List;
