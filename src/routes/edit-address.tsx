import { getAllAdresses } from "@/store/getAllAddresses";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { ChevronLeft, Edit3, Trash2Icon } from 'lucide-react'
import { Button } from "@/components/ui/button";
import { removeOneAddress } from "@/store/removeOneAddress";
import EmptyList from "@/components/empty-list";
import { useNavigate } from "react-router-dom";

type Props = {
    type: string,
    receiver: string,
    address: string,
}

const EditAddress = () => {
    const [addresses, setAddresses] = useState<Props[]>([])
    const navigate = useNavigate()

    const handleAddressRemove = (address: string) => {
        try {
            removeOneAddress(address)
            toast.success('Endereço removido com sucesso!')
        } catch(error) {
            toast.error('Error ao remover o endereço!')
        }
    }

    const handleAddressEdit = (address: string) => {
        navigate('/', { state: { address } })
    }

    const handleNavigateBack = () => {
        navigate('/')
    }

    const fetchAddress = async() => {
        try {
            const storage = await getAllAdresses()
            console.log(storage)
    
            setAddresses(storage)
        } catch(error) {
            toast.error('Error ao ler os endereços!')
        }
    }

    useEffect(() => {
        fetchAddress()
    }, [])
    return ( 
        <div className="p-6 h-[100vh]">
            <div className="flex items-center gap-4">
                <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={handleNavigateBack}
                    className="cursor-pointer"
                >
                    <ChevronLeft />
                </Button>
                <h1 className="text-3xl font-semibold">Endereços</h1>
            </div>
            {
                addresses.map(address => (
                    <div key={address.address} className="space-y-4 py-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="font-bold">
                                    <span className="block text-sm font-semibold">Endereço</span>
                                    LOTE {address.address}
                                </CardTitle>
                                <CardDescription>
                                    <span className="block text-sm font-semibold">Recebedor:</span>
                                    <span>{address.receiver}</span>
                                    <span className="block text-sm font-semibold">Tipo:</span>
                                    <span>{address.type}</span>
                                </CardDescription>
                            </CardHeader>
                            <CardFooter className="gap-4">
                                <Button 
                                    className="w-full cursor-pointer"
                                    onClick={() => handleAddressRemove(address.address)}
                                >
                                    <Trash2Icon />
                                </Button>

                                <Button 
                                    className="w-full cursor-pointer"
                                    onClick={() => handleAddressEdit(address.address)}
                                >
                                    <Edit3 />
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                ))
            }
            {
                addresses.length === 0 && (
                    <EmptyList />
                )
            }
        </div>
        
     );
}
 
export default EditAddress;