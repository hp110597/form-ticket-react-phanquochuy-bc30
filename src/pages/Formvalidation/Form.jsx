import React, { Component } from "react";
import { connect } from "react-redux";

class Form extends Component {
  handleSubmit = (e) => {
    e.preventDafault();
    const action = {
      type:'HANDLE_SUBMIT',
      payload:{
        sinhVien:{...this.props.formReducer.sinhVien}
      }
      
    }
    this.props.dispatch(action)

  };

  render() {
    let {sinhVien} = this.props.formReducer;
    return (
      <form className="card" >
        <div className="card-header bg-dark text-white fs-3 ">
          Thông tin sinh viên
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-6">
              <div className="form-group mb-3">
                <p>Mã sinh viên</p>
                <input
                  name="id"
                  id="id"
                  value={sinhVien.id}
                  className="w-100"
                  style={{ padding: 5 }}
                  onChange={(e) => {
                    const action = {
                      type: "HANDLE_CHANGE_INPUT",
                      payload: {
                        id: e.target.id,
                        value: e.target.value,
                      },
                    };
                    this.props.dispatch(action);
                  }}
                />
              </div>
              <div className="form-group">
                <p>Số điện thoại</p>
                <input
                  name="tel"
                  id="tel"
                  value={sinhVien.tel}
                  className="w-100"
                  style={{ padding: 5 }}
                  onChange={(e) => {
                    const action = {
                      type: "HANDLE_CHANGE_INPUT",
                      payload: {
                        id: e.target.id,
                        value: e.target.value,
                      },
                    };
                    this.props.dispatch(action);
                  }}
                />
              </div>
              <button onClick={this.handleSubmit} className="btn btn-success mt-5">Thêm sinh viên</button>
            </div>
            <div className="col-6">
              <div className="form-group mb-3">
                <p>Họ tên</p>
                <input
                  name="name"
                  id="name"
                  value={sinhVien.name}
                  className="w-100"
                  style={{ padding: 5 }}
                  onChange={(e) => {
                    const action = {
                      type: "HANDLE_CHANGE_INPUT",
                      payload: {
                        id: e.target.id,
                        value: e.target.value,
                      },
                    };
                    this.props.dispatch(action);
                  }}
                />
              </div>
              <div className="form-group">
                <p>Email</p>
                <input
                  name="email"
                  id="email"
                  value={sinhVien.email}
                  className="w-100"
                  style={{ padding: 5 }}
                  onChange={(e) => {
                    const action = {
                      type: "HANDLE_CHANGE_INPUT",
                      payload: {
                        id: e.target.id,
                        value: e.target.value,
                      },
                    };
                    this.props.dispatch(action);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  formReducer: state.formReducer,
});

export default connect(mapStateToProps)(Form);
