const gnb_swiper = new Swiper("#gnb",{
	wrapperClass:"menu",
	slideClass:"btn",
	slidesPerView:"auto", //버튼의 갯수만큼 설정
});

const main_swiper = new Swiper("main",{
	wrapperClass:"container",
	slideClass:"area",
	direction:"vertical",
	speed:800,
	mousewheel:{
		enabled:true,
	},
	thumbs:{
		swiper:gnb_swiper,
		slideThumbActiveClass:"active",
	},
	pagination:{
		el:".pager",
		bulletActiveClass:'active',
		clickable:true,
	},
	navigation: {
    nextEl: '.next',
    prevEl: '.prev',
		disabledClass:'hidden',
  },
});


/*모달윈도우 제어*/ 
//1. DOM객체 만들기
var modal = document.getElementById("modal");
var btns = document.querySelectorAll(".EMW_btn");//여러개의 버튼 ->배열
var iframe = modal.querySelector("iframe");


console.log(btns);

//2.버튼배열에서 버튼 하나하나 지정하기
btns.forEach(function(btn){
	//3. 버튼이벤트설정
	btn.addEventListener("click",function(e){
		e.preventDefault(); //a태그의 본래의 링크 기능을 동작하지 않게함.
		//4. 모달에 클래스 부여
		modal.classList.add("active");
		//5.href값 가져오기
		var href = this.getAttribute("href");
		//6.iframe 설정하기
		iframe.src = href;
	});
});

//닫기
modal.addEventListener("click",function(){
	modal.classList.remove("active");
	iframe.src = "works/blank.html"; //원래상태인 blank페이지로 바꿈
});
