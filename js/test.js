function func(arr, call_back) {
    if(!Array.isArray(arr) || arr.some(it => parseInt(it) != it || it < 0))
        call_back(null, "Неверный формат входящих данных, должен быть массив положительных чисел");
    let res = [];
    const f = (val) => {
        res.push(val);
        if(res.length==arr.length)
            call_back(res);
    }
    for(let i = 0; i < arr.length; i++) {
        setTimeout(f, arr[i], arr[i]);
    }
}

func([1, 2, 3, 4], )