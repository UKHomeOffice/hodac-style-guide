---
layout: page
title: Alerts
permalink: /alerts/
---


<h4 class="heading-medium">Alert</h4>

<div class="example">

  <aside class="alert">
    <p>Please abide by the handling instructions of this document when downloading</p>
  </aside>

</div>

{% highlight markup %}

<div class="alert">
  <p>Please abide by the handling instructions of this document when downloading</p>
</div>

<p class="alert">
  Please abide by the handling instructions of this document when downloading
</p>

<aside class="alert">
  <p>Please abide by the handling instructions of this document when downloading</p>
</aside>

{% endhighlight %}

<h4 class="heading-medium">Application Status</h4>

<div class="example">
  <!-- application-status -->
  <article class="application-status" role="alert">
    <header>
      <p class="application-status__intro">The next planned service downtime will be on:</p>
      <h3 class="application-status__heading">29 February 2016 from 14:00 to 18:00</h3>
    </header>
  </article>
  <!-- application-status -->
</div>

{% highlight markup %}
<!-- application-status -->
<article class="application-status" role="alert">
  <header>
    <p class="application-status__intro">The next planned service downtime will be on:</p>
    <h3 class="application-status__heading">29 February 2016 from 14:00 to 18:00</h3>
  </header>
</article>
<!-- application-status -->
{% endhighlight %}

<h4 class="heading-medium">Info Box</h4>

<!-- info-box -->
<div class="info-box" role="alert">
  <div class="info-box__wrapper">
    <a href="#">For more complex searches, use our Advanced Search tool</a>
  </div>
</div>
<!-- info-box -->

{% highlight markup %}
<!-- info-box -->
<div class="info-box" role="alert">
  <div class="info-box__wrapper">
    <a href="#">For more complex searches, use our Advanced Search tool</a>
  </div>
</div>
<!-- info-box -->
{% endhighlight %}
