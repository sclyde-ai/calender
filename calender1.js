// make subcalender
const subelem = document.querySelector(".calender1");
subelem.insertAdjacentHTML('beforebegin','<div class="month">' + str[4] + str[5] + str[6] + '</div>');
let cal1 = ""; 
let count1 = 0;
for(let i = 0; i < 6; i++){
    cal1 += '<tr>';

    if(i === 0){
      for(let j = 0; j < fir; j++){
        cal1 += '<td class="none"></td>';
      }
      for(let j = fir; j < 7; j++){
        count1++;
        cal1 += '<td><div class="num">' + count1 + '</div></td>';
      }
    }

    else{
      for(let j = 0; j < 7; j++){
        count1++;
        cal1 += '<td><div class="num">' + count1 + '</div></td>';
        if(count1 >= mon){
            break;
        }
      }
    }

    cal1 += '</tr>'; 
    if(count1 >= mon){
        break;
    }  
}
subelem.insertAdjacentHTML('beforeend',cal1);
