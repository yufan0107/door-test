var door = document.getElementById("addr");
var waterControl = document.getElementById("water");
var wush = document.getElementById("wus");
door.addEventListener("click",function(){
    var password = 123456;
    var input;
    var entry_count = 0;
    var entry_limit = 3;
    var out_of_limit = false;

    while(password!=input && !out_of_limit){
        entry_count++;
        if(entry_count<=entry_limit){
            input = prompt("請輸入密碼")
        }
        else{
            out_of_limit = true;
        }
    }
    if(out_of_limit){
        alert("輸入錯誤超過次數")
    }
    else{
        alert("登入成功")
        this.href = "http://120.119.67.10:55122"
    }
})
// waterControl.addEventListener("click",function(){
//     var password = 1234;
//     var input;
//     var entry_count = 0;
//     var entry_limit = 3;
//     var out_of_limit = false;

//     while(password!=input && !out_of_limit){
//         entry_count++;
//         if(entry_count<=entry_limit){
//             input = prompt("請輸入密碼")
//         }
//         else{
//             out_of_limit = true;
//         }
//     }
//     if(out_of_limit){
//         alert("輸入錯誤超過次數")
//     }
//     else{
//         alert("登入成功")
//         this.href = "http://120.119.67.10:55168"
//     }
// })
wush.addEventListener("click",function(){
    var password = 12345;
    var input;
    var entry_count = 0;
    var entry_limit = 3;
    var out_of_limit = false;

    while(password!=input && !out_of_limit){
        entry_count++;
        if(entry_count<=entry_limit){
            input = prompt("請輸入密碼")
        }
        else{
            out_of_limit = true;
        }
    }
    if(out_of_limit){
        alert("輸入錯誤超過次數")
    }
    else{
        alert("登入成功")
        this.href = "http://120.119.67.10:55122"
    }
})
    // function change() {
    //     document.body.style.background = document.getElementById("colors").value
    // }
    document.getElementById("colors").addEventListener("change", function() {
        document.body.style.background = document.getElementById("colors").value
})