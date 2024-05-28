import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

const EmptyList = () => {
    const navigate = useNavigate()

    const handleClickNavigate = () => navigate('/')

    return ( 
        <div className="text-center h-full flex flex-col justify-center items-center text-muted-foreground space-y-4 lg:px-96">
            <h1 className="text-md">Adicione endereços para preencher sua lista.</h1>
            <Button 
                className="w-full cursor-pointer" 
                onClick={handleClickNavigate}
            >
                Adicionar Endereços
            </Button>
        </div>
     );
}
 
export default EmptyList;