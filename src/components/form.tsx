import { ReactNode, useRef } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./ui/button";
import { toast } from "sonner";

const formSchema = z.object({
    type: z.string()
        .max(15, "O tipo deve ter no maximo 15 caracteres")
        .min(3, "O tipo deve ter no minimo 3 caracteres"),
    address: z.string()
        .min(4, "O endereço do lote deve ter no minimo 4 caracteres"),
    receiver: z.string()
        .max(20, "O nome do recebedor deve ter no maximo 20 caracteres")
        .min(3, "O nome do recebedor deve ter no minimo 3 caracteres")
})

type FormDataSchema = z.infer<typeof formSchema>

const Form = ({children}: {children: ReactNode}) => {
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormDataSchema>({
        resolver: zodResolver(formSchema)
    })

    const formRef = useRef<HTMLFormElement>(null)

    const handleFormSubmit = (data: FormDataSchema) => {
        console.log(data)
        reset()
        toast.success('Endereço adicionado com sucesso!')
    }

    return (
        <>
            <form ref={formRef} onSubmit={handleSubmit(handleFormSubmit)}  className="px-6 flex flex-col h-[100vh] justify-center items-center space-y-4">
                {children}
                <div className="w-full space-y-2">
                    <Label htmlFor="type">Tipo de Endereço</Label>
                    <Input {...register('type')} placeholder="Armazém" />
                    {
                        errors.type && (
                            <span className="text-xs text-destructive font-semibold">{errors.type.message}</span>
                        )
                    }
                </div>

                <div className="w-full space-y-2">
                    <Label htmlFor="address">Endereço do Lote</Label>
                    <Input {...register('address')} placeholder="0023" type="number" />
                    {
                        errors.address && (
                            <span className="text-xs text-destructive font-semibold">{errors.address.message}</span>
                        )
                    }
                </div>

                <div className="w-full space-y-2">
                    <Label htmlFor="receiver">Recebedor</Label>
                    <Input {...register('receiver')} placeholder="John Doe" />
                    {
                        errors.receiver && (
                            <span className="text-xs text-destructive font-semibold">{errors.receiver.message}</span>
                        )
                    }
                </div>
                <Button className="w-full cursor-pointer" type="submit" disabled={isSubmitting}>
                    CADASTRAR
                </Button>
            </form>
        </>
     );
}
 
export default Form;