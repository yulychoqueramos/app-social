import React from 'react';


const  ItemStory = ({story}) => {
    // modificar componente para visualizar el comentario, foto, fecha y hora
    // del prop story

    return (
        <div className='item-story rounded-md shadow-md shadow-gray-300 p-5 my-5'>
            {story.comment}
        </div>
    );
}
  
export default ItemStory;
  