function delWord(el) {
    var input = $api.prev(el, '.txt');
    input.value = '';
}

function login() {
    api.openWin({
        name: 'login',
        url: 'login.html',
        opaque: true,
        vScrollBarEnabled: false
    });
}

function ensure() {
    api.showProgress({
        title: '正在登录...',
        modal: false
    });
    var name = $api.byId('username').value;
    var pwd = $api.byId('password').value;

    var loginUrl = '/user/login';
    var bodyParam = {
        'username': name,
        'password': pwd
    }
    ajaxRequest(loginUrl, 'post', bodyParam, function (ret, err) {
        if (ret) {
            alert(JSON.stringify(ret));
            $api.setStorage('userid',ret.userId)
            setTimeout(function () {
                api.closeWin();
            }, 100);
        } else {
            api.alert({
                msg: '请验证邮箱'
            });
        }
        api.hideProgress();
    })
}

apiready = function () {
    var header = $api.byId('header');
    $api.fixIos7Bar(header);

};