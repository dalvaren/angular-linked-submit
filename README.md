# Submit Linked Button directive for [AngularJS](http://angularjs.org/)

***

AngularJS directive to automatically link an element to any form submit button (even elements outside the form)

In the form tag you need to add the ng-submit tag with the desired submit function

## Example:
```HTML
<form name='myForm' ng-submit="onSubmitted(myForm)">
```

also, you will need to create a submit button inside the form tag (but it can be hidden ;))
## Example:
```HTML
<input style="display: none;" type="submit" id="clcikMe" value="This submit triggers validation. But I wanted to put this button at the end of the page"/>
    </form>
```

So, in the submit button we just need to 'link' it to our submit button using the attribute 'linked'

## Example: 
```HTML
<a class="btn" linked="clcikMe">submit button</a>
```

And inside your controller you can use something like...

## Example: 
```JAVASCRIPT
$scope.onSubmitted = function(form) {
    console.log(form);
};
```
