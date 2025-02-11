import {z} from 'zod';

export const formSchema = z.object({
    name: z.string().min(3, "O nome deve ter no mínimo 3 caracteres."),
    lastname: z.string().min(3, "O sobrenome deve ter no mínimo 3 caracteres."),
    gender: z.string().refine((field) => field !== "select", {
        message: "O campo é obrigatório."
    }),
    email: z.string().min(1, "O campo é obrigatório.").email("Por favor, insira um e-mail válido."),
    password: z.string().min(6, "A senha deve ter no mínimo 6 dígitos."),
    confirmPassword: z.string().min(1, "A confirmação de senha deve ter no mínimo 6 dígitos."),
    agree: z.boolean().refine((field) => field === true, {
        message: "Você precisa concordar com os termos.",
    }),
}).refine((field) => field.password === field.confirmPassword, {
    message: "As senhas precisam ser iguais.",
    path: ["confirmPassword"],
});

export type FormSchema = z.infer<typeof formSchema>;