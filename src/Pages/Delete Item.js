import Input from "../Components/Input";
import { useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";
import AlertCustom from "../Components/Alert";
import { useNavigate } from "react-router-dom";
import firebase from "../Config/firebase";
import { useState } from "react";

export default function DeleteItem(props) {
  const [alert, setAlert] = useState({ variant: "", text: "" });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

    const onSubmit = async (data) => {
      const document = await firebase.db.doc("products/" + data.id).delete();
    };
/*
      .then(function (response) {
        console.log(response);
        setAlert({
          variant: "success",
          text: "Item Deleted",
        })
        setTimeout(() => {
          navigate("/")
        }, 1000);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
*/
  return (
    <div>
      <Form
        onSubmit={handleSubmit((data) => {
          onSubmit(data);
        })}
      >
        <Input
          label="Item ID"
          register={{ ...register("id", { required: true }) }}
        />
        {errors.id && <span>Mandatory</span>}


        <Button type="submit" variant="dark">
          Delete Item
        </Button>
        <AlertCustom variant={alert.variant} text={alert.text} />
      </Form>
    </div>
  );
}
