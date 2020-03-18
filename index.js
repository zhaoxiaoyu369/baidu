'use strict';

$(function () {
    var name = false,
        psd = false,
        phone = false,
        yz = false;
    var num = 59;
    //输入
    $('#name').focus(function () {
        $('#namem').html('设置后不可更改，中英文皆可，最长14个英文或7个汉字');
    });
    $('#psd').focus(function () {
        $('#psdm').html('长度为8~14个字符，字母/数字/标点符号至少两种，不允许有空格、中文');
    });
    //用户名
    $('#name').blur(function () {
        if ($('#name').val().length > 14) {
            $('#namem').html('用户名长度不能超过14个字符');
        } else if (!(/^[\u4E00-\u9FA5A-Za-z0-9_]+$/.test($('#name').val()) && !/^[0-9]*$/.test($('#name').val()))) {
            $('#namem').html('用户名只支持中英文，数字，下划线且不能为纯数字');
        } else {
            $('#namem').html('');
            name = true;
        }
    });
    //手机号
    $('#phone').blur(function () {
        if (!/^\d{11}$/.test($('#phone').val())) {
            $('#phonem').html('手机号码格式不正确');
        } else {
            $('#phonem').html('');
            phone = true;
        }
    });
    //密码
    $('#psd').blur(function () {
        if ($('#psd').val().length < 8 || $('#psd').val().length > 14) {
            $('#psdm').html('密码设置不符合要求');
        } else if (!/^([\u4e00-\u9fa5]|[\S])+$/.test($('#psd').val())) {
            $('#psdm').html('密码设置不符合要求');
        } else {
            $('#psdm').html('');
            psd = true;
        }
    });
    //验证码
    $('#yz').blur(function () {
        if (!$('#yz').val()) {
            $('#vrfm').html('请输入验证码');
            yz = false;
        } else {
            $('#vrfm').html('');
            yz = true;
        }
    });
    //验证码
    $('#vrf').click(function () {
        $('#vrf').addClass('disable').attr({ 'disabled': 'disabled' });
        var time = setInterval(function () {
            $('#vrf').html(num--);
        }, 1000);
        setTimeout(function () {
            $('#vrf').removeClass('disable').removeAttr('disabled');
            clearInterval(time);
            $('#vrf').html('获取验证码');
            num = 59;
        }, 60000);
    });
    //表单
    $('#button').click(function () {
        if (!(name && psd && phone && yz)) {
            alert('注册失败');
        } else {
            alert('注册成功');
        }
    });
});

