import { useRef } from 'react'

export const DataInput = () => {

    
    const formulario = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()

        const datos = new FormData(formulario.current)

       // console.log(...datos.entries())

       const objetoDatos = Object.fromEntries([...datos.entries()])

       if(!objetoDatos.formName.trim()){
        return console.log("vacio")
       }

       console.log("paso las validaciones!")
       console.log(objetoDatos)
       formulario.current.reset()


    }

  return (
    <form onSubmit={handleSubmit} ref={formulario}>
        <input 
            type="text"
            placeholder='Ingrese su nombre:' 
            name="formName" 
        />
         <input 
            type="text"
            placeholder='Ingrese su apellido:' 
            name="formLastName" 
        />
         <input 
            type="text"
            placeholder='Ingrese el curso:' 
            name="formCurso" 
        />
        <select 
            name="alumnoEstado"
            defaultValue="Cursa"
        >
            <option value="cursa" >Cursa</option>
            <option value="noCursa" >No Cursa</option>
            
        </select>
        <button type='submit'>Agregar</button>
    </form>
  )
}
