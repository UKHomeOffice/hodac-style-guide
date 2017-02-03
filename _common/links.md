---
layout: page
title: Links
permalink: /links/
---

<h4 class="heading-medium">Breadcrumbs</h4>

<div class="example">
    <div id="global-breadcrumb" class="header-context">
        <ol role="breadcrumbs" class="breadcrumbs group">
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/advanced-search">Advanced Search</a>
            </li>
        </ol>
    </div>
</div>
{% highlight markup %}
<!-- breadcrumbs -->
<div id="global-breadcrumb" class="header-context">
    <ol role="breadcrumbs" class="breadcrumbs group">
        <li>
            <a href="/">Home</a>
        </li>
        <li>
            <a href="/advanced-search">Advanced Search</a>
        </li>
    </ol>
</div>
<!-- breadcrumbs -->
{% endhighlight %}


<h4 class="heading-medium">Pagination</h4>

<div class="example">
    <nav class="pagination" role="navigation" aria-label="Pagination">
        <ul class="group">
            <li class="next">
                <a title="Navigate to next part" rel="next" href="#">
                    <span class="pagination-label">Next</span>
                    <span class="pagination-part-title">Additional Case Information</span>
                </a>
            </li>
        </ul>
    </nav>
</div>

{% highlight markup %}
<!-- pagination -->
<nav class="pagination" role="navigation" aria-label="Pagination">
    <ul class="group">
        <li class="next">
            <a title="Navigate to next part" rel="next" href="#">
                <span class="pagination-label">Next</span>
                <span class="pagination-part-title">Additional Case Information</span>
            </a>
        </li>
    </ul>
</nav>
<!-- pagination -->
{% endhighlight %}


<h4 class="heading-medium">Pagination v2</h4>


<div class="example">

  <!-- pagination -->

  <div class="pager">

    <div class="pager-controls">

      <ul class="pager-items">
        <li>1</li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li><a href="#">4</a></li>
        <li><a href="#">5</a></li>
      </ul>

      <a class="pager-next" href="#">Next</a>

    </div>

    <div class="pager-summary">Showing 1 &ndash; 50 of 146 agents</div>

  </div>
  <!-- pagination -->

</div>

{% highlight markup %}
<!-- pagination -->

<div class="pager">

  <div class="pager-controls">

    <ul class="pager-items">
      <li>1</li>
      <li><a href="#">2</a></li>
      <li><a href="#">3</a></li>
      <li><a href="#">4</a></li>
      <li><a href="#">5</a></li>
    </ul>

    <a class="pager-next" href="#">Next</a>

  </div>

  <div class="pager-summary">Showing 1 &ndash; 50 of 146 agents</div>

</div>
<!-- pagination -->
{% endhighlight %}



<h4 class="heading-medium">Content Links</h4>

<div class="example">
    <div class="content-links">
        <div class="content-links-inner">
            <h2>Advanced search</h2>
            <p>
                Use Advanced Search to tailor search results to specific date ranges, people, Intelligence Reports (IRs) and more.
            </p>
            <ul>
                <li>
                    <a href="/advanced-search">See our Advanced Search</a>
                </li>
            </ul>
        </div>
    </div>
</div>

{% highlight markup %}
<!-- content links -->
<div class="content-links">
    <div class="content-links-inner">
        <h2>Advanced search</h2>
        <p>
            Use Advanced Search to tailor search results to specific date ranges, people, Intelligence Reports (IRs) and more.
        </p>
        <ul>
            <li>
                <a href="/advanced-search">See our Advanced Search</a>
            </li>
        </ul>
    </div>
</div>
<!-- contnet links -->
{% endhighlight %}

<h4 class="heading-medium">Related</h4>

<div class="example">
    <aside class="related">
      <h2>Download these results</h2>
      <p><a href="#">Search results 1-10</a> (doc 10.5k)</p>
    </aside>
</div>

{% highlight markup %}
<!-- related -->
<aside class="related">
  <h2>Download these results</h2>
  <p><a href="#">Search results 1-10</a> (doc 10.5k)</p>
</aside>
<!-- related -->
{% endhighlight %}

<h4 class="heading-medium">Tags</h4>

<div class="example">

<!-- tags widget -->
<div class="tags">
  <ol>
    <li class="tags__item">
      <span>test 1</span>
      <a role="button">x</a>
    </li>
    <li class="tags__item">
      <span>test 2</span>
      <a role="button">x</a>
    </li>
    <li class="tags__item">
      <span>test 3</span>
      <a role="button">x</a>
    </li>
  </ol>
</div>
<!-- tags widget -->

</div>


{% highlight markup %}

<!-- tags widget -->
<div class="tags">
  <ol>
    <li class="tags__item">
      <span>test 1</span>
      <a role="button">x</a>
    </li>
    <li class="tags__item">
      <span>test 2</span>
      <a role="button">x</a>
    </li>
    <li class="tags__item">
      <span>test 3</span>
      <a role="button">x</a>
    </li>
  </ol>
</div>
<!-- tags widget -->

{% endhighlight %}
