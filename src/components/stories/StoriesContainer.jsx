import React, { useEffect, useState } from 'react';
import FormStory from './FormStory'
import ListStories from './ListStories'


const  StoriesContainer = () => {
  const [stories, setStories] = useState([])

  // agregar logica para optener la lista de historias desde localstorage
  // utilizar useEffect
 

  const saveStory = (story) => {
    console.log(story);
    const newStory = {
      id: Date.now(),
      ...story
    }
    setStories([...stories, newStory]);
    // guardar lista de historias en localstorage

  };

  return (
    <div className='stories-container'>
      <FormStory saveStory={saveStory} />
      {/* utiliza el componente <ListStories /> y envia la lista de historias */}
      
    </div>
  );
}
  
export default StoriesContainer;
  