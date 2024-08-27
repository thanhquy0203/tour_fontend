$(document).ready(function() {
    const btnForgetPassword = document.querySelector("[btn-forget-password]");
    const loginForm = document.querySelector("[login-form]");
    const registerForm = document.querySelector("[register-form]");
    const formResetPassword = document.querySelector("[form-reset-password]");
    const loginHeader = document.querySelector("[login-header]");
    const confirmBtn = document.querySelector("[confirm-btn]");
    const returnLoginForm = document.querySelector("[return-login-form]");
    const btnClose = document.querySelectorAll(".btn-close");
    
    // các biến báo lỗi
    var errUserInput = document.getElementById("errUserInput");
    var errPasswordInput = document.getElementById("errPasswordInput");
    var errUser = document.getElementById("errUser");
    var errTel = document.getElementById("errTel");
    var errEmail = document.getElementById("errEmail");
    var errPassword = document.getElementById("errPassword");
    var errConfirmPassword = document.getElementById("errConfirmPassword");
    var errRe_Email = document.getElementById("errRe-Email");
    var errResetPassword = document.getElementById("errResetPassword");
    var errResetConfirmPassword = document.getElementById("errResetConfirmPassword");
    
    // biến lưu trữ dữ liệu
    var userInput_storage = ""
    var user_storage = ""
    var password_storage = ""
    var email_storage = ""
     
    // // thao tác chuyển qua tab quên mật khẩu 
    btnForgetPassword.addEventListener("click", () => {
        errRe_Email.innerHTML = ""
        errResetPassword.innerHTML = ""
        errResetConfirmPassword.innerHTML = ""
    
        // Bắt sự kiện bấm vào nút quên mật khẩu
        formResetPassword.classList.add("active")
        loginForm.classList.toggle("active");
        loginHeader.classList.toggle("d-none"); // ẩn thanh đăng nhập / đăng ký
    
        confirmBtn.onclick = function(e) {
            e.preventDefault(); // ngăn chặn sự kiện mặc định của phần tử
            if (checkPasswordForm()) {
                loginForm.classList.add("active");
                formResetPassword.classList.toggle("active");
                loginHeader.classList.remove("d-none")
                btnForgetPassword.classList.remove("active");
            }
    
        };
        return true;
    })
    
    // thao tác quay về form đăng nhập từ form quên mật khẩu
    returnLoginForm.addEventListener("click", () => {
        loginForm.classList.add("active");
        formResetPassword.classList.toggle("active");
        loginHeader.classList.remove("d-none")
        btnForgetPassword.classList.remove("active");
    
        return true;
    })
    
    // thao tác quay về form đăng nhập từ form đăng ký
    document.getElementById("registerButton").addEventListener("click", function(event) {
        event.preventDefault();
        
        if (checkRegisterForm()) {
            registerForm.classList.toggle("active");
            // thay đổi modal header
            const navItemLink = document.querySelector(".nav-item-link.active");
            const navItemLinkActive = document.querySelector(".nav-item-link-active");
    
            navItemLink.classList.remove("active");
            navItemLinkActive.classList.add("active");
            // registerForm.classList.remove("active");
            loginForm.classList.toggle("active")
    
        }
    
    });
    
    // thao tác trở về form đăng nhập sau khi bấm nút x
    btnClose.forEach(function(btn) {
        btn.onclick = function() {
            // Lấy các form đăng nhập / đăng ký / quên mk 
            const loginForm_2 = document.querySelector(".loginForm");
            const registerForm_2 = document.querySelector(".registerForm");
            const formResetPassword_2 = document.querySelector(".formResetPassword");
        
            loginForm_2.reset();
            registerForm_2.reset();
            formResetPassword_2.reset();
        
            // kiểm tra nếu có class ở trong phần tử đó
            if (registerForm.classList.contains("active")) {
                const navItemLink = document.querySelector(".nav-item-link.active");
                const navItemLinkActive = document.querySelector(".nav-item-link-active");
        
                navItemLink.classList.remove("active");
                navItemLinkActive.classList.add("active");
                registerForm.classList.remove("active");
                loginForm.classList.add("active");
            }
    
            if (formResetPassword.classList.contains("active")) {
                loginHeader.classList.toggle("d-none");
                formResetPassword.classList.remove("active");
                loginForm.classList.add("active");
    
            }
        };
    })
    
    // lấy tên user sau khi đăng nhập 
    document.getElementById("loginButton").addEventListener("click", function(event) {
        event.preventDefault(); // Ngăn chặn hành vi mặc định của button (chạy submit form)
            
        if (checkLoginForm() ) {
            var loginText = document.getElementById("loginText");
            var userInput = document.getElementById("userInput").value;
            loginText.innerText = userInput; // Cập nhật nội dung của "loginText" bằng giá trị nhập vào
            $('#modalContent').modal('hide'); // Ẩn modal sau khi đăng nhập thành công
        }
    
    });
    
    // thao tác không cho bật form đăng nhập sau khi đăng nhập thành công
    $('#modalContent').on('show.bs.modal', function (e) {
        if (user_storage !== "" && user_storage === userInput_storage) {
            e.preventDefault(); 
        }
    });
    
    // thao tác reset lại các form
    $('#modalContent').on('hidden.bs.modal', function () {
        if (registerForm.classList.contains("active")) {
           errUser.innerHTML = ""
           errTel.innerHTML = ""
           errEmail.innerHTML = ""
           errPassword.innerHTML =""
           errConfirmPassword.innerHTML = ""
        }
    
        if (formResetPassword.classList.contains("active")) {
            errRe_Email.innerHTML = ""
            errResetPassword.innerHTML = ""
            errResetConfirmPassword = ""
        }
    
        if (loginForm.classList.contains("active")) {
            errPasswordInput.innerHTML = ""
            errUserInput.innerHTML = ""
        }
    
    })

    // ------------ SEARCH ------------
    const departureInput = document.querySelector("#departure");
    const destinationInput = document.querySelector("#destination");
    const recomentList = [
        "An Giang",
        "Bà Rịa - Vũng Tàu",
        "Bạc Liêu",
        "Bắc Giang",
        "Bắc Kạn",
        "Bắc Ninh",
        "Bến Tre",
        "Bình Dương",
        "Bình Định",
        "Bình Phước",
        "Bình Thuận",
        "Cà Mau",
        "Cao Bằng",
        "Cần Thơ",
        "Đà Nẵng",
        "Đắk Lắk",
        "Đắk Nông",
        "Điện Biên",
        "Đồng Nai",
        "Đồng Tháp",
        "Gia Lai",
        "Hà Giang",
        "Hà Nam",
        "Hà Nội",
        "Hà Tĩnh",
        "Hải Dương",
        "Hải Phòng",
        "Hậu Giang",
        "Hòa Bình",
        "Hưng Yên",
        "Khánh Hòa",
        "Kiên Giang",
        "Kon Tum",
        "Lai Châu",
        "Lạng Sơn",
        "Lào Cai",
        "Lâm Đồng",
        "Long An",
        "Nam Định",
        "Nghệ An",
        "Ninh Bình",
        "Quảng Bình",
        "Quảng Nam",
        "Quảng Ngãi",
        "Quảng Ninh",
        "Quảng Trị",
        "Sóc Trăng",
        "Sơn La",
        "Tây Ninh",
        "Thái Bình",
        "Thái Nguyên",
        "Thanh Hóa",
        "Thừa Thiên Huế",
        "Tiền Giang",
        "TP. Hồ Chí Minh",
        "Tuyên Quang",
        "Vĩnh Long",
        "Vĩnh Phúc",
        "Yên Bái"
    ];
    const autoBoxDeparture = document.querySelector(".departure .autobox");
    const autoBoxDestination = document.querySelector(".destination .autobox");
    
    const showAddress = (list, num, autobox, input) => {
        let tempArr = [];
        let listData;

        if (!list.length) {
            listData = `<li>${input.value}</li>`
        }
        else {
            // Giới hạn số lượng kết quả hiện ra màn hình là num
            for (let i = 0; i < list.length && i < num; i++) {
                tempArr.push(list[i]);
            }
            listData = tempArr.join('')
        }
        autobox.innerHTML = listData;
    };
    
    departureInput.addEventListener("keyup", (e) => {
        let checkData = e.target.value; // dữ liệu đầu vào
        let dataArr = []; // mảng kết quả sau khi được lọc dựa vào dữ liệu đầu vào

        if (checkData) {
            // Thực hiện chức năng lọc dựa vào chữ cái đầu của dữ liệu đầu vào
            dataArr = recomentList.filter(data => {
                return data.toLocaleLowerCase().startsWith(checkData.toLocaleLowerCase());
            });
            
            // Thực hiện thao tác chuyển các data trong mảng kết quả về dạng <li></li> để in ra HTML
            dataArr = dataArr.map(data => {
                return data = `<li>${data}</li>`;
            });
            // Thêm class active để bật bảng kết quả tìm kiếm
            autoBoxDeparture.classList.add("active");

            // Hàm thực hiện chức năng in các kết quả tìm kiếm
            showAddress(dataArr, 5, autoBoxDeparture, departureInput);

            // Thực hiện chức năng bấm vào kết quả thì kết quả được hiện lên ô input
            let liItem = autoBoxDeparture.querySelectorAll("li");
            for (let i = 0; i < liItem.length; i++) {
                liItem[i].addEventListener("mousedown", () => {
                    departureInput.value = liItem[i].innerHTML;
                    autoBoxDeparture.classList.remove("active");
                })
            }
        }
        else {
            autoBoxDeparture.classList.remove("active");
        }
    });

    // Thực hiện thao tác đóng bảng kết quả khi click ra ngoài 
    departureInput.addEventListener("blur", () => {
        autoBoxDeparture.classList.remove("active");
    });

    destinationInput.addEventListener("keyup", (e) => {
        let checkData = e.target.value; // dữ liệu đầu vào
        let dataArr = []; // mảng kết quả sau khi được lọc dựa vào dữ liệu đầu vào

        if (checkData) {
            // Thực hiện chức năng lọc dựa vào chữ cái đầu của dữ liệu đầu vào
            dataArr = recomentList.filter(data => {
                return data.toLocaleLowerCase().normalize('NFD').includes(checkData.toLocaleLowerCase().normalize('NFD'));
            });
            
            // Thực hiện thao tác chuyển các data trong mảng kết quả về dạng <li></li> để in ra HTML
            dataArr = dataArr.map(data => {
                return data = `<li>${data}</li>`;
            });
            // Thêm class active để bật bảng kết quả tìm kiếm
            autoBoxDestination.classList.add("active");

            // Hàm thực hiện chức năng in các kết quả tìm kiếm
            showAddress(dataArr, 5, autoBoxDestination, destinationInput);

            // Thực hiện chức năng bấm vào kết quả thì kết quả được hiện lên ô input
            let liItem = autoBoxDestination.querySelectorAll("li");
            for (let i = 0; i < liItem.length; i++) {
                liItem[i].addEventListener("mousedown", () => {
                    destinationInput.value = liItem[i].innerHTML;
                    autoBoxDestination.classList.remove("active");
                })
            }
        }
        else {
            autoBoxDestination.classList.remove("active");
        }
    });

    // Thực hiện thao tác đóng bảng kết quả khi click ra ngoài 
    destinationInput.addEventListener("blur", () => {
        autoBoxDestination.classList.remove("active");
    });

    flatpickr("#time", {
        dateFormat: "d-m-Y"
    });
    
    //------------- REGEX -------------
    
    // kiểm tra regex
    function checkInputInfo(value, regex, errInput, message) {
        if (value == "" || value == null) {
            errInput.innerHTML = "Vui lòng nhập thông tin"
            return false;
        }
    
        if (regex.test(value)) {
            errInput.innerHTML = "";
        } else {
            errInput.innerHTML = message;
            return false;
        }
    
        return true;
    }

    function checkPassword(pass, errPass) {
        if (pass.length == 0) {
            errPass.innerHTML = "Vui lòng nhập thông tin"
            return false;
        }
        else if (pass.length < 8) {
            errPass.innerHTML = "Mật khẩu phải từ 8 ký tự"
            return false;
        }
        else if (!/\d/.test(pass)) {
            errPass.innerHTML = "Mật khẩu phải có ít nhất 1 ký tự số"
            return false;
        }
        else if (!/\W/.test(pass)) {
            errPass.innerHTML = "Mật khẩu phải có ít nhất 1 ký tự đặc biệt"
            return false;
        }
        else if (!/[A-Z]/.test(pass)) {
            errPass.innerHTML = "Mật khẩu phải có ít nhất 1 ký tự là chữ in hoa"
            return false;
        }
        else {
            errPass.innerHTML = ""
            return true;
        }

       
    }

    function checkRePassword(pass, rePass, errRePass) {
        if (rePass == "" || rePass == null) {
            errRePass.innerHTML= "Vui lòng nhập thông tin"
            return false;
        }
    
        if (rePass !== pass) {
            errRePass.innerHTML="Mật khẩu không trùng";
            return false;
        } else {
            errRePass.innerHTML="";
        }
        return true;
    }
    
    // check loginForm
    function checkLoginForm() {
        // tên đăng nhập 
        var userInput  = document.getElementById("userInput").value;
    
        if (!checkInputInfo(userInput, /^[a-zA-Z0-9\s]+$/, errUserInput, "Tên đăng nhập không được chứa ký tự dặc biệt")) {
            return false
        }

        userInput_storage = userInput
    
        // password 
        var passwordInput = document.getElementById("passwordInput").value;
        
        if (!checkPassword(passwordInput, errPasswordInput))
            return false;
    
        // kiểm tra thông tin 
    
        //(user_storage !== "" && user_storage !== userInput) ||
       
        if ( user_storage == "" || (user_storage != "" && user_storage !== userInput)  ) {
            errUserInput.innerHTML = "Người dùng không tồn tại";
            return false;
        } else {
            errUserInput.innerHTML = ""
        }
    
        if (passwordInput !== password_storage) {
            errPasswordInput.innerHTML = "Mật khẩu không đúng";
            return false;
        } else {
            errPasswordInput.innerHTML = "";
            return true;
        }
    }
    
    // check RegisterForm
    function checkRegisterForm() {
        // tên đăng nhập
        var user = document.getElementById("user").value;
        
        if (!checkInputInfo(user, /^[a-zA-Z0-9\s]+$/, errUser, "Tên đăng nhập không được chứa ký tự dặc biệt")) {
            return false
        }
        user_storage = user
        
        // số điện thoại
        var tel = document.getElementById("tel").value;
        var telRegex = /^\d*$/;
       
        if (!checkInputInfo(tel, telRegex, errTel, "Số điện thoại chỉ chứa ký tự số")) {
            return false
        } else if (!/[0-9]{10}/.test(tel)) {
            errTel.innerHTML = "Số điện thoại phải chứa 10 ký tự số"
            return false
        } else if (!/^(096|097|098|086|090|093|089)\d{7}$/.test(tel)) {
            errTel.innerHTML = "Số điện thoại phải 10 ký tự số bao gồm các số đầu: 096, 097, 098, 086, 090, 093, 089";
            return false;
        }
        
        // email
        var email = document.getElementById("email").value;
        var emailRegex = /^[a-zA-z][a-zA-Z0-9]*@gmail.com$/;
    
        if (!checkInputInfo(email, emailRegex, errEmail, "Email phảii bắt đầu bằng chữ cái, không bao gồm kí tự đặc biệt và kết thúc bằng @gmail.com")) {
            return false;
        } 
           
        email_storage = email
    
        // mật khẩu
        var password = document.getElementById("password").value;
        
        if (!checkPassword(password,  errPassword)) 
            return false
        
        // nhập lại mật khẩu
        var confirm_password = document.getElementById("confirm-password").value;
    
        if (!checkRePassword(password, confirm_password, errConfirmPassword))
            return false;
        password_storage = confirm_password;
        return true;
    }
    
    // check checkPasswordForm 
    function checkPasswordForm() {
    
        // email
        var re_email = document.getElementById("re-email").value;
        var re_emailRegex = /^[a-zA-z][a-zA-Z0-9]*@gmail.com$/;
        
        
        if (!checkInputInfo(re_email, re_emailRegex, errRe_Email, "Email phảii bắt đầu bằng chữ cái, không bao gồm kí tự đặc biệt và kết thúc bằng @gmail.com")) {
            return false;
        }
    
        // mật khẩu

        var reset_password = document.getElementById("reset-password").value;
        
        if (!checkPassword(reset_password, errResetPassword)) {
            return false;
        }
    
        // nhập lại mật khẩu
        
        var reset_confirm_password = document.getElementById("reset-confirm-password").value;

        if (!checkRePassword(reset_password, reset_confirm_password, errResetConfirmPassword)) {
            return false;
        }
        password_storage = reset_confirm_password;
        return true;
    }
})



