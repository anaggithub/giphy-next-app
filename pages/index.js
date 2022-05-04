import { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { users } from "../database";
import Button from "../components/Button";
import Input from "../components/Input";

export default function Login() {
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  const handleFormSubmit = (data) => {
    console.log(data);
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
        user.username === userData.username &&
        user.password === userData.password
    );
    return Boolean(user);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <Input {...register("userName")} placeholder="Nombre de Usuario" />
      <Input {...register("password")} placeholder="Contraseña" />
      <Button placeholder="Iniciar sesion" />
    </form>
  );
}
