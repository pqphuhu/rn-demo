function hTab(tab_controler,tab_con){
    this.tab_controler = tab_controler;
    this.tab_con = tab_con;
    var tabs = $(tab_controler).children("li");
    var panels = $(tab_con).children("div");
    $(tab_con).children("div").css("display","none");
    $(tab_con).children("div:first").css("display","block");
    $(tabs).hover(function(){
        var index = $.inArray(this,tabs);
        tabs.removeClass("current")
            .eq(index).addClass("current");
        panels.css("display","none")
            .eq(index).css("display","block");
    });
};

/* 手动切换(左右) */
function autopic_control(maincon,speed1,speed2,up,down){
    $(maincon).children('ul').html($(maincon).children('ul').html() + $(maincon).children('ul').html() + $(maincon).children('ul').html());
    $(maincon).children("ul").width($(maincon).children("ul").children("li:first").width() * $(maincon).children("ul").children("li").length);
    var x = $(maincon).children('ul').width()/3;
    var y = $(maincon).children("ul").children("li").length/3;
    var t;
    $(maincon).scrollLeft(x);
    function init1(){
        y--;
        if(y < 0){
            y = $(maincon).children("ul").children("li").length/3 - 1;
        };
        function mycase(){
            var self = arguments.callee;
            t = setTimeout(function(){
                $(maincon).scrollLeft(x);
                if(x < 0){
                    x = $(maincon).children("ul").width()/3;
                };
                if(x >= $(maincon).children("ul").children("li:first").width() * y + 45){
                    x-=speed2;
                };
                if(x < $(maincon).children("ul").children("li:first").width() * y + 45){
                    x--;
                };
                self();
                if(x < $(maincon).children("ul").children("li:first").width() * y){
                    clearTimeout(t);
                };
            },speed1);
        };
        mycase();
    };
    function init2(){
        y++;
        if(y > $(maincon).children("ul").children("li").length*2/3){
            y = $(maincon).children("ul").children("li").length/3 + 1;
        };
        function mycase(){
            var self = arguments.callee;
            t = setTimeout(function(){
                $(maincon).scrollLeft(x);
                if(x > $(maincon).children("ul").width()*2/3){
                    x = $(maincon).children("ul").width()/3;
                };
                if(x <= $(maincon).children("ul").children("li:first").width() * y - 45){
                    x+=speed2;
                };
                if(x > $(maincon).children("ul").children("li:first").width() * y - 45){
                    x++;
                };
                self();
                if(x > $(maincon).children("ul").children("li:first").width() * y){
                    clearTimeout(t);
                };
            },speed1);
        };
        mycase();
    };
    $(down).click(function(){
        init1();
    });
    $(up).click(function(){
        init2();
    });
};


$(function(){
    $(".agree i").click(function(){
        $(this).find("em").toggle();
    })
})