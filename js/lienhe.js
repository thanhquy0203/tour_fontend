function checkHT() {
    var hoten = $("#hoTen").val();
    if (hoten == "" || hoten == null) {
        $("#hotenerr").html("Tên không được bỏ trống!");   
        return false;
    } else if (!/^[A-Z][a-z]*(\s[A-Z][a-z]*)+$/.test(hoten)) {
        $("#hotenerr").html("Tên có ít nhất 2 từ, viết hoa chữ cái đầu mỗi từ!");
        return false;
    } else {
        $("#hotenerr").html(""); 
        return true;
    }
}

function checkEmail() {
    var email = $("#diachiemail").val();
    if(email == "" || email == null){
        $("#emailerr").html("Email không được bỏ trống!");
        return false;
    }
    else if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/.test(email)) {
        $("#emailerr").html("Email không hợp lệ");
        return false;
    }
    else{
        $("#emailerr").html("");
        return true;
    }
} 

function checkND(){
    var noidung = $("#noiDung").val();
    if(noidung == "" || noidung == null){
        $("#noidungerr").html("Nội dung không được bỏ trống!");
        return false;
    }
    else if(!/^.{10,}$/.test(noidung)){
        $("#noidungerr").html("Nội dung phải có ít nhất 10 ký tự trở lên!");
        return false;
    }
    else{
        $("#noidungerr").html("");
        return true;
    }
}

function xoaTrang(){
    $("#hoTen").val("");
    $("#noiDung").val("");
    $("#diachiemail").val("");
}

$("#hoTen").blur(function(){
    checkHT();
});

$("#diachiemail").blur(function(){
    checkEmail();
});

$("#noiDung").blur(function(){
    checkND();
});

$(document).ready(function() {
    $('#phanHoi').click(function() {
        var hotenIsValid = checkHT();
        var emailIsValid = checkEmail();
        var noidungIsValid = checkND();
        if (hotenIsValid && emailIsValid && noidungIsValid) {
            $('#successModal').modal('show');
            xoaTrang();
        }
    });
});
