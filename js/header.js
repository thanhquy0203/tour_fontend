$(document).ready(function() {
  
    let header = `
        <div class="header">
        <!-- navbar  -->
        <nav class="navbar navbar-expand-md p-0 m-0">
          <div class="container-fluid header-content p-0 ">
            <div class="row-header w-100">

              <div class="col-header">
                <button type="button" class="navbar-toggler menu-icon border-0" data-bs-toggle="offcanvas" data-bs-target="#idnavbar">
                  <span class="navbar-toggler-icon " ></span>
                </button>

                <a href="../html/trangchu.html">
                <img src="../image/Logo.png" class="logo-page"  alt="Cheap Travel">
                </a>
              </div>

              <div class="col-header">
                <div class="offcanvas offcanvas-start bg-gray" id="idnavbar">
                  <div class="offcanvas-body">
                    <ul class="navbar-nav " id="" >
                      <li class="nav-item nav-item-header mt-2"><a href="../html/trangchu.html" nav-menu class="nav-link font-header menu p-0 fw-bold text-blue choose">Trang Chủ</a></li>
                      <li class="nav-item nav-item-header my-2  "><a href="../html/xemthem.html" nav-menu class=" nav-link font-header menu text-blue p-0 fw-bold">Tour</a></li>
                      <li class=" nav-item nav-item-header my-2  "><a nav-menu href="../html/khuyenmai.html" class="nav-link font-header menu text-blue p-0 fw-bold">Khuyến Mãi</a></li>
                      <li class=" nav-item nav-item-header my-2  "><a nav-menu href="../html/lienhe.html" class="nav-link font-header menu text-blue p-0 fw-bold">Liên Hệ</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-header" >
                <div class="btn-login" >
                  <a href="#" class="text-blue" data-bs-target="#modalContent" data-bs-toggle="modal" id="btnModal">
                    <i class="fa-solid fa-user" style="width: 25px; height: 30px;"></i>
                    <span id="loginText"> Đăng nhập </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <!-- Nhập thông tin đăng nhập / đăng kí  -->
        <div class="modal" id="modalContent">
            <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered">
              <div class="modal-content">

                <div class="modal-header p-0 border-0" login-header>
                  <ul class="nav nav-tabs w-100 p-0">
                    <li class="nav-item mt-2 ms-3">
                      <a href="#" class="nav-item-link-active nav-link active text-blue font-form fw-bold" data-bs-toggle="tab" data-bs-target="#loginForm">Đăng nhập</a>
                    </li>

                    <li class="nav-item mt-2 ">
                      <a href="#" class="nav-item-link nav-link text-blue font-form fw-bold" data-bs-toggle="tab" data-bs-target="#registerForm">Đăng ký</a>
                    </li>

                    <button class="btn btn-close m-0 p-2 ms-auto rounded-0" data-bs-dismiss="modal"> </button>
                  </ul>
                </div>

                <div class="modal-body">
                  <div class="tab-content" id="tabContent">

                    <!-- form đăng nhập  -->
                    <div class="tab-pane active" id="loginForm" login-form onsubmit="return checkLoginForm()">
                      <form action="" class="loginForm">
                        <div class="row">
                          <div class="col my-2">
                            <label class="my-2 fw-bold" for="userInput">Tên đăng nhập</label>
                            <input type="text" placeholder="Tên đăng nhập" class="form-control" name="userInput" id="userInput">
                            <span id="errUserInput" style="color: red; margin-top: 5px;"></span>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col my-2">
                            <label class="my-2 fw-bold" for="passwordInput">Mật khẩu</label>
                            <input  type="password" placeholder="Mật khẩu" class="form-control" name="passwordInput" id="passwordInput">
                            <span id="errPasswordInput" style="color: red; margin-top: 5px;"></span>
                          </div>
                        </div>

                        <div class="row">
                          <ul class="nav">
                            <li class="nav-item">
                              <a href="#" class="nav-link pe-auto" btn-forget-password data-bs-toggle="tab" data-bs-target="#passwordForm">Quên mật khẩu?</a>
                            </li>
                          </ul>
                        </div>

                        <div class="modal-footer border-0">
                          <button type="submit" id="loginButton" class="btn btn-primary">Đăng nhập</button>
                          <button type="reset" class="btn btn-danger" data-bs-dismiss="modal">Thoát</button>
                        </div>

                      </form>
                    </div>

                    <!-- form đăng ký  -->
                    <div class="tab-pane" register-form id="registerForm" onsubmit="return checkRegisterForm()">
                      <form action="" class="registerForm"> 
                        <div class="row">
                          <div class="col my-2">
                            <label class="my-2 fw-bold" for="user">Tên đăng nhập</label>
                            <input type="text" placeholder="Tên đăng nhập" class="form-control" name="user" id="user">
                            <span id="errUser" style="color: red; margin-top: 5px;"></span>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col my-2">
                            <label class="my-2 fw-bold" for="tel">Số điện thoại</label>
                            <input type="text" placeholder="Số điện thoai" class="form-control" name="tel" id="tel">
                          <span id="errTel" style="color: red; margin-top: 5px;"></span>
                        </div>
                        </div>

                        <div class="row">
                          <div class="col my-2">
                            <label class="my-2 fw-bold" for="email">Email</label>
                            <input  type="text" placeholder="Email" class="form-control" name="" id="email">
                            <span id="errEmail" style="color: red; margin-top: 5px;"></span>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col my-2">
                            <label class="my-2 fw-bold" for="password">Mật khẩu</label>
                            <input type="password" placeholder="Mật khẩu" class="form-control" name="password" id="password">
                            <span id="errPassword" style="color: red; margin-top: 5px;"></span>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col my-2">
                            <label class="my-2 fw-bold" for="confirm-password">Nhập lại mật khẩu</label>
                            <input type="password" placeholder="Mật khẩu" class="form-control" name="confirm-password" id="confirm-password">
                            <span id="errConfirmPassword" style="color: red; margin-top: 5px;"></span>
                          </div>
                        </div>

                        <div class="modal-footer border-0">
                          <button type="submit" class="btn btn-primary" id="registerButton">Đăng ký</button>
                          <button type="reset" class="btn btn-danger" data-bs-dismiss="modal">Thoát</button>
                        </div>
                      </form>
                    </div>

                    <!-- form lấy lại mật khẩu  -->
                    <div class="tab-pane" form-reset-password id="passwordForm" >
                      <div class="modal-header p-0 border-0">
                        <button class="btn btn-close rounded-0" data-bs-dismiss="modal"> </button>
                      </div>

                      <form action="" class="formResetPassword">
                        <div class="row">
                          <div class="col my-2">
                            <label class="my-2 fw-bold" for="re-email">Email</label>
                            <input type="text" placeholder="Email" class="form-control" name="re-email" id="re-email">
                            <span id="errRe-Email" style="color: red; margin-top: 5px;"></span>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col my-2">
                            <label class="my-2 fw-bold" for="reset-password">Mật khẩu</label>
                            <input type="password" placeholder="Mật khẩu" class="form-control" name="reset-password" id="reset-password">
                            <span id="errResetPassword" style="color: red; margin-top: 5px;"></span>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col my-2">
                            <label class="my-2 fw-bold" for="reset-confirm-password">Nhập lại mật khẩu</label>
                            <input type="password" placeholder="Mật khẩu" class="form-control" name="reset-confirm-password" id="reset-confirm-password">
                            <span id="errResetConfirmPassword" style="color: red; margin-top: 5px;"></span>
                          </div>
                        </div>

                        <div class="modal-footer border-0" confirm-btn>
                          <button value="required" type="submit" class="btn btn-primary" >Xác nhận</button>
                          <button type="reset" class="btn btn-danger" return-login-form>Quay lại</button>
                        </div>
                      </form>
                    </div>
                  </div>

                </div>
              </div>
            </div>
        </div>
    </div>
    `
    $("#header").append(header);
})