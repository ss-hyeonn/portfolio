function EzenModalWindow(target=".EMW_btn", options={}){

    var emw = {
		modal:"#EMW_modal",             //모달영역
        iframe:".EMW_iframe",           //아이프레임영역역
		close:'.EMW_close',
		wrapActiveClass:'displaing', //전체영역클래스
		class:'active',
		prev_el:".prev",
		next_el:".next",

		addFunction:function(){},
		removeFunction:function(){}
	};

	//객체 병합
	Object.assign(emw, options);    

    var mwbs = document.querySelectorAll(target); 
    var modal = document.querySelector(emw.modal);
    var iframe = modal.querySelector(emw.iframe);
  

    mwbs.forEach((btn)=>{

        btn.addEventListener("click",function(e){
            e.preventDefault();
            modal.classList.add(emw.class);
            var href = this.getAttribute("href");
            iframe.src = href;
        });

    });

    modal.addEventListener("click",function(){
        this.classList.remove(emw.class);
        iframe.src = null;
    })

};