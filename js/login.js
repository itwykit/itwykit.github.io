document.addEventListener('DOMContentLoaded', function() {
    // 获取表单元素
    const form = document.querySelector('form');

    // 添加提交事件监听器
    form.addEventListener('submit', function(event) {
        // 阻止默认的表单提交行为
        event.preventDefault();

        // 获取输入字段
        const username = document.querySelector('input[type="text"]');
        const password = document.querySelector('input[type="password"]');

        // 检查用户名和密码是否为空
        if (username.value.trim() === '' || password.value.trim() === '') {
            alert('用户名和密码不能为空，请重新输入！');
        } else {
            // 如果验证通过，允许表单提交
            form.submit();
        }
    });
});