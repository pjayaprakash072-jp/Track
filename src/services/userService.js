import api,{ unwrap } from './../utils/api';

const userService = {
    login:async(payload)=>unwrap(await api.post("/user/login",payload))
}
export default userService
