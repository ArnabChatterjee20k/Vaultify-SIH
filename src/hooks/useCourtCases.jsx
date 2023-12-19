import { useContract , useSigner} from "@thirdweb-dev/react"
import { abi,contractAddress} from "../data"
import { useState } from "react"

export default function useCourtCases() {
    const signer = useSigner()
    const {contract} = useContract(contractAddress,abi,signer)
    const [courtCases,setCourtCases] = useState([])
    const [files,setFiles] = useState([])

    async function openCourtCases(id,customCaseName){
        await contract.openCourtCases("1")
    }

    async function getCourtCases(){
        const cases = contract.getCourtCasesOfUser()
        console.log({cases})
    }
  return {openCourtCases,getCourtCases}
}
