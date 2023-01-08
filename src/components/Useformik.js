import React from 'react'

export const Useformik = () => {
    const formvalid=Useformik({
        initialvalues:{
            name:""
        },
        onsubmit:(userInputData)=>{
            console.log(userInputData);
        }

    })
  return (
    <div>Useformik</div>
  )
}

export default{formvalid}