export default function (state = null, action) {
    console.log('I am in reducer!!!', action.type);
    switch (action.type) {
        case "REGISTER":
            console.log('action.payload Register', action.payload.data);
            if (action.payload.data.token) {
                sessionStorage.setItem("token",action.payload.data.token);
                return true;
            }
            return false;
        case "LOGIN":
            console.log('action.payload Login',action.payload);
            if (action.payload.data.token) {
                sessionStorage.setItem("token",action.payload.data.token);
                return true;
            }
            return false;

        default: return state;
    }


}