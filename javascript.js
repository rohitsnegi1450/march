var a = false;

$(document).ready(function(){
	$(".selectbox").click(function(){
        if (!a) {
            $("#checkboxes").css("display","block");
            a = true;                        
        } 
        else {
            $("#checkboxes").css("display","none");
            a = false;
        }
     });   
		
		$(".child_click").change(function(){
			$(this).prev().find("input[type='checkbox']").prop("checked",true);
		});
				
		$("#checkboxes").on('change','.parent_click',function(){
			$(this).next().children().find('input[type="checkbox"]').prop("checked",$(this).children().find('input[type="checkbox"]').prop("checked"));
		});
		
		$(".child_click").change(function(){
			if(!($(this).find('input[type="checkbox"]').prop("checked"))){
				$(this).prev().find('input[type="checkbox"]').prop("checked",false)
			}
		});
	});