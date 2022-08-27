import React, { Component } from "react";
import { connect } from "react-redux";

class Table extends Component {

  renderTable = () =>{
    let { arrSinhVien,arrSinhVienSearch } = this.props.formReducer;
    if(!arrSinhVienSearch.length){
      return arrSinhVien.map((sv, index) => {
        return (
          <tr key={index}>
            <td>{sv.id}</td>
            <td>{sv.name}</td>
            <td>{sv.tel}</td>
            <td>{sv.email}</td>
            <td>
              <button onClick={()=>{
                const action={
                  
                  type: 'XOA_SINH_VIEN',
                  payload:{
                    svClick:sv.id
                  }               
                }
                this.props.dispatch(action)
              }} className="btn btn-danger mx-2">Delete</button>
              <button onClick={()=>{
                
                const action= {
                  type:'EDIT_SINH_VIEN',
                  payload:{
                    svClickEdit:sv
                  }
                }
                // console.log(sv);
                this.props.dispatch(action)
            
              }} className="btn btn-primary mx-2">Edit</button>
            </td>
          </tr>
        );
      })
    } else {
      return arrSinhVienSearch.map((sv, index) => {
        return (
          <tr key={index}>
            <td>{sv.id}</td>
            <td>{sv.name}</td>
            <td>{sv.tel}</td>
            <td>{sv.email}</td>
            <td>
              <button onClick={()=>{
                const action={
                  type: 'XOA_SINH_VIEN',
                  payload:{
                    svClick:sv.id
                  }               
                }
                this.props.dispatch(action)
              }} className="btn btn-danger mx-2">Delete</button>
              <button onClick={()=>{
                
                const action= {
                  type:'EDIT_SINH_VIEN',
                  payload:{
                    svClickEdit:sv
                  }
                }
                // console.log(sv);
                this.props.dispatch(action)
            
              }} className="btn btn-primary mx-2">Edit</button>
            </td>
          </tr>
        );
      })
    }
  }


  
  render() {
    
    // let { arrSinhVien,arrSinhVienSearch } = this.props.formReducer;
    return (
      <table className="table">
        <thead className="bg-dark text-white py-5">
          <tr>
            <th>Mã SV</th>
            <th>Họ tên</th>
            <th>Số điện thoại</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody> 
          {this.renderTable()}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  formReducer: state.formReducer
});

export default connect(mapStateToProps)(Table);
