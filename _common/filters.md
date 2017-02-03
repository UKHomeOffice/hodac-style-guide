---
layout: page
title: Filters
permalink: /filters/
---

<h4 class="heading-medium">Keyword Filter</h4>

<div class="example">
<!-- dropdpwns -->
<div class="dropdowns dropdowns--compact dropdowns--opened dropdowns--expand keywords-filter" aria-expanded="true">
  <div class="dropdowns__header">
      <span class="dropdowns__legend">Add Keywords</span>
      <span class="dropdowns__sub"></span>
      <div class="dropdowns__controls" data-target="dropdowns-toggle">
          <div class="dropdowns__toggle"></div>
      </div>
  </div>
  <div class="dropdowns__container">
      <div class="keyword-filter__container">
          <div class="form-group">
              <div class="keyword-filter__widget-controls">
                  <a class="filter-open-all">Open All</a><a class="filter-close-all">Close All</a>
              </div>
          </div>
      </div>
      <div class="dropdowns__wrapper dropdowns__panel">
        <div class="keyword-filter__container">
            <div class=" keyword-filter__viewport container--overlow">
                <div class="keyword-filter__item keyword-filter__item--open checkbox-filter ">
                    <div class="keyword-filter__header">
                        <div class="keyword-filter__controls keyword-filter__controls--green"></div>
                        <div class="keyword-filter__controls-legend">Enablers of immigration abuse</div>
                    </div>
                    <div class="keyword-filter__selections checkbox-container">
                        <label>
                            <input name="" type="checkbox" value="test1"> Corruption
                        </label>
                        <label>
                            <input name="" type="checkbox" value="test2"> Identity &amp; document fraud
                        </label>
                    </div>
                </div>
                <div class="keyword-filter__item keyword-filter__item--closed checkbox-filter ">
                    <div class="keyword-filter__header">
                        <div class="keyword-filter__controls keyword-filter__controls--green"></div>
                        <div class="keyword-filter__controls-legend">Enablers of immigration abuse</div>
                    </div>
                    <div class="keyword-filter__selections checkbox-container">
                        <label>
                            <input name="" type="checkbox" value="test1"> Corruption
                        </label>
                        <label>
                            <input name="" type="checkbox" value="test2"> Identity &amp; document fraud
                        </label>
                    </div>
                </div>
                <div class="keyword-filter__item keyword-filter__item--closed checkbox-filter ">
                    <div class="keyword-filter__header">
                        <div class="keyword-filter__controls keyword-filter__controls--green"></div>
                        <div class="keyword-filter__controls-legend">Enablers of immigration abuse</div>
                    </div>
                    <div class="keyword-filter__selections checkbox-container">
                        <label>
                            <input name="" type="checkbox" value="test1"> Corruption
                        </label>
                        <label>
                            <input name="" type="checkbox" value="test2"> Identity &amp; document fraud
                        </label>
                    </div>
                </div>
                <div class="keyword-filter__item keyword-filter__item--closed checkbox-filter ">
                    <div class="keyword-filter__header">
                        <div class="keyword-filter__controls keyword-filter__controls--green"></div>
                        <div class="keyword-filter__controls-legend">Enablers of immigration abuse</div>
                    </div>
                    <div class="keyword-filter__selections checkbox-container">
                        <label>
                            <input name="" type="checkbox" value="test1"> Corruption
                        </label>
                        <label>
                            <input name="" type="checkbox" value="test2"> Identity &amp; document fraud
                        </label>
                    </div>
                </div>
                <div class="keyword-filter__item keyword-filter__item--closed checkbox-filter ">
                    <div class="keyword-filter__header">
                        <div class="keyword-filter__controls keyword-filter__controls--green"></div>
                        <div class="keyword-filter__controls-legend">Enablers of immigration abuse</div>
                    </div>
                    <div class="keyword-filter__selections checkbox-container">
                        <label>
                            <input name="" type="checkbox" value="test1"> Corruption
                        </label>
                        <label>
                            <input name="" type="checkbox" value="test2"> Identity &amp; document fraud
                        </label>
                    </div>
                </div>
            </div>
        </div>
      </div>
  </div>
</div>
<!-- dropdowns -->

</div>


{% highlight markup %}

<!-- dropdpwns -->
<div class="dropdowns dropdowns--compact dropdowns--opened dropdowns--expand keywords-filter" aria-expanded="true">
  <div class="dropdowns__header">
      <span class="dropdowns__legend">Add Keywords</span>
      <span class="dropdowns__sub"></span>
      <div class="dropdowns__controls" data-target="dropdowns-toggle">
          <div class="dropdowns__toggle"></div>
      </div>
  </div>
  <div class="dropdowns__container">
        <!-- keywords-filter content -->
      <div class="keyword-filter__container">
          <div class="form-group">
              <div class="keyword-filter__widget-controls">
                  <a class="filter-open-all">Open All</a><a class="filter-close-all">Close All</a>
              </div>
          </div>
      </div>
      <div class="dropdowns__wrapper dropdowns__panel">
        <div class="keyword-filter__container">
            <div class="keyword-filter__viewport container--overlow">
                <div class="keyword-filter__item keyword-filter__item--open checkbox-filter ">
                    <div class="keyword-filter__header">
                        <div class="keyword-filter__controls keyword-filter__controls--green"></div>
                        <div class="keyword-filter__controls-legend">Enablers of immigration abuse</div>
                    </div>
                    <div class="keyword-filter__selections checkbox-container">
                        <label>
                            <input name="" type="checkbox" value="test1"> Corruption
                        </label>
                        <label>
                            <input name="" type="checkbox" value="test2"> Identity &amp; document fraud
                        </label>
                    </div>
                </div>
            </div>
        </div>
      </div>
  </div>
</div>
<!-- dropdpwns -->

{% endhighlight %}


<h4 class="heading-medium">Date Filter</h4>

<div class="example">

<!-- dropdpwns -->
<div class="dropdowns dropdowns--compact dropdowns--opened dropdowns--expand date-filter checkbox-filter" aria-expanded="true">
  <div class="dropdowns__header">
      <span class="dropdowns__legend">Date range</span>
      <span class="dropdowns__sub"></span>
      <div class="dropdowns__controls" data-target="dropdowns-toggle">
          <div class="dropdowns__toggle"></div>
      </div>
  </div>
  <div class="dropdowns__container">
      <div class="dropdowns__wrapper dropdowns__panel">
        <!-- date filter content -->
        <div class="date-filter__container checkbox-container container">
            <fieldset>
                <label>
                    <input checked="checked" name="test" type="radio" value="test">All
                </label>
                <label>
                    <input name="test" type="radio" value="test">Last 7 days
                </label>
                <label>
                    <input name="test" type="radio" value="test">Last 30 days
                </label>
                <label>
                    <input name="test" type="radio" value="test">Last 3 months
                </label>
                <label>
                    <input name="test" type="radio" value="test"> Last 6 months
                </label>
                <label>
                    <input name="test" type="radio" value="test"> Last 12 months
                </label>
                <label>
                    <input name="test" type="radio" value="test"> Custom date
                    <div class="date-filter__custom">
                        <label>From:</label>
                        <input name="test" type="text" value="">
                        <label>To:</label>
                        <input name="test" type="text" value="">
                        <p>
                            <span class="form-hint">For example, From: 2005 To 2007 or From : 21/11/2014 To: 30/09/2015</span>
                        </p>
                    </div>
                </label>
            </fieldset>
        </div>
        <!-- date filter content -->
      </div>
  </div>
</div>
<!-- dropdowns -->

</div>

{% highlight markup %}

<!-- dropdowns -->
<div class="dropdowns dropdowns--compact dropdowns--opened dropdowns--expand date-filter checkbox-filter" aria-expanded="true">
  <div class="dropdowns__header">
      <span class="dropdowns__legend">Date range</span>
      <span class="dropdowns__sub"></span>
      <div class="dropdowns__controls" data-target="dropdowns-toggle">
          <div class="dropdowns__toggle"></div>
      </div>
  </div>
  <div class="dropdowns__container">
      <div class="dropdowns__wrapper dropdowns__panel">
        <!-- date filter content -->
        <div class="date-filter__container checkbox-container container">
            <fieldset>
                <label>
                    <input checked="checked" name="test" type="radio" value="test">All
                </label>
                <label>
                    <input name="test" type="radio" value="test">Last 7 days
                </label>
                <label>
                    <input name="test" type="radio" value="test">Last 30 days
                </label>
                <label>
                    <input name="test" type="radio" value="test">Last 3 months
                </label>
                <label>
                    <input name="test" type="radio" value="test"> Last 6 months
                </label>
                <label>
                    <input name="test" type="radio" value="test"> Last 12 months
                </label>
                <label>
                    <input name="test" type="radio" value="test"> Custom date
                    <div class="date-filter__custom">
                        <label>From:</label>
                        <input name="test" type="text" value="">
                        <label>To:</label>
                        <input name="test" type="text" value="">
                        <p>
                            <span class="form-hint">For example, From: 2005 To 2007 or From : 21/11/2014 To: 30/09/2015</span>
                        </p>
                    </div>
                </label>
            </fieldset>
        </div>
        <!-- date filter content -->
      </div>
  </div>
</div>
<!-- dropdowns -->

{% endhighlight %}



<h4 class="heading-medium">Nationality Filter</h4>

<div class="example">

<!-- dropdowns -->
<div class="dropdowns dropdowns--compact dropdowns--opened dropdowns--expand nationality-filter checkbox-filter" aria-expanded="true">
  <div class="dropdowns__header">
      <span class="dropdowns__legend">Add Nationality</span>
      <span class="dropdowns__sub"></span>
      <div class="dropdowns__controls" data-target="dropdowns-toggle">
          <div class="dropdowns__toggle"></div>
      </div>
  </div>
  <div class="dropdowns__container">
      <div class="dropdowns__wrapper dropdowns__panel">
        <!-- nationality-filter container -->
        <div class="nationality-filter__container">
            <div class="js-auto-height-inner">
                <input class="form-control" id="Keyword" name="Keyword" type="text" value="">
            </div>
        </div>
        <div>
            <p>
                <span class="form-hint">Can include contract title, description and buyer. Maximum of 6 words</span>
            </p>
        </div>
        <!-- nationality-filter container -->
      </div>
  </div>
</div>
<!-- dropdowns -->

</div>

<div class="example">

<!-- dropdowns -->
<div class="dropdowns dropdowns--compact dropdowns--opened dropdowns--expand nationality-filter checkbox-filter" aria-expanded="true">
  <div class="dropdowns__header">
      <span class="dropdowns__legend">Add Nationality</span>
      <span class="dropdowns__sub"></span>
      <div class="dropdowns__controls" data-target="dropdowns-toggle">
          <div class="dropdowns__toggle"></div>
      </div>
  </div>
  <div class="dropdowns__container">
      <div class="dropdowns__wrapper dropdowns__panel">
        <!-- nationality-filter container -->
        <div class="nationality-filter__container">
            <div class="js-auto-height-inner">
                <input class="form-control" id="Keyword" name="Keyword" type="text" value="a">
                <div class="suggest" ng-model="countries">
                  <ul>
                    <li>Aa</li>
                    <li>Ab</li>
                  </ul>
                </div>
            </div>
        </div>
        <div>
            <p>
                <span class="form-hint">Can include contract title, description and buyer. Maximum of 6 words</span>
            </p>
        </div>
        <!-- nationality-filter container -->
      </div>
  </div>
</div>
<!-- dropdowns -->

</div>

{% highlight markup %}

<!-- dropdowns -->
<div class="dropdowns dropdowns--compact dropdowns--opened dropdowns--expand nationality-filter checkbox-filter" aria-expanded="true">
  <div class="dropdowns__header">
      <span class="dropdowns__legend">Add Nationality</span>
      <span class="dropdowns__sub"></span>
      <div class="dropdowns__controls" data-target="dropdowns-toggle">
          <div class="dropdowns__toggle"></div>
      </div>
  </div>
  <div class="dropdowns__container">
      <div class="dropdowns__wrapper dropdowns__panel">
        <!-- nationality-filter container -->
        <div class="nationality-filter__container">
            <div class="js-auto-height-inner">
                <input class="form-control" id="Keyword" name="Keyword" type="text" value="">
            </div>
        </div>
        <div>
            <p>
                <span class="form-hint">Can include contract title, description and buyer. Maximum of 6 words</span>
            </p>
        </div>
        <!-- nationality-filter container -->
      </div>
  </div>
</div>
<!-- dropdowns -->

{% endhighlight %}


<h4 class="heading-medium">Search module Filter</h4>

<h5 class="heading-small">Dropdowns form</h5>

<div class="example" style="height:150px">
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
          <div class="dropdowns__wrapper dropdowns__form-group">
            <fieldset>
              <!-- form-checkbox-list -->
              <div class="form-checkbox-list form-checkbox-list--stack">
                <label class="form-checkbox-list__label">
                    <input name="test" class="form-checkbox-list__input" type="radio" value="test">All
                </label>
                <label class="form-checkbox-list__label">
                    <input name="test" class="form-checkbox-list__input" type="radio" value="test">Last 7 days
                </label>
              </div>
              <!-- form-checkbox-list -->
            </fieldset>
          </div>
      </div>
    </div>
    <!-- dropdowns -->
    </div>
  </div>
</div>

{% highlight markup %}
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
      <div class="dropdowns__wrapper dropdowns__form-group">
        <fieldset>
          <!-- form-checkbox-list -->
          <div class="form-checkbox-list form-checkbox-list--stack">
            <label class="form-checkbox-list__label">
                <input name="test" class="form-checkbox-list__input" type="radio" value="test">All
            </label>
            <label class="form-checkbox-list__label">
                <input name="test" class="form-checkbox-list__input" type="radio" value="test">Last 7 days
            </label>
          </div>
          <!-- form-checkbox-list -->
        </fieldset>
      </div>
  </div>
</div>
<!-- dropdowns -->
{% endhighlight %}


<h5 class="heading-small">Dropdowns form with tabs</h5>

<div class="example" style="height:250px">
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
        <!-- dropdowns tabs -->
        <div class="dropdowns__wrapper unstyled-tabs dropdowns-tabs--theme">
            <div class="unstyled-tabs__nav unstyled-tabs__nav--rtl">
              <ul class="unstyled-tabs__list  " role="tablist">
                <li role="presentation"><a href="#tab-1" role="tab" tabindex="0" aria-controls="tab-1" aria-selected="true">Tab 1</a></li>
                <li role="presentation"><a href="#tab-2" role="tab" tabindex="-1" aria-controls="tab-2">Tab 2</a></li>
              </ul>
            </div>
            <div class="unstyled-tabs__content">
              <div class="unstyled-tabs__panel" id="tab-1" role="tabpanel" aria-hidden="true">
                <div class="dropdowns__form-group" tabindex="0">
                  <fieldset>
                  <!-- form-checkbox-list -->
                    <div class="form-checkbox-list form-checkbox-list--stack">
                      <label class="form-checkbox-list__label">
                          <input name="test" class="form-checkbox-list__input" type="radio" value="test">All
                      </label>
                      <label class="form-checkbox-list__label">
                          <input name="test" class="form-checkbox-list__input" type="radio" value="test">Last 7 days
                      </label>
                      <label class="form-checkbox-list__label">
                          <input name="test" class="form-checkbox-list__input" type="radio" value="test">Last 30 days
                      </label>
                      <label class="form-checkbox-list__label">
                          <input name="test" class="form-checkbox-list__input" type="radio" value="test">Last 3 months
                      </label>
                      <label class="form-checkbox-list__label">
                          <input name="test" class="form-checkbox-list__input" type="radio" value="test">Last 6 months
                      </label>
                      <label class="form-checkbox-list__label">
                          <input name="test" class="form-checkbox-list__input" type="radio" value="test">Last 12 months
                      </label>
                    </div>
                    <!-- form-checkbox-list -->
                  </fieldset>
                </div>
              </div>
              <div class="unstyled-tabs__panel" id="tab-2" role="tabpanel" aria-hidden="false">
                <div class="dropdowns__form-group" tabindex="0">
                  <fieldset>
                  <!-- form-checkbox-list -->
                    <div class="form-checkbox-list">
                      <label class="form-checkbox-list__label">
                          <input name="test" class="form-checkbox-list__input" type="radio" value="test">Custom date
                      </label>
                    </div>
                    <!-- form-checkbox-list -->
                    <!-- form-control-date -->
                    <div class="form-control-date">
                      <label class="form-control-date__label" for="from-date">
                        From:
                      </label>
                      <div id="from-date">
                        <input class="form-control-date__dd" name="from-dd" type="text" value="" placeholder="DD" />
                        <input class="form-control-date__mm" name="from-mm" type="text" value="" placeholder="MM"/>
                        <input class="form-control-date__yyyy" name="from-yyyy" type="text" value="" placeholder="YYYY"/>
                      </div>
                      <label class="form-control-date__label" for="to-date">
                        To:
                      </label>
                      <div id="to-date">
                        <input class="form-control-date__dd" name="from-dd" type="text" value="" placeholder="DD" />
                        <input class="form-control-date__mm" name="from-mm" type="text" value="" placeholder="MM"/>
                        <input class="form-control-date__yyyy" name="from-yyyy" type="text" value="" placeholder="YYYY"/>
                      </div>
                    </div>
                    <!-- form-control-date -->
                  </fieldset>
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
  <div class="dropdowns dropdowns--opened">
    <div class="dropdowns__header">
        <span class="dropdowns__legend">Title</span>
        <span class="dropdowns__sub">subtitle</span>
        <div class="dropdowns__controls" data-target="dropdowns-toggle">
            <div class="dropdowns__toggle"></div>
        </div>
    </div>
    <div class="dropdowns__container">
    <!-- dropdowns tabs -->
    <div class="dropdowns__wrapper unstyled-tabs dropdowns-tabs--theme">
        <div class="unstyled-tabs__nav unstyled-tabs__nav--rtl">
          <ul class="unstyled-tabs__list  " role="tablist">
            <li role="presentation"><a href="#tab-1" role="tab" tabindex="0" aria-controls="tab-1" aria-selected="true">Tab 1</a></li>
            <li role="presentation"><a href="#tab-2" role="tab" tabindex="-1" aria-controls="tab-2">Tab 2</a></li>
          </ul>
        </div>
        <div class="unstyled-tabs__content">
          <div class="unstyled-tabs__panel" id="tab-1" role="tabpanel" aria-hidden="true">
            <div class="dropdowns__form-group" tabindex="0">
              <fieldset>
              <!-- form-checkbox-list -->
                <div class="form-checkbox-list form-checkbox-list--stack">
                  <label class="form-checkbox-list__label">
                      <input name="test" class="form-checkbox-list__input" type="radio" value="test">All
                  </label>
                  <label class="form-checkbox-list__label">
                      <input name="test" class="form-checkbox-list__input" type="radio" value="test">Last 7 days
                  </label>
                  <label class="form-checkbox-list__label">
                      <input name="test" class="form-checkbox-list__input" type="radio" value="test">Last 30 days
                  </label>
                  <label class="form-checkbox-list__label">
                      <input name="test" class="form-checkbox-list__input" type="radio" value="test">Last 3 months
                  </label>
                  <label class="form-checkbox-list__label">
                      <input name="test" class="form-checkbox-list__input" type="radio" value="test">Last 6 months
                  </label>
                  <label class="form-checkbox-list__label">
                      <input name="test" class="form-checkbox-list__input" type="radio" value="test">Last 12 months
                  </label>
                </div>
                <!-- form-checkbox-list -->
              </fieldset>
            </div>
          </div>
          <div class="unstyled-tabs__panel" id="tab-2" role="tabpanel" aria-hidden="false">
            <div class="dropdowns__form-group" tabindex="0">
              <fieldset>
              <!-- form-checkbox-list -->
                <div class="form-checkbox-list">
                  <label class="form-checkbox-list__label">
                      <input name="test" class="form-checkbox-list__input" type="radio" value="test">Custom date
                  </label>
                </div>
                <!-- form-checkbox-list -->
                <!-- form-control-date -->
                <div class="form-control-date">
                  <label class="form-control-date__label" for="from-date">
                    From:
                  </label>
                  <div id="from-date">
                    <input class="form-control-date__dd" name="from-dd" type="text" value="" placeholder="DD" />
                    <input class="form-control-date__mm" name="from-mm" type="text" value="" placeholder="MM"/>
                    <input class="form-control-date__yyyy" name="from-yyyy" type="text" value="" placeholder="YYYY"/>
                  </div>
                  <label class="form-control-date__label" for="to-date">
                    To:
                  </label>
                  <div id="to-date">
                    <input class="form-control-date__dd" name="from-dd" type="text" value="" placeholder="DD" />
                    <input class="form-control-date__mm" name="from-mm" type="text" value="" placeholder="MM"/>
                    <input class="form-control-date__yyyy" name="from-yyyy" type="text" value="" placeholder="YYYY"/>
                  </div>
                </div>
                <!-- form-control-date -->
              </fieldset>
            </div>
          </div>
        </div>
    </div>
    <!-- dropdowns tabs -->
    </div>
  </div>
<!-- dropdowns -->
{% endhighlight %}

<h4 class="heading-medium">Grid filters summary</h4>

<div class="example">

  <!-- filtered-index -->
  <div class="filtered-index grid-row">
    <div class="filter-form-block column-one-quarter">
      <div class="inner-block">
      <!-- content-->
      <h2>Refine your results</h2>
      <!-- content-->
      </div>
    </div>
    <div class="filter-results-block column-three-quarters">
      <div class="inner-block">
      <!-- content-->
      <!-- filter-results-summary -->
      <div class="filter-results-summary">
        <span class="count">9</span> <strong>DPTS 7 cases</strong> filtered
        <span class="topics-selections">
            by <strong>Purple</strong> <a href="#" data-field="topics" data-val="purple" title="Remove filter by Purple">×</a>
        </span>
        <span class="topics-selections">
            by <strong>Cases added today</strong> <a href="#" data-field="topics" data-val="purple" title="Remove filter by Cases added today">×</a>
        </span>
      </div>
      <!-- filter-results-summary -->
      <!-- content-->
      </div>
    </div>
  </div>
  <!-- filtered-index -->

</div>

{% highlight markup %}

<!-- filtered-index -->
<div class="filtered-index grid-row">
  <div class="filter-form-block column-one-quarter">
    <div class="inner-block">
    <!-- content-->
    <h2>Refine your results</h2>
    <!-- content-->
    </div>
  </div>
  <div class="filter-results-block column-three-quarters">
    <div class="inner-block">
    <!-- content-->
    <!-- filter-results-summary -->
    <div class="filter-results-summary">
      <span class="count">9</span> <strong>DPTS 7 cases</strong> filtered
      <span class="topics-selections">
          by <strong>Purple</strong> <a href="#" data-field="topics" data-val="purple" title="Remove filter by Purple">×</a>
      </span>
      <span class="topics-selections">
          by <strong>Cases added today</strong> <a href="#" data-field="topics" data-val="purple" title="Remove filter by Cases added today">×</a>
      </span>
    </div>
    <!-- filter-results-summary -->
    <!-- content-->
    </div>
  </div>
</div>
<!-- filtered-index -->

{% endhighlight %}
