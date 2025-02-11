import {useForms} from "../hooks/useForms";
import { FormSchema } from "../schemas/formSchema";

function Form() {
    const {register, handleSubmit, errors} = useForms();

    const onSubmit = (data: FormSchema) => {
        console.log(data);
    };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-96 bg-white p-4 rounded-md border border-slate-300">
        <div className="flex flex-col gap-2 mb-2">
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" placeholder="Digite o seu nome" {...register("name")} className="h-10 pl-2 rounded-md border border-slate-300"/>
            {errors.name && <small className="text-red-500 italic">{errors.name.message}</small>}
        </div>
        <div className="flex flex-col gap-2 mb-2">
            <label htmlFor="lastname">Sobrenome:</label>
            <input type="text" id="lastname" placeholder="Digite o seu sobrenome" {...register("lastname")} className="h-10 pl-2 rounded-md border border-slate-300"/>
            {errors.lastname && <small className="text-red-500 italic">{errors.lastname.message}</small>}
        </div>
        <div className="flex flex-col gap-2 mb-2">
            <label htmlFor="gender">Gênero:</label>
            <select id="gender" {...register("gender")} className="h-10 pl-1 rounded-md border border-slate-300">
                <option value="select">Selecione</option>
                <option value="male">Masculino</option>
                <option value="female">Feminino</option>
                <option value="other">Outro</option>
            </select>
            {errors.gender && <small className="text-red-500 italic">{errors.gender.message}</small>}
        </div>
        <div className="flex flex-col gap-2 mb-2">
            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" placeholder="Digite o seu E-mail" {...register("email")} className="h-10 pl-2 rounded-md border border-slate-300"/>
            {errors.email && <small className="text-red-500 italic">{errors.email.message}</small>}
        </div>
        <div className="flex flex-col gap-2 mb-2">
            <label htmlFor="password">Senha:</label>
            <input type="password" id="password" placeholder="Digite a sua senha" {...register("password")} className="h-10 pl-2 rounded-md border border-slate-300"/>
            {errors.password && <small className="text-red-500 italic">{errors.password.message}</small>}
        </div>
        <div className="flex flex-col gap-2 mb-2">
            <label htmlFor="confirmPassword">Confirmar senha:</label>
            <input type="password" id="confirmPassword" placeholder="Confirme a sua senha" {...register("confirmPassword")} className="h-10 pl-2 rounded-md border border-slate-300"/>
            {errors.confirmPassword && <small className="text-red-500 italic">{errors.confirmPassword.message}</small>}
        </div>
        <div className="flex flex-col gap-2 mb-2">
            <div className="flex gap-2">
                <input type="checkbox" id="agree" placeholder="Confirme a sua senha" {...register("agree")} className="h-10 pl-2 rounded-md border border-slate-300"/>
                <label htmlFor="agree">Declaro que li e concordo com os termos e condições.</label>
            </div>
            {errors.agree && <small className="text-red-500 italic">{errors.agree.message}</small>}
        </div>
        <button type="submit" className="w-full h-11 bg-cyan-400 rounded-md my-2 hover:bg-cyan-500 transition-all cursor-pointer">Cadastrar</button>
    </form>
  )
}

export default Form
