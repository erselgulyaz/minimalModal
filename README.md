# minimalModal
minimalModal is a simple lightbox function. Have a only basic properties and after all the operations out of the function as a template to be sent inside. Because I did not want to increase the file size because it is an addition to many unused features.

## Properties
* Pure javascript
* Ecmascript 6
* Editable properties

## Installation
Download plugin files then include from page. For example: 
```html
<link rel="stylesheet" href="/dist/minimalModal.min.css" />
<script type="text/javascript" src="/dist/minimalModal.min.js"></script>
```
## Basic Usage

```html
var  minimalModalSample = new  minimalModal();
minimalModalSample.init();
```
## Using to Parameters
```html
var  minimalModalSample = new  minimalModal({
	startAnimation :  "topToCenter",
	endAnimation :  "centerToTop",
	maxWidth :  600,
	maxHeight :  400,
	xPosition :  "center",
	yPosition :  "center",
	topOuterSpace :  0,
	rightOuterSpace :  0,
	bottomOuterSpace :  0,
	leftOuterSpace :  0,
	hiddenForGradientClick :  true,
	overflowX :  "hidden",
	overflowY :  "auto",
	modalTemplate:  ``
});
```

## Parameters

<table>
	<tr>
      <td>Name</td>
      <td>Default</td>
      <td>Description</td>
    </tr>
    <tr>
      <td>
      <strong>startAnimation</strong>
      </td>
      <td>
      "topToCenter"
      </td>
      <td>
      <p>Opening animation. <strong>Parameters:</strong> topToCenter, bottomToCenter, leftToCenter, rightToCenter</p>
      </td>
    </tr>
     <tr>
      <td>
      <strong>endAnimation</strong>
      </td>
      <td>
      "centerToTop"
      </td>
      <td>
      <p>Closing animation. <strong>Parameters:</strong> centerToTop, centerToBottom, centerToLeft, centerToRight</p>
      </td>
    </tr>
     <tr>
      <td>
      <strong>maxWidth</strong>
      </td>
      <td>
      600
      </td>
      <td>
      <p>Inline max-width styles for modal template.</p>
      </td>
    </tr>
    <tr>
      <td>
      <strong>maxHeight</strong>
      </td>
      <td>
      400
      </td>
      <td>
      <p>Inline max-height styles for modal template.</p>
      </td>
    </tr>   
    <tr>
      <td>
      <strong>xPosition</strong>
      </td>
      <td>
      "center"
      </td>
      <td>
      <p>Horizontal alignment for modal wrapper.<strong>Parameters: </strong> "left", "center", "right"</p>
      </td>
    </tr>   
    <tr>
      <td>
      <strong>yPosition</strong>
      </td>
      <td>
      "center"
      </td>
      <td>
      <p>Vertical alignment for modal wrapper.<strong>Parameters: </strong> "top", "center", "bottom"</p>
      </td>
    </tr>   
        <tr>
      <td>
      <strong>topOuterSpace</strong>
      </td>
      <td>
      0
      </td>
      <td>
      <p>Inline margin styles for top value.</p>
      </td>
    </tr> 
    <tr>
      <td>
      <strong>rightOuterSpace</strong>
      </td>
      <td>
      0
      </td>
      <td>
      <p>Inline margin styles for right value.</p>
      </td>
    </tr>   
    <tr>
      <td>
      <strong>bottomOuterSpace</strong>
      </td>
      <td>
      0
      </td>
      <td>
      <p>Inline margin styles for bottom value.</p>
      </td>
    </tr>   
    <tr>
      <td>
      <strong>leftOuterSpace</strong>
      </td>
      <td>
      0
      </td>
      <td>
      <p>Inline margin styles for left value.</p>
      </td>
    </tr>   
    <tr>
      <td>
      <strong>hiddenForGradientClick</strong>
      </td>
      <td>
      true
      </td>
      <td>
      <p>Selecting True will turn the modal off after turning off the modal container when the gradient is clicked. The False parameter prevents this.</p>
      </td>
    </tr>   
    <tr>
      <td>
      <strong>overflowX</strong>
      </td>
      <td>
      "hidden"
      </td>
      <td>
      <p>Inline overflow-x style for modal template.</p>
      </td>
    </tr>  
    <tr>
      <td>
      <strong>overflowY</strong>
      </td>
      <td>
      "auto"
      </td>
      <td>
      <p>Inline overflow-y style for modal template.</p>
      </td>
    </tr>
    <tr>
      <td>
      <strong>modalTemplate</strong>
      </td>
      <td>
      ""
      </td>
      <td>
      <p>Modal is the area where content is managed. If you don't create an html content, you'll see a blank area according to the width and height values.</p>
      </td>
    </tr>

</table>