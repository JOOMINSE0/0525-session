let str = 'likelion';
let arr = [...str];

function code() {
    let i = 0;
let print = setInterval(()=>{
      console.log(arr[i]);i++
      
if(i===arr[i])
clearInterval(print);
} , 1000);
}
    //setInterval()과 clearInterval()을 활용해 
		//1초에 한 번씩 콘솔창에 likelion의 알파벳이 나타나도록 하는 코드를 작성해보세요.
		
code();