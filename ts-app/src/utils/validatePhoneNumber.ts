export function ValidatePhoneNumber(str:string){
    const regEx = /^(\+7|7|8)?[\s\-]?\(?[78][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{3}$/;
    return regEx.test(str)
}