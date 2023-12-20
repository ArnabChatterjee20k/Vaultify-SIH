import { useSigner} from "@thirdweb-dev/react"
import { Contract } from "ethers"
import { abi,contractAddress} from "../data"
import { useState } from "react"
import { useWeb3Context } from "../Web3ContextProvider"

export default function useCourtCases() {
    const signer = useSigner()
    // const contract = new Contract(contractAddress,abi,signer)
    const {contract} = useWeb3Context()
    const [courtCases,setCourtCases] = useState([])
    
    async function openCourtCases(id,customCaseName){
        await contract.openCourtCases(id,customCaseName)
    }

    async function getCourtCases(){
        const cases = await contract.getCourtCasesOfUser()
        setCourtCases(cases)
    }
  return {openCourtCases,courtCases,getCourtCases}
}
