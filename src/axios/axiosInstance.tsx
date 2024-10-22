import axios from 'axios';
const axiosInstance = axios.create({
    baseURL: 'https://gateway.flaveconsole.com/fws/client',
    // baseURL:'https://localhost:44349/fws/client',
    headers: {
        Authorization: '',
    },
});

axiosInstance.interceptors.response.use((response: any) => response, (error: any) => { 
    if(error.response.status === 401) {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('permissions');
        sessionStorage.removeItem('userDetail');
    }
    throw error;
});

axiosInstance.interceptors.response.use(async (response: any) => response, (error: any) => { 
    if(error.response.status === 500){
        console.log('error.response', error.response)
    }
    if(error.response.status === 404){
        console.log('error.response', error.response)
        return error.response
    }
    throw error;
    // return error.response
});

axiosInstance.interceptors.request.use(
    async (config: any) => {
        // const dispatch = useDispatch();
        // const online = navigator.onLine;
        // debugger
        // if(online){
            
        //     // showErrorToast('No Internet Connection')(dispatch);
        //     // alert('online');
        //     return config;
        // }
        const sessionToken = await sessionStorage.getItem('token');
        if (sessionToken !== null) {
            config.headers.Authorization = 'Bearer ' + sessionToken
        }
        return config;
    },
    (error: any) => {
        return Promise.reject(error);
    },
);

export default axiosInstance;