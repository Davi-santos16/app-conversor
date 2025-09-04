const Base_Url = 'https://api.exchangerate-api.com/v4/latest'

export async function exchangeRateApi(fromCurrency){

    try{
    const responde = await fetch(`${Base_Url}/${fromCurrency}`)
    const data = responde.json()
    return data
    }catch(err){
        console.log(err)
    }
}

