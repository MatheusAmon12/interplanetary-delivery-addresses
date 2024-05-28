import { AppError } from "@/utils/AppError";
import { getAllAdresses } from "../getAllAddresses";
import { Address } from "@/@types/address";

export function createNewAdresses(newAddress: Address) {
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