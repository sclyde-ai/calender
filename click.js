//const N = '<button class="neutral" onclick="appoint(event)"></button>' // 空白のセル
const pos_btn ='<button class="circle" onclick="appoint(event)"></button>'; // 丸のセル
const neg_btn ='<button class="batsu" onclick="appoint(event)"></button>'; // ×のセル
let date_num; //　
// reaction of cel

for(let i = 1; i <= mon; i++){ 
    
    function hoge(e){
        date_num = '<div> '+i+' </div>'; // セルの数字
      if(e.target.innerHTML === date_num + N){
        e.target.innerHTML = date_num + pos_btn;  // 空白セル　＞　丸セル　
      }
      else if(e.target.innerHTML === date_num + pos_btn){
        e.target.innerHTML = date_num + neg_btn; // 丸セル　＞　×セル
      }
      else if(e.target.innerHTML === date_num + neg_btn){
        e.target.innerHTML = date_num + N; // ×セル　＞　空白セル
      }
      
    }
  document.getElementById("a" + i ).addEventListener('touchstart', hoge, false); // get id & set event
}

function appoint(event){
    if(event.target.className === "neutral"){
        event.target.className = "circle"; // 空白セル　＞　丸セル　
    }
    else if(event.target.className === "circle"){
        event.target.className = "batsu"; // 丸セル　＞　×セル
    }
    else if(event.target.className === "batsu"){
        event.target.className = "neutral"; // ×セル　＞　空白セル
    }
}
