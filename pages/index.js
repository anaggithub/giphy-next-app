import { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import AppLayout from "../components/AppLayout";
import Button from "../components/Button";
import Input from "../components/Input";
import { StyledForm } from "./styles";
import { loggin } from "../services/auth";

export default function Login() {
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  const handleFormSubmit = async (data) => {
    const { userName, password } = data;
    loggin(userName, password)
      .then((res) => {
        console.log("res", res);
        if (res.status === 200) {
          setData(JSON.stringify(res.json));
          router.push(`/home`);
        } else if (res.status === 404) {
          alert("El usuario ingresado no existe");
        } else {
          alert("Ocurrió un error al iniciar sesión");
        }
      })
      .catch((error) => `Ocurrió un error al iniciar sesión: ${error}`);

  };

  return (
    <AppLayout showNavbar={false}>
      <StyledForm onSubmit={handleSubmit(handleFormSubmit)}>
        <Input {...register("userName")} placeholder="Nombre de Usuario" />
        <Input
          {...register("password")}
          type="password"
          placeholder="Contraseña"
        />
        <Button type="primary">Iniciar sesion</Button>
      </StyledForm>
    </AppLayout>
  );
}
