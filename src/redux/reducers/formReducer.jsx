
const stateDefault = {
    arrSinhVien:[{id:1,name:'Nguyễn Văn A',tel:'123',email:'a@gmailcom'},{id:2,name:'Nguyễn Văn B',tel:'456',email:'b@gmailcom'}],
    sinhVien:{
        id:'',
        name:'',
        tel:'',
        email:''
    }
}

export const formReducer = (state=stateDefault,action)=>{
    switch(action.type){
        case'HANDLE_CHANGE_INPUT':{
            //b1: lấy dữ liệu từ action
            let {id,value} = action.payload
            //b2: clone state (array/object)
            // let arrSinhVienUpdate=[...state.arrSinhVien]
            let sinhVienUpdate={...state.sinhVien}
            sinhVienUpdate[id]=value
            // arrSinhVienUpdate.push(sinhVienUpdate)
            //b3: cập nhật lại state
            state.sinhVien=sinhVienUpdate
            return {...state}
        }
        case'HANDLE_SUBMIT':{
            let {sinhVien} = action.payload
            let arrSinhVienUpdate=[...state.arrSinhVien]
            // let sinhVienUpdate={...sinhVien}
            arrSinhVienUpdate.push(sinhVien)
            state.arrSinhVien=arrSinhVienUpdate
            return {...state}
        }
        default: return state
    }
}