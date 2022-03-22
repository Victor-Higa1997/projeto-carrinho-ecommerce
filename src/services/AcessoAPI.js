
export const AcessoAPI = async () =>{
    var response = await fetch('http://localhost:5001/itemMetadata');
    try {
        const data = await response.json()
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}