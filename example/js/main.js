$( document ).ready(
    function(){
        var $myTopNav=$("#myTopNav");
        new BootstrapNavActive($myTopNav);

        var $myTabs=$("#myTabs");
        new BootstrapNavActive($myTabs);

        var $myPills=$("#myPills");
        new BootstrapNavActive($myPills);
    }
);
