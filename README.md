# User Interface Scripts

Collection of scripts made for cebbys web apps. Using P5JS library/framework
With https://combinatronics.com using these scripts in web apps.

When adding scripts to html
```html
<script
   type="text/javascript"
   src="https://combinatronics.com/CebbysWeb/Scripts.UserInterface/master/<file>.js"
></script>
```
---
## button.js
```java
enum ButtonType
```
> NORMAL
> > Button which clicks once when clicked and is released on button release

> SPAMMABLE
> > Button which is clicked and released repeatedly while held

> TOGGLEABLE
> > Button which swaps states ( clicked / not clicked ) on every click

```java
class Button
```
> Something about buttons
