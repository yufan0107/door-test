var door = document.getElementById("addr");
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
        // document.getElementById("test").innerHTML= '<a href="http://120.119.67.10:5122">鐵捲門</a>'
        // document.getElementById("addr").innerHTML = "鐵捲門"
        // .scc = '<a href="http://120.119.67.10:5122">鐵捲門</a>'
        this.href = "http://120.119.67.10:5122"
    }
    // var door = document.getElementById("addr");
    // door.addEventListener("click",function(){
})