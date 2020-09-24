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


