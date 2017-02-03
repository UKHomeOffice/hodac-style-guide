---
layout: page
title: Form
permalink: /form/
---

<h4 class="heading-medium">Search input</h4>

<div class="example">
  <div class="form-control-search">
    <label for="search" class="form-control-search__label">Search</label>
    <input type="search" name="q" title="Search" class="form-control-search__input" data-target="target-search-input-control">
    <input class="form-control-search__submit icon-search" type="submit" value="Search">
  </div>
</div>

{% highlight markup %}
<!-- search input -->
  <div class="form-control-search">
    <label for="search" class="form-control-search__label">Search</label>
    <input type="search" name="q" title="Search" class="form-control-search__input" data-target="target-search-input-control">
    <input class="form-control-search__submit icon-search" type="submit" value="Search">
  </div>
<!-- search input -->
{% endhighlight %}

<h4 class="heading-medium">Date input</h4>

<div class="example">
  <div class="form-control-date">
    <label class="form-control-date__label" for="from-date">
      From:
    </label>
    <div id="from-date">
      <input class="form-control-date__dd" name="from-dd" type="text" value="" placeholder="DD" />
      <input class="form-control-date__mm" name="from-mm" type="text" value="" placeholder="MM"/>
      <input class="form-control-date__yyyy" name="from-yyyy" type="text" value="" placeholder="YYYY"/>
    </div>
  </div>
</div>

{% highlight markup %}
<!-- date input -->
<div class="form-control-date">
  <label class="form-control-date__label" for="from-date">
    From:
  </label>
  <div id="from-date">
    <input class="form-control-date__dd" name="from-dd" type="text" value="" placeholder="DD" />
    <input class="form-control-date__mm" name="from-mm" type="text" value="" placeholder="MM"/>
    <input class="form-control-date__yyyy" name="from-yyyy" type="text" value="" placeholder="YYYY"/>
  </div>
</div>
<!-- date input -->
{% endhighlight %}

<h4 class="heading-medium">Checkbox List</h4>

<div class="example">
    <div class="form-checkbox-list form-checkbox-list--stack">
      <label class="form-checkbox-list__label">
          <input name="test" class="form-checkbox-list__input" type="radio" value="test"> Checkbox 1
      </label>
      <label class="form-checkbox-list__label">
          <input name="test" class="form-checkbox-list__input" type="radio" value="test"> Checkbox 2
      </label>
  </div>
</div>


{% highlight markup %}
<!-- checkbox list -->
<div class="form-checkbox-list form-checkbox-list--stack">
  <label class="form-checkbox-list__label">
      <input name="test" class="form-checkbox-list__input" type="radio" value="test"> Checkbox 1
  </label>
  <label class="form-checkbox-list__label">
      <input name="test" class="form-checkbox-list__input" type="radio" value="test"> Checkbox 2
  </label>
</div>
<!-- checkbox list -->
{% endhighlight %}
