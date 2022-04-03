import axios from "axios";
import instance from "./connection";
class UserAuthentication{
    userAuth(data){
        console.log("breaking point",data);
        return axios({
            url:instance()+"registerNewUser",
            method:"POST",
            data:data
        }
        )
    }
}
export default UserAuthentication;