import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { 
    ChevronLeft, 
    Edit3, 
    Trash2Icon 
} from 'lucide-react'

import { Address } from "@/@types/address";
import { removeOneAddress } from "@/store/removeOneAddress";
import { getAllAdresses } from "@/store/getAllAddresses";

import EmptyList from "@/components/empty-list";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const EditAddress = () => {
    const [addresses, setAddresses] = useState<Address[]>([])
    const navigate = useNavigate()

    const handleAddressRemove = (address: string) => {
        try {
            removeOneAddress(address)
            toast.success('Endereço removido com sucesso!')

            setAddresses(prevState => prevState.filter(item => item.address !== address))
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

    const fetchAddress = () => {
        try {
            const storage = getAllAdresses()
    
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
            <div className="lg:grid lg:grid-cols-3 lg:gap-4 lg:px-20">
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
            </div>
            {
                addresses.length === 0 && (
                    <EmptyList />
                )
            }
        </div>
        
     );
}
 
export default EditAddress;