import { AppError } from "@/utils/AppError";
import { getAllAdresses } from "../getAllAddresses";

interface AdressProps {
    type: string
    address: string,
    receiver: string,
}

export function createNewAdresses(newAddress: AdressProps) {
    const storedAdresses = getAllAdresses()

    if (storedAdresses.length > 0) {
        const addressAlreadyExists = storedAdresses.some(item => item.address === newAddress.address);

        if (addressAlreadyExists) { 
            throw new AppError("Endereço existente! Remova-o e tente novamente.");
        }
    }

    const storage = JSON.stringify([...storedAdresses, newAddress])

    localStorage.setItem('addresses', storage)
}