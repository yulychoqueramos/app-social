import { list } from 'postcss';
import React, { useEffect, useState } from 'react';
import FormStory from './FormStory'
import ListStories from './ListStories'


const  StoriesContainer = () => {
  //const [stories, setStories] = useState([])

  // agregar logica para optener la lista de historias desde localstorage
  // utilizar useEffect

//

const [stories, setStories] = useState(
  JSON.parse(localStorage.getItem("stories")) || []
);



  //



  const saveStory = (story) => {
    console.log(story);
    var today = new Date();
    var now = today.toLocaleString();

    const newStory = {
      id: Date.now(),
      now,
      ...story
    }
    setStories([newStory, ...stories]);
    // guardar lista de historias en localstorage

  };
//
  useEffect(() => {
    localStorage.setItem("stories",JSON.stringify(stories)); 
  }, [stories])
//
  

  return (
    <div className='stories-container'>
      <FormStory saveStory={saveStory} />
      <ListStories stories={stories}/>
      {/* utiliza el componente <ListStories /> y envia la lista de historias */}
      
    </div>
  );
}
  
export default StoriesContainer;
  