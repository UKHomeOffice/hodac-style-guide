---
layout: page
title: Containers
permalink: /containers/
---

<h4 class="heading-medium">Tabs</h4>

<div class="example">
    <h2>Example 1</h2>
    <div class="tabs" data-target="tabs">
        <div class="tabs-nav">
          <ul class="tabs-list" role="tablist">
            <li role="presentation"><a href="#tab-1" role="tab" tabindex="0" aria-controls="tab-1" aria-selected="true">Tab 1</a></li>
            <li role="presentation"><a href="#tab-2" role="tab" tabindex="-1" aria-controls="tab-2">Tab 2</a></li>
          </ul>
        </div>
        <div class="tabs-content">
          <div class="tabs-panel" id="tab-1" role="tabpanel">
            <div class="tabs-panel-inner">
                Tab1 content
            </div>
          </div>
          <div class="tabs-panel" id="tab-2" role="tabpanel" aria-hidden="true">
            <div class="tabs-panel-inner">
                Tab 2 content
            </div>
          </div>
        </div>
    </div>
</div>

<div class="example">
    <h2>Example 2</h2>
    <div class="tabs" data-target="tabs">
        <div class="tabs-nav">
          <ul class="tabs-list" role="tablist">
            <li role="presentation"><a href="#tab-1" role="tab" tabindex="0" aria-controls="tab-3" aria-selected="true">Content A</a></li>
            <li role="presentation"><a href="#tab-2" role="tab" tabindex="-1" aria-controls="tab-4">Content B</a></li>
          </ul>
        </div>
        <div class="tabs-content">
          <div class="tabs-panel" id="tab-3" role="tabpanel">
            <div class="tabs-panel-inner">
                Tab1 content
            </div>
          </div>
          <div class="tabs-panel" id="tab-4" role="tabpanel" aria-hidden="true">
            <div class="tabs-panel-inner">
                Tab 2 content
            </div>
          </div>
        </div>
    </div>
</div>

{% highlight markup %}
<!-- tabs -->
<div class="tabs" data-target="tabs">

  <div class="tabs-nav">

    <ul class="tabs-list" role="tablist">
      <li role="presentation"><a href="#tab-1" role="tab" tabindex="0" aria-controls="tab-1" aria-selected="true">Tab 1</a></li>
      <li role="presentation"><a href="#tab-2" role="tab" tabindex="-1" aria-controls="tab-2">Tab 2</a></li>
    </ul>

  </div>

  <div class="tabs-content">

    <div class="tabs-panel" id="tab-1" role="tabpanel">

      <div class="tabs-panel-inner">
          Tab1 content
      </div>
    </div>

    <div class="tabs-panel" id="tab-2" role="tabpanel" aria-hidden="true">
      <div class="tabs-panel-inner">
          Tab 2 content
      </div>
    </div>

  </div>
</div>
<!-- tabs -->
{% endhighlight %}

<h4 class="heading-medium">Unstyled tabs</h4>


<div class="example">
<div class="grid-row">
  <div class="column-one-third">
  <!-- unstyled tabs -->
    <div class="unstyled-tabs" data-target="tabs">
        <div class="unstyled-tabs__nav unstyled-tabs__nav--rtl">
          <ul class="unstyled-tabs__list  " role="tablist">
            <li role="presentation"><a href="#tab-1" role="tab" tabindex="0" aria-controls="tab-1" aria-selected="true">Tab 1</a></li>
            <li role="presentation"><a href="#tab-2" role="tab" tabindex="-1" aria-controls="tab-2">Tab 2</a></li>
          </ul>
        </div>
        <div class="unstyled-tabs__content">
          <div class="unstyled-tabs__panel" id="tab-1" role="tabpanel">
            <div>
                Tab1 content
            </div>
          </div>
          <div class="unstyled-tabs__panel" id="tab-2" role="tabpanel" aria-hidden="true">
            <div>
                Tab 2 content
            </div>
          </div>
        </div>
    </div>
  <!-- unstyled tabs -->
  </div>
</div>
</div>

{% highlight markup %}
<!-- untstyled tabs -->
<div class="unstyled-tabs" data-target="tabs">
    <div class="unstyled-tabs__nav unstyled-tabs__nav--rtl">
      <ul class="unstyled-tabs__list  " role="tablist">
        <li role="presentation"><a href="#tab-1" role="tab" tabindex="0" aria-controls="tab-1" aria-selected="true">Tab 1</a></li>
        <li role="presentation"><a href="#tab-2" role="tab" tabindex="-1" aria-controls="tab-2">Tab 2</a></li>
      </ul>
    </div>
    <div class="unstyled-tabs__content">
      <div class="unstyled-tabs__panel" id="tab-1" role="tabpanel">
        <div tabindex="0">
            Tab1 content
        </div>
      </div>
      <div class="unstyled-tabs__panel" id="tab-2" role="tabpanel" aria-hidden="true">
        <div>
            Tab 2 content
        </div>
      </div>
    </div>
</div>
<!-- unstyled tabs -->
{% endhighlight %}


<h4 class="heading-medium">Dropdowns</h4>

<h5 class="heading-small">Open</h5>

<div class="example">
  <div class="grid-row">
    <div class="column-one-third">
    <!-- dropdowns -->
      <div class="dropdowns dropdowns--opened">
        <div class="dropdowns__header">
            <span class="dropdowns__legend">Title</span>
            <span class="dropdowns__sub">subtitle</span>
            <div class="dropdowns__controls" data-target="dropdowns-toggle">
                <div class="dropdowns__toggle"></div>
            </div>
        </div>
        <div class="dropdowns__container">
            <div class="dropdowns__wrapper dropdowns__panel">
              test
            </div>
        </div>
      </div>
    <!-- dropdowns -->
    </div>
  </div>
</div>

{% highlight markup %}
<!-- dropdpwns -->
<div class="dropdowns dropdowns--opened" aria-expanded="true">
  <div class="dropdowns__header">
      <span class="dropdowns__legend">Title</span>
      <span class="dropdowns__sub">subtitle</span>
      <div class="dropdowns__controls" data-target="dropdowns-toggle">
          <div class="dropdowns__toggle"></div>
      </div>
  </div>
  <div class="dropdowns__container">
      <div class="dropdowns__wrapper dropdowns__panel">
        test
      </div>
  </div>
</div>
<!-- dropdowns -->
{% endhighlight %}

<h5 class="heading-small">Closed</h5>

<div class="example">
  <div class="grid-row">
    <div class="column-one-third">
    <!-- dropdowns -->
      <div class="dropdowns dropdowns--closed" aria-expanded="false">
        <div class="dropdowns__header">
            <span class="dropdowns__legend">Title</span>
            <span class="dropdowns__sub">subtitle</span>
            <div class="dropdowns__controls" data-target="dropdowns-toggle">
                <div class="dropdowns__toggle"></div>
            </div>
        </div>
        <div class="dropdowns__container">
            <div class="dropdowns__wrapper dropdowns__panel">
              test
            </div>
        </div>
      </div>
    <!-- dropdowns -->
    </div>
  </div>
</div>

{% highlight markup %}
<!-- dropdowns -->
<div class="dropdowns dropdowns--closed" aria-expanded="false">
  <div class="dropdowns__header">
      <span class="dropdowns__legend">Title</span>
      <span class="dropdowns__sub">subtitle</span>
      <div class="dropdowns__controls" data-target="dropdowns-toggle">
          <div class="dropdowns__toggle"></div>
      </div>
  </div>
  <div class="dropdowns__container">
      <div class="dropdowns__wrapper dropdowns__panel">
        test
      </div>
  </div>
</div>
<!-- dropdowns -->
{% endhighlight %}


<h5 class="heading-small">With Tabs</h5>

<div class="example" style="height:300px">
  <div class="grid-row">
    <div class="column-one-third">
    <!-- dropdowns -->
      <div class="dropdowns dropdowns--opened" aria-expanded="true">
        <div class="dropdowns__header">
            <span class="dropdowns__legend">Title</span>
            <span class="dropdowns__sub">subtitle</span>
            <div class="dropdowns__controls" data-target="dropdowns-toggle">
                <div class="dropdowns__toggle"></div>
            </div>
        </div>
        <div class="dropdowns__container">
        <!-- dropdowns tabs -->
        <div class="dropdowns__wrapper unstyled-tabs dropdowns-tabs--theme" data-target="tabs">
            <div class="unstyled-tabs__nav unstyled-tabs__nav--rtl">
              <ul class="unstyled-tabs__list  " role="tablist">
                <li role="presentation"><a href="#tab-1" role="tab" tabindex="0" aria-controls="tab-1" aria-selected="true">Tab 1</a></li>
                <li role="presentation"><a href="#tab-2" role="tab" tabindex="-1" aria-controls="tab-2">Tab 2</a></li>
              </ul>
            </div>
            <div class="unstyled-tabs__content">
              <div class="unstyled-tabs__panel" id="tab-1" role="tabpanel">
                <div class="dropdowns__panel">
                    Tab1 content
                </div>
              </div>
              <div class="unstyled-tabs__panel" id="tab-2" role="tabpanel" aria-hidden="true">
                <div class="dropdowns__panel">
                    Tab 2 content
                </div>
              </div>
            </div>
        </div>
        <!-- dropdowns tabs -->
        </div>
      </div>
    <!-- dropdowns -->
    </div>
  </div>
</div>

{% highlight markup %}
<!-- dropdowns -->
  <div class="dropdowns dropdowns--opened" aria-expanded="true">
    <div class="dropdowns__header">
        <span class="dropdowns__legend">Title</span>
        <span class="dropdowns__sub">subtitle</span>
        <div class="dropdowns__controls" data-target="dropdowns-toggle">
            <div class="dropdowns__toggle"></div>
        </div>
    </div>
    <div class="dropdowns__container">
    <!-- dropdowns tabs -->
    <div class="dropdowns__wrapper unstyled-tabs dropdowns-tabs--theme" data-target="tabs">
        <div class="unstyled-tabs__nav unstyled-tabs__nav--rtl">
          <ul class="unstyled-tabs__list  " role="tablist">
            <li role="presentation"><a href="#tab-1" role="tab" tabindex="0" aria-controls="tab-1" aria-selected="true">Tab 1</a></li>
            <li role="presentation"><a href="#tab-2" role="tab" tabindex="-1" aria-controls="tab-2">Tab 2</a></li>
          </ul>
        </div>
        <div class="unstyled-tabs__content">
          <div class="unstyled-tabs__panel" id="tab-1" role="tabpanel">
            <div class="dropdowns__panel">
                Tab1 content
            </div>
          </div>
          <div class="unstyled-tabs__panel" id="tab-2" role="tabpanel" aria-hidden="true">
            <div class="dropdowns__panel">
                Tab 2 content
            </div>
          </div>
        </div>
    </div>
    <!-- dropdowns tabs -->
    </div>
  </div>
<!-- dropdowns -->
{% endhighlight %}


<h4 class="heading-large">Collapsibles</h4>

<div class="example">
  <!-- collapsible -->
  <div class="collapsible">
    <div class="collapsible-item closed">
      <div class="collapsible-heading">
        <h2 class="heading-large">Address History</h2>
      </div>
      <div class="collapsible-content">
        <table>
          <thead>
            <tr>
              <th>Number</th>
              <th>Street</th>
              <th>City</th>
              <th>Postcode</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>32</td>
              <td>Test Street</td>
              <td>City Name</td>
              <td>XX6 6XX</td>
              <td>Country</td>
            </tr>
            <tr>
              <td>43</td>
              <td>Test Street</td>
              <td>City Name</td>
              <td>XX6 6XX</td>
              <td>Country</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="collapsible-item closed">
      <div class="collapsible-heading">
        <h2 class="heading-large">Additional Information</h2>
      </div>
      <div class="collapsible-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel ex ex. Morbi ultrices urna ac porta condimentum. Vestibulum rutrum quis massa non commodo. Sed pulvinar tortor vitae ex ultrices, tristique ornare massa varius. Sed arcu sapien, sollicitudin et ultrices in, tempus in felis. Fusce sed vestibulum risus, eget volutpat magna. Phasellus tempus nisi ut ipsum malesuada volutpat. Nam aliquam ex vel dictum malesuada. Pellentesque dolor purus, mollis sed massa id, ultrices bibendum orci. Duis imperdiet, leo quis pharetra pharetra, risus ligula aliquet magna, ac facilisis orci arcu vel lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed elit odio, interdum molestie massa non, mattis varius lectus.</p>
        <p>Sed placerat feugiat nulla, ut feugiat nisl euismod nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec nec est vitae nisi lobortis congue. Fusce et volutpat ex. Sed bibendum lorem ut tortor condimentum, ut sodales ante vestibulum. Curabitur at metus eget lorem porta luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nibh elit, tincidunt ac sodales sed, interdum vel ipsum. Cras vel nisi et turpis laoreet tristique ut a eros. Mauris facilisis justo id lectus vehicula viverra. Etiam nec neque lacus. Proin aliquet metus et ipsum pulvinar sodales. Suspendisse scelerisque massa non consectetur faucibus.</p>
      </div>
    </div>
    <div class="collapsible-item closed">
      <div class="collapsible-heading">
        <h2 class="heading-large">Immigration Text</h2>
      </div>
      <div class="collapsible-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel ex ex. Morbi ultrices urna ac porta condimentum. Vestibulum rutrum quis massa non commodo. Sed pulvinar tortor vitae ex ultrices, tristique ornare massa varius. Sed arcu sapien, sollicitudin et ultrices in, tempus in felis. Fusce sed vestibulum risus, eget volutpat magna. Phasellus tempus nisi ut ipsum malesuada volutpat. Nam aliquam ex vel dictum malesuada. Pellentesque dolor purus, mollis sed massa id, ultrices bibendum orci. Duis imperdiet, leo quis pharetra pharetra, risus ligula aliquet magna, ac facilisis orci arcu vel lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed elit odio, interdum molestie massa non, mattis varius lectus.</p>
        <p>Sed placerat feugiat nulla, ut feugiat nisl euismod nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec nec est vitae nisi lobortis congue. Fusce et volutpat ex. Sed bibendum lorem ut tortor condimentum, ut sodales ante vestibulum. Curabitur at metus eget lorem porta luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nibh elit, tincidunt ac sodales sed, interdum vel ipsum. Cras vel nisi et turpis laoreet tristique ut a eros. Mauris facilisis justo id lectus vehicula viverra. Etiam nec neque lacus. Proin aliquet metus et ipsum pulvinar sodales. Suspendisse scelerisque massa non consectetur faucibus.</p>
      </div>
    </div>
    <div class="collapsible-item closed">
      <div class="collapsible-heading">
        <h2 class="heading-large">Travel History</h2>
      </div>
      <div class="collapsible-content">
      <table>
        <thead>
          <tr>
            <th>Start</th>
            <th>From</th>
            <th>Destination</th>
            <th>Return</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>London</td>
            <td>31/01/2010</td>
            <td>City name</td>
            <td>31/02/2010</td>
          </tr>
          <tr>
            <td>London</td>
            <td>31/01/2010</td>
            <td>City name</td>
            <td>31/02/2010</td>
          </tr>
          <tr>
            <td>London</td>
            <td>31/01/2010</td>
            <td>City name</td>
            <td>31/02/2010</td>
          </tr>
          <tr>
            <td>London</td>
            <td>31/01/2010</td>
            <td>City name</td>
            <td>31/02/2010</td>
          </tr>
          <tr>
            <td>London</td>
            <td>31/01/2010</td>
            <td>City name</td>
            <td>31/02/2010</td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  </div>
  <!-- collapsible -->
</div>



<div class="example">
  <!-- collapsible -->
  <div class="collapsible collapsible--narrow-theme">
    <div class="collapsible-item closed">
      <div class="collapsible-heading">
        <h2 class="heading-medium">Address History</h2>
      </div>
      <div class="collapsible-content">
        <table>
          <thead>
            <tr>
              <th>Number</th>
              <th>Street</th>
              <th>City</th>
              <th>Postcode</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>32</td>
              <td>Test Street</td>
              <td>City Name</td>
              <td>XX6 6XX</td>
              <td>Country</td>
            </tr>
            <tr>
              <td>43</td>
              <td>Test Street</td>
              <td>City Name</td>
              <td>XX6 6XX</td>
              <td>Country</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <!-- collapsible -->
</div>


{% highlight markup %}

<!-- collapsible -->
<div class="collapsible">
  <div class="collapsible-item closed">
    <div class="collapsible-heading">
      <h2 class="heading-large">Address History</h2>
    </div>
    <div class="collapsible-content">
      <table>
        <thead>
          <tr>
            <th>Number</th>
            <th>Street</th>
            <th>City</th>
            <th>Postcode</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>32</td>
            <td>Test Street</td>
            <td>City Name</td>
            <td>XX6 6XX</td>
            <td>Country</td>
          </tr>
          <tr>
            <td>43</td>
            <td>Test Street</td>
            <td>City Name</td>
            <td>XX6 6XX</td>
            <td>Country</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="collapsible-item closed">
    <div class="collapsible-heading">
      <h2 class="heading-large">Additional Information</h2>
    </div>
    <div class="collapsible-content">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel ex ex. Morbi ultrices urna ac porta condimentum. Vestibulum rutrum quis massa non commodo. Sed pulvinar tortor vitae ex ultrices, tristique ornare massa varius. Sed arcu sapien, sollicitudin et ultrices in, tempus in felis. Fusce sed vestibulum risus, eget volutpat magna. Phasellus tempus nisi ut ipsum malesuada volutpat. Nam aliquam ex vel dictum malesuada. Pellentesque dolor purus, mollis sed massa id, ultrices bibendum orci. Duis imperdiet, leo quis pharetra pharetra, risus ligula aliquet magna, ac facilisis orci arcu vel lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed elit odio, interdum molestie massa non, mattis varius lectus.</p>
      <p>Sed placerat feugiat nulla, ut feugiat nisl euismod nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec nec est vitae nisi lobortis congue. Fusce et volutpat ex. Sed bibendum lorem ut tortor condimentum, ut sodales ante vestibulum. Curabitur at metus eget lorem porta luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nibh elit, tincidunt ac sodales sed, interdum vel ipsum. Cras vel nisi et turpis laoreet tristique ut a eros. Mauris facilisis justo id lectus vehicula viverra. Etiam nec neque lacus. Proin aliquet metus et ipsum pulvinar sodales. Suspendisse scelerisque massa non consectetur faucibus.</p>
    </div>
  </div>
  <div class="collapsible-item closed">
    <div class="collapsible-heading">
      <h2 class="heading-large">Immigration Text</h2>
    </div>
    <div class="collapsible-content">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel ex ex. Morbi ultrices urna ac porta condimentum. Vestibulum rutrum quis massa non commodo. Sed pulvinar tortor vitae ex ultrices, tristique ornare massa varius. Sed arcu sapien, sollicitudin et ultrices in, tempus in felis. Fusce sed vestibulum risus, eget volutpat magna. Phasellus tempus nisi ut ipsum malesuada volutpat. Nam aliquam ex vel dictum malesuada. Pellentesque dolor purus, mollis sed massa id, ultrices bibendum orci. Duis imperdiet, leo quis pharetra pharetra, risus ligula aliquet magna, ac facilisis orci arcu vel lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed elit odio, interdum molestie massa non, mattis varius lectus.</p>
      <p>Sed placerat feugiat nulla, ut feugiat nisl euismod nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec nec est vitae nisi lobortis congue. Fusce et volutpat ex. Sed bibendum lorem ut tortor condimentum, ut sodales ante vestibulum. Curabitur at metus eget lorem porta luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nibh elit, tincidunt ac sodales sed, interdum vel ipsum. Cras vel nisi et turpis laoreet tristique ut a eros. Mauris facilisis justo id lectus vehicula viverra. Etiam nec neque lacus. Proin aliquet metus et ipsum pulvinar sodales. Suspendisse scelerisque massa non consectetur faucibus.</p>
    </div>
  </div>
  <div class="collapsible-item closed">
    <div class="collapsible-heading">
      <h2 class="heading-large">Travel History</h2>
    </div>
    <div class="collapsible-content">
    <table>
      <thead>
        <tr>
          <th>Start</th>
          <th>From</th>
          <th>Destination</th>
          <th>Return</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>London</td>
          <td>31/01/2010</td>
          <td>City name</td>
          <td>31/02/2010</td>
        </tr>
        <tr>
          <td>London</td>
          <td>31/01/2010</td>
          <td>City name</td>
          <td>31/02/2010</td>
        </tr>
        <tr>
          <td>London</td>
          <td>31/01/2010</td>
          <td>City name</td>
          <td>31/02/2010</td>
        </tr>
        <tr>
          <td>London</td>
          <td>31/01/2010</td>
          <td>City name</td>
          <td>31/02/2010</td>
        </tr>
        <tr>
          <td>London</td>
          <td>31/01/2010</td>
          <td>City name</td>
          <td>31/02/2010</td>
        </tr>
      </tbody>
    </table>
    </div>
  </div>
</div>
<!-- collapsible -->

{% endhighlight %}


<h4 class="heading-large">Collapsibles with controls</h4>

<div class="example">
  <!-- collapsible -->
  <section class="collapsible collapsible--narrow-theme">
    <div class="collapsible-controls" data-target="collapsible-controls">
      <!-- list -->
      <ul class="list list--right-inline">
          <li aria-selected="false" data-selected="false"><a href="#">Open All</a></li>
          <li aria-selected="false" data-selected="false"><a href="#">Close All</a></li>
      </ul>
      <!-- list -->
    </div>
    <div class="collapsible-item closed">
      <div class="collapsible-heading">
        <h2 class="heading-medium">Address History</h2>
      </div>
      <div class="collapsible-content">
        <table>
          <thead>
            <tr>
              <th>Number</th>
              <th>Street</th>
              <th>City</th>
              <th>Postcode</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>32</td>
              <td>Test Street</td>
              <td>City Name</td>
              <td>XX6 6XX</td>
              <td>Country</td>
            </tr>
            <tr>
              <td>43</td>
              <td>Test Street</td>
              <td>City Name</td>
              <td>XX6 6XX</td>
              <td>Country</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
  <!-- collapsible -->
</div>

<h4 class="heading-medium">Details Widget</h4>

<div class="example">

<!-- details widget -->
  <details class="details">
    <summary class="details__symmary">What do the indicators demonstrate?</summary>
    <p class="details__item-description"><b>Test</b> - Etiam John ipsum lobortis David Cooper, et asylum seeker Albania. Aenean ac nisl eget enim fermentum Smith. </p>

  </details>
<!-- details widget -->

</div>


{% highlight markup %}

<!-- details widget -->
  <details class="details">
    <summary class="details__summary">What do the indicators demonstrate?</summary>
    <p class="details__item-description"><b>Test</b> - Etiam John ipsum lobortis David Cooper, et asylum seeker Albania. Aenean ac nisl eget enim fermentum Smith. </p>

  </details>
<!-- details widget -->

{% endhighlight %}

<h4 class="heading-medium">Panel</h4>

<div class="example">
    <div class="panel">
        <p class="lede">Search for applications by Case ID or Name</p>
    </div>
</div>

{% highlight markup %}
<!-- panel -->
<div class="panel">
    <p class="lede">Search for applications by Case ID or Name</p>
</div>
<!-- panel -->
{% endhighlight %}
