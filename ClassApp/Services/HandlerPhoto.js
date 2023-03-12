import axios from 'axios';
import ApiRoute from '../Services/Routes'
import * as ImagePicker from 'expo-image-picker';

const handleTakePicturePress = async (username) => {
    const api = ApiRoute;
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    
    if (status !== 'granted') {
      alert('Se necesitan permisos de camara para funcionar!');
      return;
    }
    
    const result = await ImagePicker.launchCameraAsync({
        base64: true,
        aspect: [4, 3],
        quality: 0.5
    })
    
    if (!result.cancelled) {
        if (!result.cancelled) {
            try {
              const response = await axios.post(`${api}Image/PostImage`, {
                image: result.base64,
                owner: username  
              });
          
              const data = await response.json();
              
              console.log(data);
            } catch (error) {
              console.error(error);
            }
        }return;
    }
    return;
  };

  export default handleTakePicturePress;