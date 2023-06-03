(() => {
    function showMsg(person) {
        return "天龍三兄弟:" + person.join(",");
    }
    let user = ["喬峰", "段譽", "虛竹"];
    document.body.innerText = showMsg(user);
})(); // 立即函式的寫法，當看到結尾 () 時表示要立即執行，裡面可以放參數
