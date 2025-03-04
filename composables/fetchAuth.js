import {ref, onMounted} from 'vue' 
const user = ref(null) 
const isAuthenticated = ref(false)
export function useAuth (){ 
    const logIn = (userInfo)=>{ 
        user.value = userInfo 
        isAuthenticated.value = true
        localStorage.setItem('user',JSON.stringify(userInfo))  
        localStorage.setItem('isAuthenticated',JSON.stringify(isAuthenticated.value))
        console.log(user.value) 
    } 
    const logOut = ()=>{ user.value = null 
        if(import.meta.client){
        localStorage.removeItem('user') 
        localStorage.removeItem('isAuthenticated')
        } 
    } 
    return{ 
        user, 
        logIn, 
        logOut, 
        isAuthenticated
        }
    }
    