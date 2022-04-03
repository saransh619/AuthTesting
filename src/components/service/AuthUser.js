import axios from 'axios';
export default function AuthUser(){
    const http = axios.create({
        baseURL: 'http://192.168.88.72:8000/api/',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    return {
        http
}
}