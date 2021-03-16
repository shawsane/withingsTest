import { jsx } from '@emotion/react'
import {useState, useEffect} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const styles = {
  root: {
    minWidth: '200px',

  },
  image: {
        height: 200,
        width: 300,
  },
  conteneur:{
        width: '80%',
        minWidth: '200px',
        maxWidth: '800px',
        margin: 0 , 
  },
}

export default () => {
  
    let history = useHistory()
    const redirectBreeds = (image) => {
      localStorage.setItem('image', image)
      history.push('/breed')
      history.go(0)
    }
    const [loaded, setload] = useState(false)
    const [images, setImages] = useState([])
    useEffect( () => {
      const fetch = async () => {
        const {data: tapomImages} = await axios.get('https://api.thecatapi.com/v1/breeds?attach_breed=0')    
           const images= tapomImages
        setImages(images)
        setload(true)
      }
      fetch()
      /*console.log("hello")*/
    }, [])
    return (
      loaded && <ul style={styles.root}>
        { images.map( (chat, i) => 
        
        { if(chat.image)
          return <li key={i} >
              <div style={styles.conteneur}>
              <img src={chat.image.url} style={styles.image}/>
              </div>
              
              {chat.name}
          </li>
        })}
      </ul>
    );
  }