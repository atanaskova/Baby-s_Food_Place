export default (state={authData:null},action)=>{
    switch (action.type) {
        case 'AUTH':
            localStorage.setItem('profile',JSON.stringify({...action.data}))
            return {...state,authData:action.data};

        case 'UPDATE':
            return {...state,authData:action.payload};

        case 'LOGOUT':
            localStorage.clear();
            return {...state,authData:null};

        default:
            return state;
    }
}