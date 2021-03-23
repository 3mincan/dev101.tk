import React from "react";
import { useForm } from "react-hook-form";
import { createPost } from "../../api";
const Form = () => {
  const { register, handleSubmit, errors, reset } = useForm();
  // const onSubmit = (data) => console.log(data);

  // console.log(watch("title")); // watch input value by passing the name of it

  const onSubmit = (post) => {
    createPost(post);
    console.log({ post });
    clearForm();
  };

  const clearForm = () => {
    reset();
  };

  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
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
      <input
        name="content"
        id="content"
        label="content"
        placeholder="content"
        ref={register({ required: true })}
      />
      {errors.content && <span>This field is required</span>}
      <button type="submit">Göndert</button>
    </form>
  );
};

export default Form;
