 
import request from "@/utils/request";

// 登录
// export const login = (data) => request.post("/user/login", data);
// export const updatePassword = (data) => request.post("/api/player/edit", data);
const User = {
    login(data) {
        return request.get("apiUrl/api/Account/login", {
            params: data
        });
    },
    register(data) {
        return request.get("apiUrl/api/Account/register", {
            params: data
        });
    },
    IpAdd(data) {
        return request.get("apiUrl/api/Announcement/IpAdd", {
            params: data
        });
    },
    getUserInfo(data) {
        return request.get("apiUrl/api/Account/GetUserInfo", {
            params: data
        });
    },
    setuserInfo(data) {
        return request.post("apiUrl/api/Account/setuserInfo", data);
    },
    setfamily(data) {
        return request.post("apiUrl/api/Account/setfamily", data);
    },
    setbankinfo(data) {
        return request.post("apiUrl/api/Account/setbankinfo", data);
    },
    getInfo(data) {
        return request.get("apiUrl/api/Index/Index", { params: data });
    },

    set_contract_img(data) {

        return request.post("apiUrl/api/Money_Card/saveImage", data,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        );

    },


    SaveContractInfo(data) {
        return request.post("apiUrl/api/Money_Card/SaveContractInfo", data,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        );
    },
    shen_he(data) {
        return request.get("apiUrl/api/Money_Card/shen_he", { params: data });
    },
    GetContractInfo(data) {
        return request.get("apiUrl/api/Money_Card/GetContractInfo", { params: data });
    },
    SleKefu(data) {
        return request.post('apiUrl/api/Ke_fu/Opt?method=select&pageNo=1&pageSize=10', data)
    },
    Getsystemconfig() {
        
        return request.get('apiUrl/api/Account/Getsystemconfig?htmllink='+window.linkurl)
    },
    getUserContract(data) {
        return request.get('apiUrl/api/Money_Card/get_user_contract', { params: data })
    },
    pdf() {
        return request.get('/uploads/aggrement.pdf', { responseType: 'arraybuffer' })

    },
    img() {
        return request.get('/uploads/612d43f2-6e80-4dc2-9f11-e7bd03142d941713632731736.png', { responseType: 'blob' })

    },
    tx(data) {
        return request.get('apiUrl/api/Index/qu_xian', { params: data })

    },
    getAdminBankInfo() {
        return request.get('apiUrl/api/Account/admin_bank_info')

    },
    getUserContractImg(data) {
        return request.get('apiUrl/api/Money_Card/get_ContractInfo_img', { params: data })
    }

}

export default User
