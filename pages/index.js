import { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import AppLayout from "../components/AppLayout";
import Button from "../components/Button";
import Input from "../components/Input";
import { users } from "../database";
import { StyledForm } from "./styles";

export default function Login() {
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  const handleFormSubmit = (data) => {
    const isUserFound = checkUser(data);
    if (isUserFound) {
      setData(JSON.stringify(data));
      router.push(`/home`);
    } else {
      alert("El usuario ingresado no existe");
    }
  };

  const checkUser = (userData) => {
    const user = users.find(
      (user) =>
        user.userName === userData.userName &&
        user.password === userData.password
    );
    return Boolean(user);
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
