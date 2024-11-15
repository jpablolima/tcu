const URL = "https://certidoes-apf.apps.tcu.gov.br/api/rest/publico/certidoes/)"


async function getAPI(){ 
    const resp = await fetch(URL)
    if (resp.status === 200){
        const obj = await resp.json()
        console.log(obj)
    }
        
}
getAPI()