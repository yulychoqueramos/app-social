import React from 'react';
import ItemStory from './ItemStory'

const  ListStories = ({stories}) => {
  return (
    <div className='list-stories'>
        {
            // imprimir la lista de historias utilizando el componente
            stories.map(story=> <ItemStory story={story} key={story.id}/>)
        }
    </div>
  );
}
  
export default ListStories;
  