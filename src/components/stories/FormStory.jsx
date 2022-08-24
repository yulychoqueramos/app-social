import { comment } from 'postcss';
import React, { useEffect, useState } from 'react';



const  FormStory = ({saveStory}) => {
  


    
    const [form, setForm] = useState({
        comment: '',
        photo: '',
        
    })

    const clearForm = () => {
        setForm({
            comment: '',
            photo: '',
           
            
        })
        // limpiar el input file
        // puedes utilizar cualquier metodo

        // mi codigo >>
        document.getElementById("inputphoto").value = "";
        // << mi codigo 
        

    }

    const handleInputChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const handleFileInput = (event) => {
        let files = event.target.files;
        let reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = (e) => {
            setForm({
                ...form,
                photo: e.target.result
            })
        }
    }

    const submitForm = () => {
        // validar que al menos se ingrese el comentario
        //  
        
        

        if (form.comment === "" ) {
            console.log("Ingrese un comentario");
            alert("ingrese un comentario");
            return 
          }

        //
      

       saveStory(form); 
        clearForm()
    }

    return (
        <form  >
            <div className='form-story rounded-md shadow-md shadow-gray-300 p-5'>
                <div className='flex mb-3'>
                    <textarea className='input-story rounded-md p-3 border-solid border-2 border-slate-200' rows='3' placeholder='Qué estas pensando?' 
                    value={form.comment} onChange={handleInputChange} name='comment'></textarea>
                </div>
                <div className='flex'>
                    <div>
                        <input id="inputphoto" type="file"  accept="image/*" name='photo'  onChange={handleFileInput} />
                    </div>
                    <button onClick={() => { submitForm() }} type='button' 
                        className="ml-auto w-96 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"> 
                        Publicar 
                    </button>
                </div>
            </div>
        </form>
    );
}
  
export default FormStory;
  