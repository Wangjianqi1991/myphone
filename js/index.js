~function(desW){
    var winW=document.documentElement.clientWidth,
        oMain=document.getElementById("main"),
        n=winW/desW;
    if(winW>desW){
        oMain.style.width=desW+"px";
        return;
    }
    document.documentElement.style.fontSize=n*100+"px";
}(750);
//初始化swiper
var sw=new Swiper(".swiper-container",{
    loop:true,
    direction:"vertical",
    /**/
    onSlideChangeEnd:function(swiper){
        /*获取全部的slide*/
        var slideAry=swiper.slides,
            trueNum=slideAry.length - 2,
            lastIn=trueNum + 1;
        //获取当前活动块的索引
        var curIn=swiper.activeIndex;
        [].forEach.call(slideAry,function(item,index){
            if(index==curIn){
                switch (curIn){
                    case 0:
                        item.id="page"+trueNum;
                        break;
                    case lastIn:
                        item.id="page1";
                        break;
                    default:
                        item.id="page"+curIn;
                }
                return;
            }
            item.id=null;
        })
    }
});


~function() {
    var music = document.getElementById("music"),
        audio = document.getElementById("audio1");
    music.addEventListener("click",function(){
        if(audio.paused){
            audio.play();
            music.className="music move";
            return;
        }
        audio.pause();
        music.className="music";
    },false);
    window.setTimeout(function(){
        audio.play();
        audio.addEventListener("canplay",function(){
            music.style.display="block";
            music.className="music move";
        },false)
    },1000)
}();









