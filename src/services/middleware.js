import Cookie from "js-cookie";
export default {
    auth(to, from, next){
        const token = Cookie.get('__mytoken');    
            
        if(!token){
            next('/Login');
        }
        next();
    },
}