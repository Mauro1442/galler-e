import { useForm } from "react-hook-form";
import Input from "../Components/Input";
import { Button, Form } from "react-bootstrap";
import firebase from "../Config/firebase";
import AuthContext from "../Context/AuthContext";

function AddItem() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const document = await firebase.firestore().collection("products").add({
        name: data.name,
        price: data.price,
        img: data.img,
        description: data.description,
      });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <AuthContext.Consumer>
        {(context) => (
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
              label="Name"
              register={{ ...register("name", { required: true }) }}
            />
            {errors.nombre && <span>Mandatory field</span>}
            <Input
              label="Price"
              type="number"
              register={{ ...register("price", { required: true }) }}
            />
            {errors.precio && <span>Mandatory field</span>}{" "}
            <Input
              label="img"
              register={{ ...register("img", { required: true }) }}
            />
            {errors.sku && <span>Mandatory field</span>}
            <Input
              label="Description"
              register={{ ...register("description", { required: true }) }}
            />
            {errors.descripcion && <span>Mandatory field</span>}
            {context.userLogin && (
              <>
                <Button variant="dark" type="submit">
                  Save
                </Button>
              </>
            )}
          </Form>
        )}
      </AuthContext.Consumer>
    </>
  );
}

export default AddItem;
