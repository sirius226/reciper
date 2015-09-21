;$(function() {

    ///////////////////////////////////////////////////////////////////////////


    //new

    $(".item input[type='text'],.item textarea").focus(function() {
        $(this).addClass("txt-focus");
    }).blur(function() {
        $(this).removeClass("txt-focus");
    });

    $(".slide-l").on("touchend", function() {
        $(".drop-box>ul").animate({
            left: "0"
        }, 100);
        $(this).fadeOut();
        $(".slide-r").fadeIn();
    });
    $(".slide-r").on("touchend", function() {
        $(".drop-box>ul").animate({
            left: "-37%"
        }, 300);
        $(this).fadeOut();
        $(".slide-l").fadeIn();
    });

    $("footer li:eq(0)").on("touchend", function() {
        if (!$(".command-box").hasClass("command-bg")) {
            $(".smt").addClass("dlt-all");
            $(".pop-box").show();
            $(".pop-txt i").text("all data");

        } else {

        }

    });

    
    $(".set-6 input[type='radio'],.set-7 input[type='radio']").change(function(){
        if ($(".set-6 input[type='radio']").is(':checked')) {
            $(".set-7 input[type='text']").attr("readonly",true).css({"background":"#ebebeb","border":"1px solid #e6e5ea","color":"#999"});
            $(".set-6 select").attr("disabled",false);
        }else if($(".set-7 input[type='radio']").is(':checked')){
            $(".set-6 select").attr("disabled",true);
            $(".set-7 input[type='text']").attr("readonly",false).css({"background":"#fff","border":"1px solid #ffb300","color":"#252a2f"});
        }
    });
    

    // $("section").height($(window).height()-151);

    $(document).ready(
    	function() {
    	   window.rubish.save_tmp_state();
            all();
            reset_box_stack();
            get_main_state();
    	}
    );

    $("footer li,.command-box .cmd i,.w-bg,.o-bg,.slide-l,.slide-r").on("touchstart", function() {
        return true;
    });


    $(".command-box").on("click", ".cmd i", function(e) {
        e.stopPropagation();
        e.preventDefault();
        $(".smt").addClass("dlt-ths");
        $(".pop-box").show();
        $(this).closest(".ui-draggable").addClass("pre-dlt");
        $(".pop-txt i").text($(this).parent().find("input[name='name']").val());

    });

    $(".command-box").on("click", ".box .cmd i", function() {
        $(".smt").addClass("dlt-box");
    });
    $(".command-box").on("click", ".repeater .cmd i", function() {
        $(".smt").addClass("dlt-repeater");
    });

    $(".pop-con").on("click", ".dlt-box", function() {
        _box.push($(".pre-dlt").attr("data-id"));
        _box.sort(box_index);
    });

    $(".pop-con").on("click", ".dlt-repeater", function() {
        $(".pre-dlt .repeat-box .box").each(function() {
            _box.push($(this).attr("data-id"));
            _box.sort(box_index);

        });
    });



    ///////////////////////////////////////////////////////////////////////////

    $(".set-2 input,.set-7 label input,.set-10 label input").bind("input", function(e) {
        var num_reg = /^[0-9]*$/;
        if (!num_reg.test($(this).val())) {
            $(this).val("");
        } else {

        }
    });

    function _dialog_width() {
        $(".dialog-con").css({
            "top": ($(window).height() - $(".dialog-con").height()) / 2,
            "left": ($(window).width() - $(".dialog-con").width()) / 2
        });

        // 
        if($(".set-5").is(":visible")){
            $(".set-8 b").css({"width":"auto"});
        }else if($(".set-7").is(":visible")){
            $(".set-8 b").css({"width":"66px"});
        }else{
            $(".set-8 b").css({"width":"85px"});
        }
        // 
    }

    $(".itm-1 span").on("touchend", ".open", function() {
        $(this).stop().animate({
            "left": "-37px"
        }, 500).removeClass("open").addClass("close");
        $(this).closest(".itm-1").find("input").val("off");
        $(".set-2 input").attr("readonly", true).css({"background":"#ebebeb","border":"1px solid #e6e5ea","color":"#999"});
        $(".set-10 input").attr("readonly", true).css({"background":"#ebebeb","border":"1px solid #e6e5ea","color":"#999"});
        $(".set-2 select").attr("disabled", true);
        $(".set-4 select").attr("disabled", true);


    });
    $(".itm-1 span").on("touchend", ".close", function() {
        $(this).stop().animate({
            "left": "0"
        }, 500).removeClass("close").addClass("open");
        $(this).closest(".itm-1").find("input").val("on");
        $(".set-2 input").attr("readonly", false).css({"background":"#fff","border":"1px solid #ffb300","color":"#252a2f"});
        $(".set-10 input").attr("readonly", false).css({"background":"#fff","border":"1px solid #ffb300","color":"#252a2f"});
        $(".set-2 select").attr("disabled", false);
        $(".set-4 select").attr("disabled", false);
    });




    //Reset SetBox
    function _set_fn() {
        $(".set-9 a:eq(0)").removeClass();
        // $(".set-1 input").val("on");
        // $(".set-1 span i").animate({
        //     "left": "0"
        // }, 500).removeClass("close").addClass("open");
        // $(".set-2 input").val("").attr("readonly", false);
        // $(".set-2 select").attr("disabled", false);
        // $(".set-2 select option:eq(0)").attr("selected", "selected");
        // $(".set-3 select").attr("disabled", false);
        // $(".set-3 select option:eq(0)").attr("selected", "selected");
        // $(".set-4 select").attr("disabled", false);
        // $(".set-4 select option:eq(0)").attr("selected", "selected");
        // $(".set-5 select:eq(0) option:eq(0)").attr("selected", "selected");
        // $(".set-5 select:eq(1) option:eq(0)").attr("selected", "selected");
        // $(".set-5 select:eq(2) option:eq(0)").attr("selected", "selected");
        // $(".set-6 input").attr("checked", false);
        // $(".set-6 select:eq(0) option:eq(0)").attr("selected", "selected");
        // $(".set-6 select:eq(1) option:eq(0)").attr("selected", "selected");
        // $(".set-6 select:eq(2) option:eq(0)").attr("selected", "selected");
        // $(".set-7 input[type='checkbox']").attr("checked", false);
        // $(".set-7 input[type='text']").val("");
        // $(".set-8 input").val("");
        // $(".set-10 input").val("");
    }

    //Box
    // 获取cmd box的状态 by owen ---- 15.8.29
    function dialog_init_func(_this) {
        $(_this).addClass("on-cmd");
        if($(_this).find('.cmd-name').length>0 && $(_this).find('.cmd-name').text()=='Repeater') {
            console.log('Repeater!');
            _this = $(_this).parent();
        } 
        // console.log('dialog-init');
        // console.log(_this);
        window.rubish.get_tmp_state('2', '#' + $(_this).attr('id'));
    }

    function dialog_close_func(_this) {
        // console.log('dialog-close');
        _tmp = $('.on-cmd').html();
        _id = $('.on-cmd').attr('id');
        // console.log(_tmp);
        // console.log('===============');
        // console.log(window.rubish.tmp_data['d']);
        f = window.rubish.tmp_data['d'] == _tmp;
        // console.log(f);
        if (!f) {
            // console.log('save dialog state');
            window.rubish.save_tmp_state();
        }
        $("li,div").removeClass("on-cmd");
        get_main_state();
    }


    $(".command-box").on("click", ".box", function(e) {

        // 
        $(".set-8 input").val($(this).find("input[name='label']").val());
        // 
        e.stopPropagation();
        $(".dialog-tit em").text("Box");
        $(".set-3,.set-8,.set-9").show();
        slt_lst = [];
        for (var i = 0; i < _box.length; i++) {
            slt_lst.push('<option>' + _box[i].split('-')[1] + '</option>');
        }
        slt_lst.push('<option>' + $(this).attr('data-id').split('-')[1] + '</option>')
        slt_html = slt_lst.reverse().join('');
        $('.set-3 select').html(slt_html);
        $(".dialog-box").show();
        _dialog_width();
        dialog_init_func(this);
        $(".set-9 a:eq(0)").addClass("box-btn");

         // 20150906 fix box color

         function box_color(x){
            switch(x.val())
            {
                case "1":x.css("color","#e25656");break;
                case "2":x.css("color","#ffb300");break;
                case "3":x.css("color","#f2da0e");break;
                case "4":x.css("color","#8bbf46");break;
                case "5":x.css("color","#afdee4");break;
                case "6":x.css("color","#6691cc");break;
                case "7":x.css("color","#af74ce");break;
                case "8":x.css("color","#c7c7c7");break;
            }
         }

         box_color($(".set-3 select"));
         $(".set-3 select").change(function(){box_color($(this));});
         $(".set-3 option").each(function(){box_color($(this));});

         // switch($(".set-3 select").val())
         //    {
         //        case "1":$(".set-3 select").css("color","#e25656");break;
         //        case "2":$(".set-3 select").css("color","#ffb300");break;
         //        case "3":$(".set-3 select").css("color","#f2da0e");break;
         //        case "4":$(".set-3 select").css("color","#8bbf46");break;
         //        case "5":$(".set-3 select").css("color","#afdee4");break;
         //        case "6":$(".set-3 select").css("color","#6691cc");break;
         //        case "7":$(".set-3 select").css("color","#af74ce");break;
         //        case "8":$(".set-3 select").css("color","#c7c7c7");break;
         //    }

         // $(".set-3 select").change(function(){
         //    switch($(this).val())
         //    {
         //        case "1":$(this).css("color","#e25656");break;
         //        case "2":$(this).css("color","#ffb300");break;
         //        case "3":$(this).css("color","#f2da0e");break;
         //        case "4":$(this).css("color","#8bbf46");break;
         //        case "5":$(this).css("color","#afdee4");break;
         //        case "6":$(this).css("color","#6691cc");break;
         //        case "7":$(this).css("color","#af74ce");break;
         //        case "8":$(this).css("color","#c7c7c7");break;
         //    }
         // });

         // $(".set-3 option").each(function(){
         //    switch($(this).val())
         //    {
         //        case "1":$(this).css("color","#e25656");break;
         //        case "2":$(this).css("color","#ffb300");break;
         //        case "3":$(this).css("color","#f2da0e");break;
         //        case "4":$(this).css("color","#8bbf46");break;
         //        case "5":$(this).css("color","#afdee4");break;
         //        case "6":$(this).css("color","#6691cc");break;
         //        case "7":$(this).css("color","#af74ce");break;
         //        case "8":$(this).css("color","#c7c7c7");break;
         //    }
         // });


         
         
    });

    //Heater
    $(".command-box").on("click", ".heater", function(e) {
         //
        $(".set-1 input").val($(this).find("input[name='state']").val());
        $(".set-2 input").val($(this).find("input[name='temp']").val().substr(0,$(this).find("input[name='temp']").val().length-2));
        $(".set-2 select").val($(this).find("input[name='temp']").val().substr(-2));
        $(".set-8 input").val($(this).find("input[name='label']").val());

        if ($(this).find("input[name='state']").val()=="off") {
             $(".set-1 i").addClass("close").removeClass("open").css("left","-37px");
             $(".set-1 input").val("off");
             $(".set-2 input").attr("readonly",true).css({"background":"#ebebeb","border":"1px solid #e6e5ea"});
             $(".set-2 select").attr("disabled",true);
         }else{
            $(".set-1 i").addClass("open").removeClass("close").css("left","0");
            $(".set-1 input").val("on");
            $(".set-2 input").attr("readonly",false).css({"background":"#fff","border":"1px solid #ffb300"});
            $(".set-2 select").attr("disabled",false);
         }
        // 
        e.stopPropagation();
        $(".dialog-tit em").text("Heater");
        $(".set-1,.set-2,.set-8,.set-9").show();
        $(".dialog-box").show();
        _dialog_width();
        dialog_init_func(this);
        $(".set-9 a:eq(0)").addClass("heater-btn");


    });


    //Stirrer
    $(".command-box").on("click", ".stirrer", function(e) {
        //
        $(".set-1 input").val($(this).find("input[name='state']").val());
        $(".set-4 select").val($(this).find("input[name='speed']").val());
        $(".set-8 input").val($(this).find("input[name='label']").val());

        if ($(this).find("input[name='state']").val()=="off") {
             $(".set-1 i").addClass("close").removeClass("open").css("left","-37px");
             $(".set-1 input").val("off");
             $(".set-4 select").attr("disabled",true);
         }else{
            $(".set-1 i").addClass("open").removeClass("close").css("left","0");
            $(".set-1 input").val("on");
            $(".set-4 select").attr("disabled",false);
         }
        // 
        e.stopPropagation();
        $(".dialog-tit em").text("Stirrer");
        $(".set-1,.set-4,.set-8,.set-9").show();
        $(".dialog-box").show();
        _dialog_width();
        dialog_init_func(this);
        $(".set-9 a:eq(0)").addClass("stirrer-btn");
    });

    //Fan
    $(".command-box").on("click", ".fan", function(e) {
        // 
        $(".set-1 input").val($(this).find("input[name='state']").val());
        $(".set-8 input").val($(this).find("input[name='label']").val());
        $(".set-10 input").val($(this).find("input[name='speed']").val());

        if ($(this).find("input[name='state']").val()=="off") {
             $(".set-1 i").addClass("close").removeClass("open").css("left","-37px");
             $(".set-1 input").val("off");
             $(".set-10 input").attr("readonly",true).css({"background":"#ebebeb","border":"1px solid #e6e5ea"});
         }else{
            $(".set-1 i").addClass("open").removeClass("close").css("left","0");
            $(".set-1 input").val("on");
            $(".set-10 input").attr("readonly",false).css({"background":"#fff","border":"1px solid #ffb300"});
         }
        // 
        e.stopPropagation();
        $(".dialog-tit em").text("Fan");
        $(".set-1,.set-10,.set-8,.set-9").show();
        $(".dialog-box").show();
        _dialog_width();
        dialog_init_func(this);
        $(".set-9 a:eq(0)").addClass("fan-btn");
    });

    //Timer
    $(".command-box").on("click", ".timer", function(e) {
        // 
        $(".set-5 select:eq(0)").val($(this).find("input[name='time']").val().substr(0,2));
        $(".set-5 select:eq(1)").val($(this).find("input[name='time']").val().substr(3,2));
        $(".set-5 select:eq(2)").val($(this).find("input[name='time']").val().substr(6,2));
        $(".set-8 input").val($(this).find("input[name='label']").val());
        // 
        e.stopPropagation();
        $(".dialog-tit em").text("Timer");
        $(".set-5,.set-8,.set-9").show();
        $(".dialog-box").show();
        _dialog_width();
        dialog_init_func(this);
        $(".set-9 a:eq(0)").addClass("timer-btn");

    });

    //Repeater
    $(".command-box").on("click", ".repeater>.cmd", function(e) {
        // 
        $(".set-8 input").val($(this).find("input[name='label']").val());
        $(".set-6 select:eq(0)").val($(this).find("input[name='time']").val().substr(0,2));
        $(".set-6 select:eq(1)").val($(this).find("input[name='time']").val().substr(3,2));
        $(".set-6 select:eq(2)").val($(this).find("input[name='time']").val().substr(6,2));
        $(".set-7 input[type='text']").val($(this).find("input[name='times']").val());
        // 
        e.stopPropagation();
        $(".dialog-tit em").text("Repeater");
        $(".set-6,.set-7,.set-8,.set-9").show();
        $(".dialog-box").show();
        _dialog_width();
        dialog_init_func(this);
        $(".set-9 a:eq(0)").addClass("repeater-btn");
    });


    //btn-event-Box
    $(".set-9").on("click", ".box-btn", function() {
        old_box = $(".on-cmd>.cmd input[name='num']").val();
        new_box = $(".set-3 select").val();
        $(".on-cmd").removeClass('box-' + old_box + ' box-w-' + old_box + ' box-o-' + old_box);
        $(".on-cmd").addClass("box-" + new_box).attr("data-id", "box-" + new_box);
        $(".on-cmd>.cmd input[name='label']").val($(".set-8 input").val());
        $(".on-cmd>.cmd input[name='num']").val(new_box);

        $(".on-cmd>.cmd").find(".cmd-label").text($(".set-8 input").val());
        $(".on-cmd>.cmd").find(".cmd-num").text(new_box);
        $(".dialog-box").hide();
        $(".dialog-form p").hide();
        $(".dialog-tit em").text("");
        dialog_close_func(this);
        _set_fn();
        var _tmp = _box.indexOf('box-' + new_box);
        if (_tmp >= 0) {
            _box[_tmp] = 'box-' + old_box;
        } else {
            console.log("error");
        }


        // _box.push();
        _box.sort(box_index);
        all();
        console.log(_box);


    });

    //btn-event-Heater
    $(".set-9").on("click", ".heater-btn", function() {
        $(".on-cmd>.cmd input[name='label']").val($(".set-8 input").val());
        $(".on-cmd>.cmd input[name='temp']").val($(".set-2 input").val() + $(".set-2 select").val());
        $(".on-cmd>.cmd input[name='state']").val($(".set-1 input").val());

        $(".on-cmd>.cmd").find(".cmd-label").text($(".set-8 input").val());
        $(".on-cmd>.cmd").find(".cmd-temp").text($(".set-2 input").val() + $(".set-2 select").val());
        $(".on-cmd>.cmd").find(".cmd-state").text($(".set-1 input").val());
        $(".dialog-box").hide();
        $(".dialog-form p").hide();
        $(".dialog-tit em").text("");
        dialog_close_func(this);
        _set_fn();
    });

    //btn-event-Stirrer
    $(".set-9").on("click", ".stirrer-btn", function() {

        $(".on-cmd>.cmd input[name='label']").val($(".set-8 input").val());
        $(".on-cmd>.cmd input[name='speed']").val($(".set-4 select").val());
        $(".on-cmd>.cmd input[name='state']").val($(".set-1 input").val());
        $(".on-cmd>.cmd").find(".cmd-label").text($(".set-8 input").val());
        $(".on-cmd>.cmd").find(".cmd-speed").text($(".set-4 select").val());
        $(".on-cmd>.cmd").find(".cmd-state").text($(".set-1 input").val());
        $(".dialog-box").hide();
        $(".dialog-form p").hide();
        $(".dialog-tit em").text("");
        dialog_close_func(this);
        _set_fn();
    });

    //btn-event-Fan
    $(".set-9").on("click", ".fan-btn", function() {

        $(".on-cmd>.cmd input[name='label']").val($(".set-8 input").val());
        $(".on-cmd>.cmd input[name='speed']").val($(".set-10 input").val());
        $(".on-cmd>.cmd input[name='state']").val($(".set-1 input").val());
        $(".on-cmd>.cmd").find(".cmd-label").text($(".set-8 input").val());
        $(".on-cmd>.cmd").find(".cmd-speed").text($(".set-10 input").val());
        $(".on-cmd>.cmd").find(".cmd-state").text($(".set-1 input").val());
        $(".dialog-box").hide();
        $(".dialog-form p").hide();
        $(".dialog-tit em").text("");
        dialog_close_func(this);
        _set_fn();
    });


    //btn-event-Timer
    $(".set-9").on("click", ".timer-btn", function() {

        $(".on-cmd>.cmd input[name='label']").val($(".set-8 input").val());
        $(".on-cmd>.cmd input[name='time']").val($(".set-5 select:eq(0)").val() + ":" + $(".set-5 select:eq(1)").val() + ":" + $(".set-5 select:eq(2)").val());

        $(".on-cmd>.cmd").find(".cmd-label").text($(".set-8 input").val());
        // $(".on-cmd>.cmd input").val($(".set-5 input").val()+":"+$(".set-5 select:eq(0)").val()+":"+$(".set-5 select:eq(1)").val()+":"+$(".set-5 select:eq(2)").val());
        $(".dialog-box").hide();
        $(".dialog-form p").hide();
        $(".dialog-tit em").text("");
        dialog_close_func(this);
        _set_fn();
    });

    //btn-event-Repeater
    $(".set-9").on("click", ".repeater-btn", function() {

        $(".on-cmd>input[name='label']").val($(".set-8 input").val());
        $(".on-cmd>input[name='time']").val($(".set-6 select:eq(0)").val() + ":" + $(".set-6 select:eq(1)").val() + ":" + $(".set-6 select:eq(2)").val());
        $(".on-cmd>input[name='times']").val($(".set-7 label input").val());

        $(".on-cmd>.cmd-label").text($(".set-8 input").val());
        // $(".on-cmd>div.cmd input:eq(0)").val($(".set-6 input").val()+":"+$(".set-6 select:eq(0)").val()+":"+$(".set-6 select:eq(1)").val()+":"+$(".set-6 select:eq(2)").val());
        // $(".on-cmd>div.cmd input:eq(1)").val($(".set-7 input:eq(0)").val()+":"+$(".set-7 label input").val());
        $(".dialog-box").hide();
        $(".dialog-form p").hide();
        $(".dialog-tit em").text("");
        dialog_close_func(this);
        _set_fn();
    });


    $(".dialog-tit b,.itm-7 a:eq(1)").on("click", function(e) {
        e.stopPropagation();
        $(".dialog-box").hide();
        $(".dialog-form p").hide();
        $(".dialog-tit em").text("");
        $("li,div").removeClass("on-cmd");
        _set_fn();
        get_main_state();
    });

    /////////////////
    function box_index(v1, v2) {
        if (v1 < v2) {
            return 1;
        } else if (v1 > v2) {
            return -1;
        } else {
            return 0;
        }
    }

    var all_box = ["box-8", "box-7", "box-6", "box-5", "box-4", "box-3", "box-2", "box-1"];
    var _box = ["box-8", "box-7", "box-6", "box-5", "box-4", "box-3", "box-2", "box-1"];

    /////////////////


    function all() {


        var d = new Date();
        var _id = String(d.getFullYear()) + String(d.getMonth() + 1) + String(d.getDate()) + String(d.getHours()) + String(d.getMinutes()) + String(d.getSeconds()) + String(d.getMilliseconds());
        $(".command-box .no-id").attr("id", _id).removeClass("no-id");

        if ($(".command-box .box").length > 7) {
            $(".drop-box .box").hide();
        } else {
            $(".drop-box .box").show();
        }

        $(".command-box>div.ui-draggable>ul").addClass("repeat-box receive-box");
        $(".command-box>.ui-draggable:even").removeClass("o-bg").addClass("w-bg");
        $(".command-box>.ui-draggable:odd").removeClass("w-bg").addClass("o-bg");
        $(".command-box>div.ui-draggable li:even").removeClass("o-bg").addClass("w-bg");
        $(".command-box>div.ui-draggable li:odd").removeClass("w-bg").addClass("o-bg");

        $(".command-box>.ui-draggable,.command-box>div.ui-draggable li").each(function() {

            if ($(this).hasClass("box")) {

                if ($(this).hasClass("box-cls")) {

                    var _box_cls = _box.pop();
                    $(this).addClass(_box_cls);
                    $(this).attr("data-id", _box_cls);
                    $(this).removeClass("box-cls");

                }


                if ($(this).hasClass("w-bg")) {

                    if ($(this).hasClass("box-1")) {
                        $(this).addClass("box-w-1");
                        $(this).removeClass("box-o-1");
                        $(".box-1 input[name='num']").val("1");
                    } else if ($(this).hasClass("box-2")) {
                        $(this).addClass("box-w-2");
                        $(this).removeClass("box-o-2");
                        $(".box-2 input[name='num']").val("2");
                    } else if ($(this).hasClass("box-3")) {
                        $(this).addClass("box-w-3");
                        $(this).removeClass("box-o-3");
                        $(".box-3 input[name='num']").val("3");
                    } else if ($(this).hasClass("box-4")) {
                        $(this).addClass("box-w-4");
                        $(this).removeClass("box-o-4");
                        $(".box-4 input[name='num']").val("4");
                    } else if ($(this).hasClass("box-5")) {
                        $(this).addClass("box-w-5");
                        $(this).removeClass("box-o-5");
                        $(".box-5 input[name='num']").val("5");
                    } else if ($(this).hasClass("box-6")) {
                        $(this).addClass("box-w-6");
                        $(this).removeClass("box-o-6");
                        $(".box-6 input[name='num']").val("6");
                    } else if ($(this).hasClass("box-7")) {
                        $(this).addClass("box-w-7");
                        $(this).removeClass("box-o-7");
                        $(".box-7 input[name='num']").val("7");
                    } else if ($(this).hasClass("box-8")) {
                        $(this).addClass("box-w-8");
                        $(this).removeClass("box-o-8");
                        $(".box-8 input[name='num']").val("8");
                    }

                } else {
                    if ($(this).hasClass("box-1")) {
                        $(this).addClass("box-o-1");
                        $(this).removeClass("box-w-1");
                        $(".box-1 input[name='num']").val("1");
                    } else if ($(this).hasClass("box-2")) {
                        $(this).addClass("box-o-2");
                        $(this).removeClass("box-w-2");
                        $(".box-2 input[name='num']").val("2");
                    } else if ($(this).hasClass("box-3")) {
                        $(this).addClass("box-o-3");
                        $(this).removeClass("box-w-3");
                        $(".box-3 input[name='num']").val("3");
                    } else if ($(this).hasClass("box-4")) {
                        $(this).addClass("box-o-4");
                        $(this).removeClass("box-w-4");
                        $(".box-4 input[name='num']").val("4");
                    } else if ($(this).hasClass("box-5")) {
                        $(this).addClass("box-o-5");
                        $(this).removeClass("box-w-5");
                        $(".box-5 input[name='num']").val("5");
                    } else if ($(this).hasClass("box-6")) {
                        $(this).addClass("box-o-6");
                        $(this).removeClass("box-w-6");
                        $(".box-6 input[name='num']").val("6");
                    } else if ($(this).hasClass("box-7")) {
                        $(this).addClass("box-o-7");
                        $(this).removeClass("box-w-7");
                        $(".box-7 input[name='num']").val("7");
                    } else if ($(this).hasClass("box-8")) {
                        $(this).addClass("box-o-8");
                        $(this).removeClass("box-w-8");
                        $(".box-8 input[name='num']").val("8");
                    }
                }
            }

            if ($(this).hasClass("heater")) {
                if ($(this).hasClass("w-bg")) {
                    $(this).addClass("heater-w");
                    $(this).removeClass("heater-o");
                } else {
                    $(this).addClass("heater-o");
                    $(this).removeClass("heater-w");
                }
            }

            if ($(this).hasClass("stirrer")) {
                if ($(this).hasClass("w-bg")) {
                    $(this).addClass("stirrer-w");
                    $(this).removeClass("stirrer-o");
                } else {
                    $(this).addClass("stirrer-o");
                    $(this).removeClass("stirrer-w");
                }
            }

            if ($(this).hasClass("fan")) {
                if ($(this).hasClass("w-bg")) {
                    $(this).addClass("fan-w");
                    $(this).removeClass("fan-o");
                } else {
                    $(this).addClass("fan-o");
                    $(this).removeClass("fan-w");
                }
            }

            if ($(this).hasClass("timer")) {
                if ($(this).hasClass("w-bg")) {
                    $(this).addClass("timer-w");
                    $(this).removeClass("timer-o");
                } else {
                    $(this).addClass("timer-o");
                    $(this).removeClass("timer-w");
                }
            }

            if ($(this).hasClass("repeater")) {
                if ($(this).hasClass("w-bg")) {
                    $(this).removeClass("repeater-o");
                    $(this).addClass("repeater-w");
                } else {
                    $(this).removeClass("repeater-w");
                    $(this).addClass("repeater-o");

                }
            }

        });


    };

    all();


    // 
    //回收机制beg by owen ---- 15.8.29
    Rubish = function() {};
    Rubish.prototype = {
        rubish_stack: new Array(),
        limit: -1,
        push_stack: function(_stack) {
            if (this.limit > 0 && this.rubish_stack.length > this.limit) {
                this.pop_stack();
            }
            this.rubish_stack.push(_stack)
        },
        pop_stack: function() {
            return this.rubish_stack.pop();
        },
    };

    SWRubish = function() {};

    function reset_box_stack() {
    	console.log('reset_box_stack');
    	old_boxes = [];
    	$(".command-box").find('.box').each(function() {
    		old_boxes.push('box-'+$(this).find('input[name="num"]').val());
    	});
    	new_boxes = [];
    	for(var i=0; i<all_box.length; i++) {
    		if(old_boxes.indexOf(all_box[i])>-1) continue;
    		else new_boxes.push(all_box[i]);
    	}
    	// console.log(new_boxes);
    	_box = new_boxes;
    }

    SWRubish.prototype = {
        rubish: new Rubish(),
        tmp_data: {},
        recover_cb: function(s) {
            switch (s['t']) {
                case '1':
                    $(s['q']).html(s['d']);
                    all();
                    break;
                case '2':
                    $(s['q']).parent().html(s['d']);
                    all();
                    break;
                default:
                    console.log('recover_cb error: ' + s['t']);
            }
            reset_box_stack();
        },
        get_tmp_state: function(t, q) { // t为区分回收事件的标志位，不一定需要
        	if(t=='2') {
        		_html = $(q).parent().html();
        	}
        	else {
        		_html = $(q).html();
        	}
            this.tmp_data = {
                't': t,
                'q': q,
                'd': _html,
            };
            console.log('get_tmp_state');
            // console.log(this.tmp_data['d']);
        },
        save_tmp_state: function() {
            // console.log('----------------------------');
            // console.log(this.tmp_data['d']);
            this.rubish.push_stack(this.tmp_data);
            console.log('save_tmp_state');
            // console.log(JSON.stringify(this.rubish.rubish_stack));
        },
        recover_state: function() {
            stack = this.rubish.pop_stack();
            if (this.recover_cb && stack) {
                this.recover_cb(stack);
                // console.log('RRRRRRRRRRRRRRRRRRRRRRR');
                console.log('recover_state: ');
                // console.log(stack['d']);
            } else {
                // console.log('no state available!');
            }
        },
    };
    //回收机制end
    window.rubish = new SWRubish();
    //初始化状态
    function get_main_state() {
        window.rubish.get_tmp_state('1', '.command-box');
    }
    get_main_state();
    // 

    setInterval(function() {
        $(".ui-draggable-dragging").css({"height":"45px","text-indent":"-9999px"});
        if ($(".command-box>div.ui-sortable-helper").length > 0 || $(".drop-box div.ui-sortable-helper").length > 0) {
            $(".command-box>div").not(".ui-sortable-helper").each(function() {
                $(this).find(".repeat-box").hide();
            });
        } else {
            $(".command-box>div").each(function() {
                $(this).find(".repeat-box").show();
            });
        }



        $(".repeat-box").sortable({
            connectWith: ".receive-box",
            axis: "y",
            containment: "section",
        }).disableSelection();

        $(".command-box").sortable({
            connectWith: ".receive-box",
            axis: "y",
            containment: "section",
        }).disableSelection();


        window.flag = 0;
        $(".receive-box").sortable({
            stop: function(e) {
                if (window.flag == 1) {
                    if ($(".repeat-box>div").hasClass("repeater")) {
                        return false;
                    }

                    window.rubish.save_tmp_state();
                    all();
                    get_main_state();

                    e.stopPropagation();
                }
                window.flag = 0;
            },
            update: function(e) {
                e.stopPropagation();
                window.flag = 1;
            },
            start: function(e) {
                e.stopPropagation();
                console.log('start!');
            },



        });


        //////////////////////////////////////////////////////////////////////////////
        var com_bg = $(".command-box li").length;
        if (com_bg == 0) {
            $(".command-box").addClass("command-bg");
            $(".command-box").css({
                "padding": "10px 10px 0",
                "border": "1px dashed #ffb300"
            });
        } else {
            $(".command-box").removeClass("command-bg");
            $(".command-box").css({
                "padding": "10px 0",
                "border": "none"
            });
        }

        //////////////////////////////////////////////////////////////////////////////

    }, 100);





    $("header .drop-box>ul>li,header .drop-box>ul>div").draggable({
        connectToSortable: ".command-box",
        helper: "clone",
    });

    $(".rec-btn").click(function() {
        // console.log('recover');
        window.rubish.recover_state();
        get_main_state();
    });


    $(".pop-box").on("click", ".dlt-all", function() {
        window.rubish.save_tmp_state();
        $(".pop-box").hide();
        $(".command-box").html("");
        $(".smt").removeClass("dlt-all");
        _box.splice(0, 8, "box-8", "box-7", "box-6", "box-5", "box-4", "box-3", "box-2", "box-1");
        get_main_state();
    });
    $(".pop-box").on("click", ".dlt-ths", function() {
        window.rubish.save_tmp_state();
        $(".pop-box").hide();
        $(".pre-dlt").removeClass("pre-dlt").remove();
        $(".smt").removeClass("dlt-all dlt-ths dlt-box dlt-repeater");
        all();
        get_main_state();
    });
    $(".clo").on("click", function() {
        $(".pop-box").hide();
        $(".smt").removeClass("dlt-all dlt-ths dlt-box dlt-repeater");
        $(".pre-dlt").removeClass("pre-dlt");
    });

    // 代码转换逻辑
    // 代码转换逻辑
    $("footer ul li:eq(2)").on("click", function() {
        var _all = [];
        $(".command-box>.ui-draggable").each(function() {
            // var _data_arr=[];
            var _data_json = {};
            if ($(this).hasClass("repeater")) {
                var _rp_arr = [];
                var _rp_j_1 = {};

                $(this).find("div:eq(0) input").each(function() {
                    var x = $(this).attr("name");
                    var y = $(this).val();
                    _rp_j_1[x] = y;
                });

                $(this).find("ul>.ui-draggable").each(function() {
                    var _rp_j_2 = {};
                    $(this).find("input").each(function() {
                        var x = $(this).attr("name");
                        var y = $(this).val();
                        _rp_j_2[x] = y;

                    });
                    _rp_arr.push(_rp_j_2);

                });
                _rp_j_1["arr"] = _rp_arr
                // console.log(_from_rp_j_1);
                // console.log(_rp_arr);

                _all.push(_rp_j_1);
                // Array.prototype.push.apply(_all,_rp_arr)
            } else {

                $(this).find("input").each(function() {
                    var x = $(this).attr("name");
                    var y = $(this).val();
                    _data_json[x] = y;

                });
                var _from_json = _data_json;
                // console.log(_from_json);
                _all.push(_from_json);
            }
        });

        console.log(_all);
        var d_json = {recipeCode:_all}
        console.log(d_json);
        $.ajax({
                type: 'PUT',
                url: '',
                headers: {
                  'X-Transaction': 'PUT Example',
                  'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
                },
                dataType: "json",
                contentType: 'application/json',
                data: JSON.stringify(d_json),
                cache: false,
                success: function(data) {   
                    console.log(data)
                    $('#res-panel').val(data['recipeCode']);  
                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                },
            });
    }); //click event

    $('.rev-btn').on('click', function(){
        code = $('#res-panel').val();
        console.log(code);
        var d_json = JSON.stringify({'d':code});
        $.ajax({
                type: 'POST',
                url: '?act=rev',
                dataType: "json",
                data: d_json,
                cache: false,
                success: function(data) {
                    code = data['code'];
                    if (code == 0) {
                        window.rubish.save_tmp_state();
                        $('.command-box').html(data['fres']);
                        all();
                        reset_box_stack();
                        get_main_state();
                    } else {
                        
                    };
                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                    alert('Network Error!');
                },
            });
    });

});