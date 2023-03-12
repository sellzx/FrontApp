import axios from 'axios';
import ApiRoute from '../Services/Routes'
import * as ImagePicker from 'expo-image-picker';

const handleSelectImagePress = async (username) => {

    const api = ApiRoute;
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
    if (status !== 'granted') {
      alert('Se necesitan permisos de galeria para funcionar');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      base64: true,
      quality: 0.5
    });

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
  };

  export default handleSelectImagePress;