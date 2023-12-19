export function getAcessor(){
    const vaultifyToken = localStorage.getItem("vaultify-accessor") || null
    return vaultifyToken
}