/**
 *
 * BootstrapNavActive.js manages .active css class on Bootstrap nav items using javascript and the current url.
 * @param {JQuery|HTMLElement} $nav the .navbar bootstrap element
 * @param {BootstrapNavActiveOption} options
 * @constructor
 *
 */
var BootstrapNavActive=function($nav,options){
    "use strict";

    $nav=$($nav);//just to be sure it is jquery object

    if(!options){
        options=new BootstrapNavActiveOption();
    }


    /**
     * Utilities...
     * @type {{url: {reg: RegExp, parse: Function, removeQueryString: Function, removeAnchor: Function}}}
     */
    var utils={
        url:{
            reg:/^([^?#]*)(\?{0,1}[^?#]*)(#{0,1}[^?#]*)$/,
            /**
             * Explode url string in 3 parts main url, query string, hash. If a component is not present the value will be empty
             * @param {string} url
             * @returns {Array|{index: number, input: string}}
             */
            parse:function(url){
                return url.split(utils.url.reg);
            },
            /**
             * Removes query string from url
             * @param {string} url
             * @returns {string}
             */
            removeQueryString:function(url){
                var p=utils.url.parse(url);
                return p[1]+p[3];
            },
            /**
             * Removes anchor string from url
             * @param {string} url
             * @returns {string}
             */
            removeAnchor:function(url){
                var p=utils.url.parse(url);
                return p[1]+p[2];
            }
        }
    };


    /**
     * Set a <a href> link (and its parent menu handler) as active.
     * @param {JQuery|HTMLElement} $hrefItem The a href tag to set active.
     */
    var setActive=this.setActive=function($hrefItem){
        $hrefItem=$($hrefItem);//just to be sure it is jquery object
        $hrefItem.closest("li").addClass("active");
        $hrefItem.closest("li.dropdown").addClass("active");
    };
    /**
     * deactivateAll all .active elements in $na
     */
    var deactivateAll=this.deactivateAll=function(){
        $nav.find(".active").removeClass("active");
    };

    /**
     * Refresh items according the current location url
     */
    var refresh=this.refresh=function(){
        //reset all before
        deactivateAll();

        $nav.find("li>a").each(
            function(){

                //test real href and so works in all cases (file:/, relative, absolute etc...). Using only attributes selectors didn't work for all scenarios.
                var link=$(this)[0];
                var loc=location;

                var linkHref=link.href;
                var locHref=loc.href;

                if(options.ignoreQueryString){
                    linkHref=utils.url.removeQueryString(linkHref);
                    locHref=utils.url.removeQueryString(locHref);
                }
                if(options.ignoreAnchors && $(this).attr("href")!="#"){
                    linkHref=utils.url.removeAnchor(linkHref);
                    locHref=utils.url.removeAnchor(locHref);
                }
                //console.log(linkHref===locHref,link);
                if(linkHref===locHref){
                    setActive($(this));
                }
            });
    };

    /**
     * Removes the hashchange event listener
     * @type {Function}
     */
    var destroy=this.destroy=function(){
        window.removeEventListener("hashchange",refresh);
    };

    //listen for page changes (for html5 url management or #anchors links)
    window.addEventListener("hashchange",refresh);
    //init call
    refresh();



};
/**
 * Options settings for a BootstrapNavActive object
 * @constructor
 */
var BootstrapNavActiveOption=function(){
    "use strict";
    /**
     * To ignore query string in location url and hrefs
     * @type {boolean} When set to true means href="my-url?param=a" will be active if the url is my-url?param=b
     */
    this.ignoreQueryString=false;
    /**
     * To ignore #anchors in location url and hrefs
     * @type {boolean} When set to true means href="my-url#a" will be active if the url is my-url#b
     */
    this.ignoreAnchors=false;
};

BootstrapNavActive.version="2016-04-05 06:18";