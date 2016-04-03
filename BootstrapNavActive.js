var BootstrapNavActive=function($nav){
    "use strict";

    /**
     * Set a <a href> link (and its parent menu handler) as active.
     * @param {jQuery} $hrefItem The a href tag to set active.
     */
    var setActive=function($hrefItem){

        $hrefItem.closest("li").addClass("active");
        $hrefItem.closest("li.dropdown").addClass("active");
    };

    /**
     * Set links (and its menu handlers) as active .
     * @param {string} url The url set active.
     */
    var setActiveAccordingUrl=function(url){
        console.log("setActiveAccordingUrl",url);
    };

    /**
     * refresh active and inactive items according the current url
     */
    var refresh=function(){

        console.log("eeeee");
        console.log($nav);

        //reset all before
        $nav.find(".active").removeClass("active");

        $nav.find("a").each(
            function(){
                var link=$(this)[0];
                var loc=location;
                console.log("----------",link.href);
                console.log(link==loc);
                console.log(link.pathname==loc.pathname);
                console.log(link.href==loc.href);
                if(link.href===loc.href){
                    setActive($(this));
                }
        });


        var url1=location.pathname;
        var url2=decodeURI(url1);
        var url3=location.href;
        var url4=decodeURI(url3);

        console.log("location",location);
        console.log("url1",url1);
        console.log("url2",url2);
        console.log("url3",url3);
        console.log("url4",url4);

        var $currentHrefs=$nav.find('a:active,a[href="' + url1 + '"],a[href="' + url2 + '"],a[href="' + url3 + '"],a[href="' + url4 + '"]');
        $currentHrefs.each(function(){
           setActive($(this));
        });
    };

    return {
        refresh:refresh
    }

};