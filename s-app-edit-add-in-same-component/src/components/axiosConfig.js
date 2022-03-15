import axios from 'axios';

const devUrl="htts://ty-shop.herouapp.com/";
const paymentGateWayUrl="";
const testUrl='';
const prodUrl='';

const axiosInstance=axios.create({
    baseURL:devUrl
})

const axiosInstancePayment=axios.create({
    baseURL:paymentGateWayUrl
})


export default axiosInstance;
export{axiosInstancePayment}