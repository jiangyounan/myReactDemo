/**
 * Created by wangqian on 16/1/28.
 */


/*
* 是否是手机号
* @return bool
* */
function isMobile(mobile){

    return /^1[34578]\d{9}$/.test(mobile);
}

/*
* 是否是身份证号码
* @return bool
* */
function isIdCard(idCard){
    var isIDCard1=/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/;
    var isIDCard2=/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{4}$/;

    if(isIDCard1.test(idCard)){
        return true;
    }else if(isIDCard2.test(idCard)){
        return true;
    }
    return false;
}

/*
* 是否是中文或者英文
* @return bool
* */
function isChineseOrEnglish(str){
    return /^[\u4e00-\u9fa5_a-zA-Z_]+$/.test(str);
}

/*
* 是否是邮箱
* @return bool
* */
function isEmail(email){
    return /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/.test(email);
}

export default  {
    isMobile,
    isIdCard,
    isChineseOrEnglish,
    isEmail
}