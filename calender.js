// get now time
const now = new Date();
const year = now.getFullYear();
const month = now.getMonth() + 1;
const str = Date();

// arrange date
const elapse = year - 2000; // set 2000 as standard
const n = Math.floor(elapse/4); // add by leap year
let fir = (elapse + n) % 7; // first day of year
// first day of month 
let mon = 0; // period of month
switch(month){
    case 1: mon = 31; fir += 0; break;
    case 2: if(year%100 === 0 && year%400 !== 0){ mon = 28 }
            else if(year%4 === 0){mon = 29; fir += 2}
            else{mon = 28; fir += 3;}
            break;
    case 3: mon = 31; fir += 3; break;
    case 4: mon = 30; fir += 6; break;
    case 5: mon = 31; fir += 1; break;
    case 6: mon = 30; fir += 4; break;
    case 7: mon = 31; fir += 6; break;
    case 8: mon = 31; fir += 2; break;
    case 9: mon = 30; fir += 5; break;
    case 10: mon = 31; fir += 0; break;
    case 11: mon = 30; fir += 3; break;
    case 12: mon = 31; fir += 5; break;
    
}

// make calender
const elem = document.querySelector(".calender"); // カレンダーID取得
elem.insertAdjacentHTML('beforebegin','<div class="month">' + str[4] + str[5] + str[6] + '</div>'); // 月表示
let cal = ""; // ここにHTMLの内容を記述
let count = 0; // 日にち
const N = '<button class="neutral" onclick="appoint(event)"></button>' // 空白のセル
// カレンダー作成
for(let i = 0; i < 6; i++){
    cal += '<tr>';
    // 最初の週
    if(i === 0){
      for(let j = 0; j < fir; j++){
        cal += '<td class="none"></td>'; // 最初の空白
      }
      for(let j = fir; j < 7; j++){
        count++;
        cal += '<td id="a' + count + '"><div> '+count+' </div>' + N +'</td>'; // 日ごとにIDを設定
      }
    }
    // 2週目以降
    else{
      for(let j = 0; j < 7; j++){
        count++;
        cal += '<td id="a' + count + '"><div> '+count+' </div>' + N +'</td>'; // 日ごとにIDを設定
        if(count >= mon){
            break;
        }
      }
    }

    cal += '</tr>'; 
    if(count >= mon){ break;}  
}
elem.insertAdjacentHTML('beforeend',cal);



