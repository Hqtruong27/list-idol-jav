const apiJav = async () => {
    const httpResponse = await fetch('https://raw.githubusercontent.com/conanak99/jav-py/main/acctress.json')
    //console.log(httpResponse)
    const jsonJav = await httpResponse.json()
    const filter = jsonJav.find(x => x.name.includes("Karen"))
    console.log(jsonJav)
    console.log(filter)
}
apiJav()