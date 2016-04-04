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
     * refresh active and inactive items according the current location url
     */
    var refresh=function(){
        //reset all before
        $nav.find(".active").removeClass("active");
        $nav.find("a").each(
            function(){
                var link=$(this)[0];
                var loc=location;
                if(link.href===loc.href){ //test real href and so works in all cases (file:/, relative, absolute etc...)
                    setActive($(this));
                }
        });
    };

    //first call
    refresh();

    //
    window.addEventListener("hashchange",function(){
        refresh();
    });

    return {
        refresh:refresh
    }

};