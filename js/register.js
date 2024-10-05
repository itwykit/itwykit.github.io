function check() {
  let username = document.getElementById("name").value;
  let password = document.getElementById("password").value;
  let confirm_password = document.getElementById("password-confirmation").value;
  let email = document.getElementById("email").value;
  const emailReg = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)$/;

  if (username == "") {
    alert("用户名不能为空");
    return false;
  }

  if (password != confirm_password && password != "") {
    alert("两次密码不一致，请重新输入！");
    return false;
  }

  if (!emailReg.test(email)) {
    alert("请填写正确的邮箱格式！");
    return false;
  }

  return true;
}
