/*
 * ES6中的拓展运算符：...
 */
// let ary = [12, 23, 34, 45];
// let [a,...b]=ary;
// console.log(a, b);//->12 [23, 34, 45]

//->输出当前班级当前组的平均分数(去掉最高和最低)
// let fn = function () {
//     let info = arguments[0];
//     let scoreAry = [].slice.call(arguments, 1);
//
//     scoreAry.sort((a, b)=>a - b);
//     scoreAry.shift();
//     scoreAry.pop();
//     let res = eval(scoreAry.join('+')) / scoreAry.length;
//
//     console.log(info + ':' + res.toFixed(2));
// };
// fn('珠峰三班第一组', 98, 99, 45, 68, 78, 36);

// let fn = (info, ...scoreAry)=> {
//     let max = Math.max.apply(null, scoreAry),
//         min = Math.min.apply(null, scoreAry);
//     let res = ((eval(scoreAry.join('+')) - max - min) / (scoreAry.length - 2)).toFixed(2);
//     console.log(info + ':' + res);
// };
// fn('珠峰三班第一组', 98, 99, 45, 68, 78, 36);

let fn = (info, ...scoreAry)=> {
    // let max = Math.max(...scoreAry),
    //     min = Math.min(...scoreAry);
    // let res = ((eval(scoreAry.join('+')) - max - min) / (scoreAry.length - 2)).toFixed(2);
    // console.log(info + ':' + res);

    scoreAry.sort((a, b)=>a - b);
    scoreAry.pop();
    let [,...aa]=scoreAry;
    let res = (eval(aa.join('+')) / aa.length).toFixed(2);
    console.log(info + ':' + res);
};
fn('珠峰三班第一组', 98, 99, 45, 68, 78, 36);