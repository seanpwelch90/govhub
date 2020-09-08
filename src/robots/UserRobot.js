import React from 'react';
import axios from 'axios';


class User {



    async login(username,password) {

        const data = {
            identifier: username,
            password: password
          };
        
        const res = await axios
            .post("https://app.gwoodhouse.com/auth/local", data);
        if (res.data.jwt) {
            localStorage.setItem("currentUser", JSON.stringify(res.data));
        }
        return;

    }

    async logOut() {
        localStorage.removeItem("currentUser");
        return;
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('currentUser'));;
      }


};

export default new User();





// return axios
//             .post("https://app.gwoodhouse.com/auth/local", data)
//             .then((res) => {
//               if(res.data.jwt){
//                   localStorage.setItem("currentUser", JSON.stringify(response.data))
//               }
//               localStorage.setItem('jwt', res.data.jwt);
//               if(res.status === 200){
//                 this.props.history.push("/");
//                 console.log('Successfully Login');
//             }
//             })
//             .catch(err => console.log(err));
