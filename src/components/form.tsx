import { ReactNode } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const Form = ({children}: {children: ReactNode}) => {
    return (
        <>
            <form className="px-6 flex flex-col h-[100vh] justify-center items-center space-y-4">
                {children}
                <div className="w-full space-y-2">
                    <Label htmlFor="type">Tipo de Endereço</Label>
                    <Input name="type" placeholder="Armazém" />
                    <span className="text-xs text-destructive font-semibold">Error Message!</span>
                </div>

                <div className="w-full space-y-2">
                    <Label htmlFor="address">Endereço completo</Label>
                    <Input name="address" placeholder="Lote 0023" />
                    <span className="text-xs text-destructive font-semibold">Error Message!</span>
                </div>

                <div className="w-full space-y-2">
                    <Label htmlFor="receiver">Recebedor</Label>
                    <Input name="receiver" placeholder="John Doe" />
                    <span className="text-xs text-destructive font-semibold">Error Message!</span>
                </div>
            </form>
        </>
     );
}
 
export default Form;