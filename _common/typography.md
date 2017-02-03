---
layout: page
title: Typography
permalink: /typography/
---


<p class="lede">
  Headings, body text, links, lists, inset text and hidden text can be found in the <a href="http://govuk-elements.herokuapp.com/typography/">elements gov.uk page</a>
</p>


<h4 class="heading-medium">Lists</h4>

Variations **.list--left-inline** **.list--right-inline**

<div class="example">
    <ul class="list list--left-inline">
        <li><a href="#">Related link</a></li>
        <li><a href="#">Related link</a></li>
        <li><a href="#">Related link</a></li>
    </ul>
</div>

<div class="example">
    <ul class="list list--right-inline">
        <li><a href="#">Related link</a></li>
        <li><a href="#">Related link</a></li>
        <li><a href="#">Related link</a></li>
    </ul>
</div>

{% highlight markup %}
<!-- list -->
<ul class="list list--right-inline">
    <li><a href="#">Related link</a></li>
    <li><a href="#">Related link</a></li>
    <li><a href="#">Related link</a></li>
</ul>
<!-- list -->
{% endhighlight %}

<h4 class="heading-medium">Page header</h4>

<div class="example">
    <div class="page-header">
        <h2 class="heading-large">Example page header</h2>
    </div>
</div>


{% highlight markup %}
<!-- page header -->
<div class="page-header">
  <h2 class="heading-large">Example page header</h2>
</div>
<!-- page header -->
{% endhighlight %}
