import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../Components/Input";
import { Button, Form } from "react-bootstrap";
import firebase from "../Config/firebase";
import { useParams } from "react-router-dom";
import { getByIdProducts, update } from "../Services/productsServices";

function Modify() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const { id } = useParams();
  useEffect(() => {
    const request = async () => {
      try {
        const response = await getByIdProducts(id);
        setValue("name", response.data().name);
        setValue("price", response.data().price);
        setValue("img", response.data().img);
        setValue("description", response.data().description);
      } catch (e) {}
    };
    request();
  }, [id, setValue]);
  const onSubmit = async (data) => {
    console.log("Form", data);
    try {
      const document = await update("_" + id, data);

      console.log("document", document);
    } catch (e) {
      console.log(e);
    }
  };
  const handleDelete = async () => {
    const document = await firebase.db.doc("products/" + id).delete();
  };
  return (
    <>
      <Button variant="danger" type="submit" onClick={handleDelete}>
        Delete
      </Button>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Name"
          register={{ ...register("name", { required: true }) }}
        />
        {errors.name && <span>Mandatory field</span>}
        <Input
          label="Price"
          type="number"
          register={{ ...register("price", { required: true }) }}
        />
        {errors.price && <span>Mandatory field</span>}

        <Input
          label="Description"
          register={{ ...register("description", { required: true }) }}
        />
        {errors.description && <span>Mandatory field</span>}
        <Input
          label="Img"
          register={{ ...register("img", { required: true }) }}
        />
        {errors.img && <span>Mandatory field</span>}

        <Button variant="dark" type="submit">
          Update
        </Button>
      </Form>
    </>
  );
}

export default Modify;
