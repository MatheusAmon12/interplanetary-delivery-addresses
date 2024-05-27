import { getAllAdresses } from "@/store/getAllAdresses";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Edit3, Trash2Icon } from 'lucide-react'
import { Button } from "@/components/ui/button";
import { removeOneAddress } from "@/store/removeOneAddress";
import EmptyList from "@/components/empty-list";

type Props = {
    type: string,
    receiver: string,
    address: string,
}

const EditAddress = () => {
    const [addresses, setAddresses] = useState<Props[]>([])

    const handleAddressRemove = (address: string) => {
        try {
            removeOneAddress(address)
            toast.success('Endereço removido com sucesso!')
        } catch(error) {
            toast.error('Error ao remover o endereço!')
        }
    }

    useEffect(() => {
        try {
            const storage = getAllAdresses()
            console.log(storage)
    
            setAddresses(storage)
        } catch(error) {
            toast.error('Error ao ler os endereços!')
        }
            
    }, [addresses])
    return ( 
        <div className="p-6 h-[100vh]">
            <h1 className="text-3xl font-semibold">Endereços</h1>
            {
                addresses.map(address => (
                    <div className="space-y-4 py-6">
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

                                <Button className="w-full cursor-pointer">
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