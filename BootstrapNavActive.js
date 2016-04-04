/**
 *
 * BootstrapNavActive.js manages .active css class on Bootstrap nav items using javascript and the current url.
 * @param {JQuery|HTMLElement} $nav the .navbar bootstrap element
 * @returns {{refresh: Function, deactivateAll: Function, setActive: Function, destroy: Function}}
 * @constructor
 *
 */
var BootstrapNavActive=function($nav){
    "use strict";

    $nav=$($nav);//just to be sure it is jquery object

    /**
     * Set a <a href> link (and its parent menu handler) as active.
     * @param {JQuery|HTMLElement} $hrefItem The a href tag to set active.
     */
    var setActive=function($hrefItem){
        $hrefItem=$($hrefItem);//just to be sure it is jquery object
        $hrefItem.closest("li").addClass("active");
        $hrefItem.closest("li.dropdown").addClass("active");
    };
    /**
     * deactivateAll all .active elements in $na
     */
    var deactivateAll=function(){
        $nav.find(".active").removeClass("active");
    };

    /**
     * Refresh items according the current location url
     */
    var refresh=function(){
        //reset all before
        deactivateAll();

        $nav.find("li>a").each(
            function(){
                var link=$(this)[0];
                var loc=location;
                if(link.href===loc.href){ //test real href and so works in all cases (file:/, relative, absolute etc...). Using only attributes selectors didn't work for all scenarios.
                    setActive($(this));
                }
        });
    };

    var destroy=function(){
        window.removeEventListener("hashchange",refresh);
    };

    //listen for page changes (for html5 url management or #anchors links)
    window.addEventListener("hashchange",refresh);
    //init call
    refresh();

    return {
        refresh:refresh,
        deactivateAll:deactivateAll,
        setActive:setActive,
        destroy:destroy
    }

};