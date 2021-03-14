var expanded = false;

$(document).ready(function(){
	$(".selectbox").click(function(){
        if (!expanded) {
            $("#checkboxes").css("display","block");
            expanded = true;                        
        } 
        else {
            $("#checkboxes").css("display","none");
            expanded = false;
        }
     });   
		
		$(".parent").change(function(){
			$(".child").prop("checked",$(this).prop("checked"))

		});
			
			$(".child1").change(function(){
				if($(this).prop("checked")==false){
					$(".parent1").prop("checked",false)
					}
		if($(".child1:checked").length == $(".child1").length){
		$(".parent1").prop("checked",true)
		}
	});

	$(".child2").change(function(){
		$(".parent2").prop("checked",$(this).prop("checked"))
	});

});