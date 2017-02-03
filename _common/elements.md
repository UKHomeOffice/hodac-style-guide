---
layout: page
title: Elements
permalink: /elements/
---

<h4 class="heading-medium">Jumbotron</h4>
Apply class **.jumbotron--fullwidth** to extend it fullwidth.

<div class="example">
    <div class="jumbotron">
        <h1 class="jumbotron-title">Title</h1>
        <p class="lede">Search for applications by Case ID or Name</p>
    </div>
</div>

{% highlight markup %}
<!-- jumbotron -->
<div class="jumbotron">
    <h1 class="jumbotron-title">Title</h1>
    <p class="lede">Search for applications by Case ID or Name</p>
</div>
<!-- jumbotron -->
{% endhighlight %}


<h4 class="heading-medium">Latest news</h4>

<div class="example">
    <nav role="navigation">
        <ul class="latest-news__list categories group">
            <li>
                <h4>
                    <a rel="" href="/">Data migration from SIP</a>
                </h4>
                <p>5 February 2016</p>
            </li>
            <li>
                <h4>
                    <a rel="" href="/">Data migration from SIP</a>
                </h4>
                <p>5 February 2016</p>
            </li>
        </ul>
        <div class="latest-news__more-links">
            <a href="#">See all of our announcements</a>
        </div>
    </nav>
</div>

{% highlight markup %}
<!-- latest news -->
<nav role="navigation">
    <ul class="latest-news__list categories group">
        <li>
            <h4>
                <a rel="" href="/">Data migration from SIP</a>
            </h4>
            <p>5 February 2016</p>
        </li>
        <li>
            <h4>
                <a rel="" href="/">Data migration from SIP</a>
            </h4>
            <p>5 February 2016</p>
        </li>
    </ul>
    <div class="latest-news__more-links">
        <a href="#">See all of our announcements</a>
    </div>
</nav>
<!-- latest news -->
{% endhighlight %}


<h4 class="heading-medium">Service Summary</h4>

<div class="example">
    <div class="service-summary">
        <p>Get planned service outages updates</p>
        <ul class="list list--left-inline service-summary__list ">
            <li>
                <a class="icon email-icon" href="#">email</a>
            </li>
            <li>
                <a class="icon email-feed" href="#">feed</a>
            </li>
        </ul>
    </div>
</div>

{% highlight markup %}
<!-- service summary -->
<div class="service-summary">
    <p>Get planned service outages updates</p>
    <ul class="list list--left-inline service-summary__list ">
        <li>
            <a class="icon email-icon" href="#">email</a>
        </li>
        <li>
            <a class="icon email-feed" href="#">feed</a>
        </li>
    </ul>
</div>
<!-- service summary -->
{% endhighlight %}


<h4 class="heading-medium">Results</h4>

<div class="example">
    <section class="results">
        <header>
            <h2 class="heading-small">1 - 10 of 560 results</h2>
        </header>
        <ol>
            <li>
                <article>
                    <header>
                        <a href="#"><h1>This is a search result article</h1></a>
                        <h2>Uploaded 19 January 2016</h2>
                    </header>
                    <p>Etiam John ipsum lobortis metus consequat, et
                        <mark>asylum seeker</mark> scelerisque. Aenean ac nisl eget enim fermentum Smith. Curabitur dignissim ullamcorper magna, ac Albanian urna rhoncus id. Phasellus sit amet luctus.</p>
                    <footer>
                        <a href="#">Download Title of search result PDF 9.98KB</a>
                    </footer>
                </article>
            </li>
        </ol>
    </section>
</div>

{% highlight markup %}
<!-- results -->
<section class="results">
    <header>
        <h2 class="heading-small">1 - 10 of 560 results</h2>
    </header>
    <ol>
        <li>
            <article>
                <header>
                    <a href="#"><h1>This is a search result article</h1></a>
                    <h2>Uploaded 19 January 2016</h2>
                </header>
                <p>Etiam John ipsum lobortis metus consequat, et
                    <mark>asylum seeker</mark> scelerisque. Aenean ac nisl eget enim fermentum Smith. Curabitur dignissim ullamcorper magna, ac Albanian urna rhoncus id. Phasellus sit amet luctus.</p>
                <footer>
                    <a href="#">Download Title of search result PDF 9.98KB</a>
                </footer>
            </article>
        </li>
    </ol>
</section>
<!-- results -->
{% endhighlight %}


<h4 class="heading-medium">Report</h4>

<div class="example">
    <article class="report">
        <dl>
            <dt>IR</dt>
            <dd>999999</dd>
            <dt>Author of report</dt>
            <dd>Niles Anderson</dd>
            <dt>Date of upload</dt>
            <dd>19 January 2016</dd>
        </dl>
        <p>Etiam John ipsum lobortis David Cooper, et asylum seeker Albania. Aenean ac nisl eget enim fermentum Smith. Curabitur dignissim magna, ac Albanian urna rhoncus id. Phasellus sit amet luctus</p>
        <p>Maecenas egestas vehicula est at ultrices. Donec fringilla sagittis dia , id pulvinar purus pellentesque quis. Aliquam vel leo luctus, suscipit lacus ut, interdum justo. Integer corruption felis at nisl lobortis eleifend. Sed ac orci lorem. Sed tincidunt lorem id tellus hendrerit, non placerat leo iaculis. Integer id nibh id mi venenatis . Duis scelerisque, nisi et laoreet blandit, tellus nunc elementum erat, vel efficitur massa arcu vel lacus.</p>
        <p>Asylum feugiat nibh condimentum sapien luctus commodo. Etiam at vehicula erat. Ut ac sagittis mi, ut vehicula tellus. Donec sit amet arcu eget sem pulvinar iaculis nec vitae arcu. Suspendisse libero odio.</p>
    </article>
</div>

{% highlight markup %}
<!-- report -->
<article class="report">
    <dl>
        <dt>IR</dt>
        <dd>999999</dd>
        <dt>Author of report</dt>
        <dd>Niles Anderson</dd>
        <dt>Date of upload</dt>
        <dd>19 January 2016</dd>
    </dl>
    <p>Etiam John ipsum lobortis David Cooper, et asylum seeker Albania. Aenean ac nisl eget enim fermentum Smith. Curabitur dignissim magna, ac Albanian urna rhoncus id. Phasellus sit amet luctus</p>
    <p>Maecenas egestas vehicula est at ultrices. Donec fringilla sagittis dia , id pulvinar purus pellentesque quis. Aliquam vel leo luctus, suscipit lacus ut, interdum justo. Integer corruption felis at nisl lobortis eleifend. Sed ac orci lorem. Sed tincidunt lorem id tellus hendrerit, non placerat leo iaculis. Integer id nibh id mi venenatis . Duis scelerisque, nisi et laoreet blandit, tellus nunc elementum erat, vel efficitur massa arcu vel lacus.</p>
    <p>Asylum feugiat nibh condimentum sapien luctus commodo. Etiam at vehicula erat. Ut ac sagittis mi, ut vehicula tellus. Donec sit amet arcu eget sem pulvinar iaculis nec vitae arcu. Suspendisse libero odio.</p>
</article>
<!-- report -->
{% endhighlight %}


<h4 class="heading-medium">Welcome Block</h4>

<!-- welcome-block -->
<section class="welcome-block">
  <div class="welcome-block__wrapper">
    <div class="jumbotron jumbotron--narrow-theme welcome-block--narrow">
      <h1 class="jumbotron-title">Title</h1>
    </div>
  </div>
</section>
<!-- welcome-block -->

{% highlight markup %}

<!-- welcome-block -->
<section class="welcome-block">
  <div class="welcome-block__wrapper">
    <div class="jumbotron jumbotron--narrow-theme welcome-block--narrow">
      <h1 class="jumbotron-title">Title</h1>
    </div>
  </div>
</section>
<!-- welcome-block -->

{% endhighlight %}


<h4 class="heading-medium">Login Panel</h4>

<div class="example">

  <!-- login panel -->
  <div class="login-panel">
    <div class="login-panel__container">
        <div class="jumbotron jumbotron--narrow-theme login-panel--jumbotron">
          <h1 class="jumbotron-title">Title</h1>
          <!-- login form -->
          <form class="login-panel__form" autocomplete="false">
            <fieldset>
                <legend class="visuallyhidden">Login</legend>

                <input id="username" name="username" type="text" placeholder="Username">
                <input id="password" name="password" type="password" placeholder="Password">

                <label class="login-panel__remeber-me"><input class="" id="remeber-me" name="remeber-me" type="checkbox">Remeber me
                </label>

                <span class="login-panel__legend">If you are unable to log on, please raise a call through Fujitsu on 0845 000 006
                </span>

                <button class="button">Sign in</button>
            </fieldset>
          </form>
          <!-- login form -->
        </div>
    </div>
  </div>
  <!-- login panel -->

</div>

{% highlight markup %}

<!-- login panel -->
<div class="login-panel">
  <div class="login-panel__container">
      <div class="jumbotron jumbotron--narrow-theme login-panel--jumbotron">
        <h1 class="jumbotron-title">Title</h1>
        <!-- login form -->
        <form class="login-panel__form" autocomplete="false">
          <fieldset>
              <legend class="visuallyhidden">Login</legend>

              <input id="username" name="username" type="text" placeholder="Username">
              <input id="password" name="password" type="password" placeholder="Password">

              <label class="login-panel__remeber-me"><input class="" id="remeber-me" name="remeber-me" type="checkbox">Remeber me
              </label>

              <span class="login-panel__legend">If you are unable to log on, please raise a call through Fujitsu on 0845 000 006
              </span>

              <button class="button">Sign in</button>
          </fieldset>
        </form>
        <!-- login form -->
      </div>
  </div>
</div>
<!-- login panel -->

{% endhighlight %}


<h4 class="heading-medium">Balooon</h4>

<div class="example">
  <button class="button" data-balloon="Whats up!" data-balloon-pos="up">Hover me!</button>
  <button class="button" data-balloon-length="small" data-balloon="Hi." data-balloon-pos="up">Hover me!</button>
  <button class="button" data-balloon-length="fit" data-balloon="What about something really big? This may surpass your window dimensions. Imagine you're on that boring class with that boring teacher and you didn't slept so well last night. Suddenly you're sleeping in class. Can you believe it?!" data-balloon-pos="up">My width will fit to element</button>
</div>

{% highlight markup %}
<!-- baloon -->
<button class="button" data-balloon="Whats up!" data-balloon-pos="up">Hover me!</button>
<button class="button" data-balloon-length="small" data-balloon="Hi." data-balloon-pos="up">Hover me!</button>
<button class="button" data-balloon-length="fit" data-balloon="What about something really big? This may surpass your window dimensions. Imagine you're on that boring class with that boring teacher and you didn't slept so well last night. Suddenly you're sleeping in class. Can you believe it?!" data-balloon-pos="up">My width will fit to element</button>
<!-- baloon -->
{% endhighlight %}
