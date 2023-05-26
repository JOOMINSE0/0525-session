const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  
  const lastday = document.querySelector('.lastday');
  
  //현재시간
  let tempDate = new Date();
  let tempYear = tempDate.getFullYear();
  let tempMonth = tempDate.getMonth();
  let tempDay = tempDate.getDate();
  
  // 날짜가 넘어가 월이 +1이 되더라도 자바스크립트안에서 자동으로 계산을 해주기 때문에 신경쓰지 않아도 됨
  const futureDate = new Date(tempYear, tempMonth, tempDay+26, 13, 45, 0);
  
  const year = futureDate.getFullYear();
  const hours = futureDate.getHours();
  const minutes = futureDate.getMinutes();
  const date = futureDate.getDate();
  const weekday = weekdays[futureDate.getDay()];
  let month = months[futureDate.getMonth()];
  
  
  lastday.textContent = `End of Class: ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}`;
  
  const deadline = document.querySelector('.deadline');
  const items = document.querySelectorAll('.deadline-format h4');
  
  const futureTime = futureDate.getTime();
  
 //getTime()사용하기
  function getRemainingTime() {
  
    const today = new Date().getTime();
    const t = futureTime - today;

    let days = Math.floor(t / (24 * 60 * 60 * 1000));
    let hours = Math.floor((t % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    let minutes = Math.floor((t % (60 * 60 * 1000)) / (60 * 1000));
    let seconds = Math.floor((t % (60 * 1000)) / 1000);

    const arrT = [days, hours, minutes, seconds];
    
    function format(item) {
      if (item < 10) {
        return (item = `0${item}`);
      }
      return item;
    }
  
    items.forEach(function (item, index) {
      item.innerHTML = format(arrT[index]);
    });
  
    if (t < 0) {
      clearInterval(cd);
      deadline.textContent = '종강입니다 축하해요 🎊';
    }
  }
  let cd = setInterval(getRemainingTime, 1000);
  getRemainingTime();