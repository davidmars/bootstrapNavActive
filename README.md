# BootstrapNavActive
A full javascript solution to (de)active bootstrap nav items according page url.

## Example
Have a look to http://davidmars.github.io/bootstrapNavActive/example/index.html

## Getting stated

> 
> The only file you need in this repo is **BootstrapNavActive.min.js**
> 

```html
<body>
  <!--Some html...-->
  <nav id="mySmartNav" class="navbar navbar-default navbar-fixed-top">
      <li>
        <a href="bla bla bla.html">bla bla bla</a>
      </li>
      <!--Some bootstrap navabar stuff...-->
  </nav>
  <!--Some html...-->
</body>

<!--include jquery and bootstrap of course...-->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>

<!--include our little script-->
<script src="path-to-something-somewhere-in-cosmos/BootstrapNavActive.min.js"></script>

<!--initialize the nav element-->
<script>
$( document ).ready(
    function(){
        var $mySmartNav=$("#mySmartNav");
        new BootstrapNavActive($mySmartNav);
      }
);
</script>

```

## Options

```html
<script>
$( document ).ready(
    function(){
        //the ignoreAnchors option cause all #anchors in urls are ignored
        new BootstrapNavActive(
          $myTopNav,
          {
            ignoreAnchors:true
          }
        );
      }
);
</script>
```

```html
<script>
$( document ).ready(
    function(){
        //the ignoreQueryString option cause all ?some=params in urls are ignored
        new BootstrapNavActive(
          $myTopNav,
          {
            ignoreQueryString:true
          }
        );
      }
);
</script>
```
