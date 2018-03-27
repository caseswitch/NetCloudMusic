var cur=0;
var handler=null;
function changeImg(index){
	//让图片自动切换(链式操作)
	$('#imgs>li').removeClass('select')
	.get(index%8).className='select';
	$('#circles>li').removeClass('select')
	.get(index%8).className='select';
	cur=index;
	$(".transform").css("background-image","url('../../css/images/'+cur+'.jpg')");
}
function start(){
	handler=setInterval(function(){
		var index=$('#imgs>li.select').index();
		changeImg(index+1);
	},4000);
}
$(function(){
	start();
	$('.banner')
	.mouseover(function(){clearInterval(handler);})
	.mouseout(function(){start();});
	$('#circles>li').click(function(){
		changeImg($(this).index());
	});
	$(".banner>.left-arrow").click(function(){
		if(cur>=1) 
			cur--;
		else 
			cur = 8;
		changeImg(cur);
	});
	$(".banner>.right-arrow").click(function(){
		changeImg((cur+1)%8)
	});
});
