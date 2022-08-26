const stateDefault = {
  arrSinhVien: [
    { id: 1, name: "Nguyễn Văn A", tel: "123", email: "a@gmailcom" },
    { id: 2, name: "Nguyễn Văn B", tel: "456", email: "b@gmailcom" },
    // { id: "", name:"" , tel: "", email: "" },
    // { id: "", name: " ", tel: "", email: "" },
  ],
  sinhVien: {
    id: "",
    name: "",
    tel: "",
    email: "",
  },
  arrSinhVienSearch:[],
 
};

export const formReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "HANDLE_CHANGE_INPUT": {
      //b1: lấy dữ liệu từ action
      let { id, value } = action.payload;
      //b2: clone state (array/object)

      let sinhVienUpdate = { ...state.sinhVien };
      sinhVienUpdate[id] = value;

      //b3: cập nhật lại state
      state.sinhVien = sinhVienUpdate;
      return { ...state };
    }
    case "HANDLE_SUBMIT": {
      let { sinhVien } = action.payload;
      let arrSinhVienUpdate = [...state.arrSinhVien];
      let index = arrSinhVienUpdate.find((sv) => sv.id === sinhVien.id);
      if (index) {
        alert("Mã sinh viên không được trùng, vui lòng kiểm tra lại");
        return { ...state };
      } else {
        for (let key in sinhVien) {
          if (sinhVien[key].trim() === "") {
            alert("Thông tin sinh viên không được để trống");
            return { ...state };
          }
        }
      }
      arrSinhVienUpdate.push(sinhVien);
      state.arrSinhVien = arrSinhVienUpdate;
      return { ...state };
    }
    case "XOA_SINH_VIEN": {
      let { svClick } = action.payload;
      let arrSinhVienUpdate = [...state.arrSinhVien];
      arrSinhVienUpdate = arrSinhVienUpdate.filter((sv) => sv.id !== svClick);
      state.arrSinhVien = arrSinhVienUpdate;
      return { ...state };
    }
    case "EDIT_SINH_VIEN": {
      let { svClickEdit } = action.payload;
      let sinhVienUpdate = { ...state.sinhVien };
      sinhVienUpdate = svClickEdit;
      state.sinhVien = sinhVienUpdate;
      return { ...state };
    }
    case "UPDATE_SINH_VIEN": {
      let { svUpdate } = action.payload;
      let arrSinhVienUpdate = [...state.arrSinhVien];
      let index = arrSinhVienUpdate.findIndex((sv) => sv.id === svUpdate.id);
      if (index !== -1) {
        arrSinhVienUpdate[index] = svUpdate;
      } else {
        alert("Không được thay đổi mã sinh viên");
        // document.getElementById('id').property='disabled'
      }
      state.arrSinhVien = arrSinhVienUpdate;
      return { ...state };
    } 
    // case "HANDLE_SEARCH":{  
    //   debugger   
    //   let {svSearch} =action.payload
    //   let arrSinhVienSearchUpdate=[...state.arrSinhVienSearch,svSearch]
    //   let arrSinhVienUpdate = [...state.arrSinhVien];
    //   // console.log(arrSinhVienSearchUpdate);
      
    //   arrSinhVienUpdate = arrSinhVienUpdate.filter(sv=>sv.name.toLowerCase().trim().includes(svSearch))     
     
    //     if(!arrSinhVienUpdate){
    //       arrSinhVienUpdate=arrSinhVienSearchUpdate
    //       state.arrSinhVien=arrSinhVienUpdate
    //       return{...state}
    //     }else{
    //       state.arrSinhVien = arrSinhVienUpdate
    //       return {...state}
    //     }
   
    // }
    case "HANDLE_SEARCH":{  
        
      let {svSearch} =action.payload
      svSearch=svSearch.trim().toLowerCase()
      // let arrSinhVienSearchUpdate=[...state.arrSinhVienSearch,svSearch]
      let arrSinhVienUpdate = [...state.arrSinhVien];
      // console.log(arrSinhVienSearchUpdate);      
      arrSinhVienUpdate = arrSinhVienUpdate.filter(sv=>sv.name.toLowerCase().trim().includes(svSearch))     
         state.arrSinhVienSearch = arrSinhVienUpdate
        console.log(state);        

          return {...state}
   
    }
    default:
      return state;
  }
};
