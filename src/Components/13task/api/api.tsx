import React from "react"
import axios from "axios";


export const testAPI = {

requestAPI(checkBoxValue:boolean) {

return axios.post("https://neko-cafe-back.herokuapp.com/auth/test", {success: checkBoxValue})
   .then((response: any) => {
                return response.data
            });

}
}