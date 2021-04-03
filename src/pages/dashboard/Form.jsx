import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { createPost } from "../../api";
import FileBase64 from "react-file-base64";

const Form = () => {
  const { register, handleSubmit, errors, reset } = useForm();
  const [file, setFile] = useState(null);

  // const onSubmit = (data) => console.log(data);

  // console.log(watch("title")); // watch input value by passing the name of it

  // const onSubmit = (post) => {
  //   createPost(...post, (image: file));
  //   console.log({ post });
  //   clearForm();
  // };
  const onSubmit = (data) => {
    createPost({ ...data, image: file });
    clearForm();
  };

  const clearForm = () => {
    reset();
  };

  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <legend>New Blog Post</legend>
        <input
          id="title"
          label="title"
          name="title"
          ref={register({ required: true })}
          placeholder="title"
        />
        {errors.title && <span>This field is required</span>}
        <input
          id="subtitle"
          label="subtitle"
          name="subtitle"
          ref={register({ required: true })}
          placeholder="subtitle"
        />
        {errors.subtitle && <span>This field is required</span>}
        <textarea
          name="content"
          id="content"
          placeholder="content"
          ref={register({ required: true })}
        ></textarea>
        {errors.content && <span>This field is required</span>}
        <FileBase64 multiple={false} onDone={({ base64 }) => setFile(base64)} />
        <input
          id="author"
          label="author"
          name="author"
          ref={register({ required: true })}
          placeholder="author"
        />
        <button type="submit">Submit</button>
      </fieldset>
    </form>
  );
};

export default Form;
