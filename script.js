$("button").click(function(){
    var deep= parseInt($(".depth").val());
    var age= parseInt($(".age").val());
    var location= $(".location").val();

    if( deep >= 5){
        $(".deep").html("<p>"+"You can probably walk in the water with little trouble"+"<p/>");
    }

    else if( deep < 5){
        $(".deep").html("<p>"+"You might now want to go into much higher waters unless you know how to swim"+"</p>");    
    }

    else{
        $(".deep").html("<p>"+"Please input a number"+"</p>");   
    }

    if( age > 9){
        $(".age").html("<p>"+"You can swim without parental supervison, but you still need a life guard"+"</p>");    
    }
    else if( age <=9){
        $(".age").html("<p>"+"You need a parent/guardian to supervise you"+"</p>");    
    }
    
    else{
        $(".age").html("<p>"+"Please input a number"+"</p>");   
    }
    
    if(location==="pool"||location==="Pool"){
        $(".location").html("<p>"+"Pay attention to how deep you go and its okay to dive"+"</p>"); 
    }
    else if(location==="beach"||location==="Beach"){
        $(".location").html("<p>"+"If you can't swim, dont walk to far and dont dive cause you can cut yourself"+"</p>");    
    }
    else{
    $(".location").html("<p>"+"Please input either beach or pool"+"<p/>");
    }
});