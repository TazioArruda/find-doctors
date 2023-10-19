import { useForm } from "react-hook-form";
import { LoginProps, loginUser } from "../services/loginUser";
import { useContext } from "react";
import { CreateAppContext } from "../contexts/AppController";
import { useNavigate } from "react-router-dom";

function Login() {
  const { data, userLoged } = useContext(CreateAppContext);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const handleClick = async ({ email, password }: LoginProps) => {
    await loginUser({ email, password });

    userLoged();

    if (data.isAuthenticated) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="bg-green-800 w-screen h-screen flex justify-center items-center">
      <div className="w-[30rem] h-[32rem] bg-white flex flex-col p-20 gap-14 rounded-2xl">
        <div id="tittle" className="flex flex-col w-full gap-2 justify-start">
          <span className="text-xl">Seja bem vindo!</span>
          <h1 className="text-4xl font-bold">Realize seu login</h1>
        </div>
        <div id="inputFormLogin">
          <form
            className="flex flex-col gap-6"
            onSubmit={handleSubmit(handleClick)}
          >
            <div className="relative z-0 w-full">
              <input
                {...register("email")}
                type="email"
                name="email"
                id="email"
                placeholder=""
                className="block px-3 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 focus:outline-none appearance-none  focus:ring-0 focus:border-green-600 peer"
              />
              <label
                htmlFor="email"
                className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-4 peer-focus:px-2 peer-focus:text-green-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
              >
                Nome
              </label>
            </div>
            <div className="relative z-0 w-full">
              <input
                {...register("password")}
                type="password"
                name="password"
                id="password"
                placeholder=""
                className="block px-3 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 focus:outline-none appearance-none  focus:ring-0 focus:border-green-600 peer"
              />
              <label
                htmlFor="password"
                className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-4 peer-focus:px-2 peer-focus:text-green-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
              >
                Senha
              </label>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-2">
                <input type="checkbox" name="reminder" id="reminder" />
                <label htmlFor="reminder" className="font-bold">
                  Lembrar-me
                </label>
              </div>
              <span>Esqueci minha senha</span>
            </div>
            <button
              type="submit"
              className="w-full rounded-xl bg-green-200 px-4 py-2 text-green-800 text-base hover:bg-green-400 hover:text-green-200"
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
