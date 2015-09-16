$(document).ready(function(){
    $('#submit_recipe_name').live('click', function(){
       $(this).parent().parent().parent().submit();
    });
});