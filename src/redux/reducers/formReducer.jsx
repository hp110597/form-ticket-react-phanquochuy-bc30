const stateDefault = {
  arrSinhVien: [
    { id: 1, name: "Nguyễn Văn A", tel: "123", email: "a@gmailcom" },
    { id: 2, name: "Nguyễn Văn B", tel: "456", email: "b@gmailcom" },
  ],
  sinhVien: {
    id: "",
    name: "",
    tel: "",
    email: "",
  },
  error: {
    id: "",
    name: "",
    tel: "",
    email: "",
  },
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
      debugger;

      let { svUpdate } = action.payload;
      let arrSinhVienUpdate = [...state.arrSinhVien];
      let svCapNhat = arrSinhVienUpdate.find((sv) => sv.id === svUpdate.id);
      if (svCapNhat) {
        for (let key in svCapNhat) {
          svCapNhat[key] = svUpdate[key];
        }
        // arrSinhVienUpdate = svCapNhat;
      }else{
        state.arrSinhVien.push(arrSinhVienUpdate)
      }
    //   state.arrSinhVien = arrSinhVienUpdate;

      console.log(state.arrSinhVien);
      return { ...state };
    }
    default:
      return state;
  }
};
