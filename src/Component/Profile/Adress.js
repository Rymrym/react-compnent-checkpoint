import React from 'react'
const Adress = ()=>{
    let adress = {street : 'street1', city :'city1', country : 'country2'}
    return (
        <React.Fragment>
<h2>{adress.street+' '+adress.city+' '+adress.country}</h2>
        </React.Fragment>
    )

}
export default Adress;