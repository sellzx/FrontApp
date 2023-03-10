import React from 'react';
import { LoginResponse } from '../Models/LoginResponse'
import axios from 'axios';
import ApiRoute from '../Services/Routes'


const handleLoginf = async (email,password) => {
    
    try {
        const response = await axios.get(`${api}Login/Login?email=${email}&password=${password}`);
        if (response.data.success) {
            const result = new LoginResponse(response.data.success,response.data.message);
            return result;
        } else {
            const result = new LoginResponse(response.data.success,response.data.message);
            return result;
        };
        
    } catch (error) {
        const result = new LoginResponse(false, "Ocurrio un problema en la peticion");
        return result;
    }
    
}

const api = ApiRoute;

export default handleLoginf;