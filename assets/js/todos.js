// Check off specific todos by clicking
// $("li").click(function(){
// 	$(this).css("color", "gray");
// 	$(this).css("text-decoration","line-through");
// })


	//// //if li is gray
	//// if($(this).css("color") === "rgb(128, 128, 128)")
	//// //turn it black
	//// $(this).css({
	//// 	color: "black",
	//// 	textDecoration: "none"
	//// });
	//// //else 
	//// else {
	//// //turn it gray
	//// $(this).css({
	//// 	color: "gray",
	//// 	textDecoration: "line-through"
	//// });
	//// }
 // });
 $("ul").on("click","li",function(){
 	$(this).toggleClass("completed");
 });

 //Click on X to delete todo
 $("ul").on("click","span",function(event){
 	$(this).parent().fadeOut(500,function(){
 		$(this).remove();
 	});		
 	event.stopPropagation();
 });

 $("input[type='text'").keypress(function(event){
 	if(event.which === 13){
 		//console.log("You just hit enter key");
 		//grabbing new todo from input
 		var todoText = $(this).val();
 		$(this).val("");
 		//create a new li amd add to ul
 		$("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + todoText + "</li>");
 	}
 });

 $(".fa-pencil-alt").on("click",function(){
 	 $("input[type='text'").fadeToggle();
 });