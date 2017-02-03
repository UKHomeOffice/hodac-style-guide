---
layout: page
title: Building Blocks
permalink: /building-blocks/
---

<h4 class="heading-medium">Search Module</h4>


<section class="search-module">
    <div class="search-module__top">
        <div class="search-module__wrapper">
            <div class="jumbotron search-module__content">
                <h1 class="jumbotron-title">Title</h1>
                <p class="lede">Search for applications by Case ID or Name</p>
            </div>
        </div>
    </div>
    <div class="search-module__bottom">
        <div class="grid-row">
            <div class="column-two-thirds">
                <div class="panel">
                    <form method="get" action="/example/search/">
                      <div class="form-control-search ">
                        <label for="search" class="form-control-search__label">Search</label>
                        <input type="search" name="q" title="Search" class="form-control-search__input  js-search-focus">
                        <input class="form-control-search__submit icon-search" type="submit" value="Search">
                      </div>
                  </form>
                </div>
            </div>
        </div>
    </div>
</section>

<br>

{% highlight markup %}
<!-- search module -->
<section class="search-module">
    <div class="search-module__top">
        <div class="search-module__wrapper">
            <div class="jumbotron search-module__content">
                <h1 class="jumbotron-title">Title</h1>
                <p class="lede">Search for applications by Case ID or Name</p>
            </div>
        </div>
    </div>
    <div class="search-module__bottom">
        <div class="grid-row">
            <div class="column-two-thirds">
                <div class="panel">
                    <form method="get" action="/example/search/">
                      <div class="form-control-search ">
                        <label for="search" class="form-control-search__label">Search</label>
                        <input type="search" name="q" title="Search" class="form-control-search__input  js-search-focus">
                        <input class="form-control-search__submit icon-search" type="submit" value="Search">
                      </div>
                  </form>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- search module -->
{% endhighlight %}


<h4 class="heading-medium">Search Module - anchor left</h4>

<section class="search-module">
    <div class="search-module__top">
        <div class="search-module__wrapper">
            <div class="jumbotron search-module__content">
                <h1 class="jumbotron-title">Title</h1>
                <p class="lede">Search for applications by Case ID or Name</p>
            </div>
        </div>
    </div>
    <div class="search-module__bottom">
        <div class="grid-row search-module__bottom-content">
            <div class="column-two-thirds search-module__bottom-content-left">
                <div class="panel">
                    <div class="tabs">
                        <div class="tabs-nav">
                          <ul class="tabs-list" role="tablist">
                            <li role="presentation"><a href="#tab-1" role="tab" tabindex="0" aria-controls="tab-1" aria-selected="true">Tab 1</a></li>
                            <li role="presentation"><a href="#tab-2" role="tab" tabindex="-1" aria-controls="tab-2">Tab 2</a></li>
                          </ul>
                        </div>
                        <div class="tabs-content">
                          <div class="tabs-panel" id="tab-1" role="tabpanel">
                            <div class="" tabindex="0">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                            </div>
                          </div>
                          <div class="tabs-panel" id="tab-2" role="tabpanel" aria-hidden="true">
                            <div class="" tabindex="0">
                                Tab 2 content
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column-one-third search-module__bottom-content-right">
                <div class="content-links search-module--anchor-left">
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
        </div>
    </div>
</section>


{% highlight markup %}
<!-- search module -->
<section class="search-module">
    <div class="search-module__top">
        <div class="search-module__wrapper">
            <div class="jumbotron search-module__content">
                <h1 class="jumbotron-title">Title</h1>
                <p class="lede">Search for applications by Case ID or Name</p>
            </div>
        </div>
    </div>
    <div class="search-module__bottom">
        <div class="grid-row search-module__bottom-content">
            <div class="column-two-thirds search-module__bottom-content-left">
                <div class="panel">
                    <div class="tabs">
                        <div class="tabs-nav">
                          <ul class="tabs-list" role="tablist">
                            <li role="presentation"><a href="#tab-1" role="tab" tabindex="0" aria-controls="tab-1" aria-selected="true">Tab 1</a></li>
                            <li role="presentation"><a href="#tab-2" role="tab" tabindex="-1" aria-controls="tab-2">Tab 2</a></li>
                          </ul>
                        </div>
                        <div class="tabs-content">
                          <div class="tabs-panel" id="tab-1" role="tabpanel">
                            <div class="" tabindex="0">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                            </div>
                          </div>
                          <div class="tabs-panel" id="tab-2" role="tabpanel" aria-hidden="true">
                            <div class="" tabindex="0">
                                Tab 2 content
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column-one-third search-module__bottom-content-right">
                <div class="content-links search-module--anchor-left">
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
        </div>
    </div>
</section>
<!-- search module -->
{% endhighlight %}


<h4 class="heading-medium">Search Module - with dropdowns</h4>

<section class="search-module">
    <div class="search-module__top">
        <div class="search-module__wrapper">
            <div class="jumbotron jumbotron--narrow-theme search-module__content search-module__content--narrow">
                <h1 class="jumbotron-title">Title</h1>
                <p class="lede">The best place to find intelligence information<br/>
                <strong>Simpler, clearer, faster</strong>
                </p>
            </div>
            <div class="search-module__form-controls">
              <!-- dropdowns -->
              <div class="dropdowns dropdowns--closed">
                <div class="dropdowns__header">
                    <span class="dropdowns__legend">Title</span>
                    <span class="dropdowns__sub">subtitle</span>
                    <div class="dropdowns__controls">
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
              <!-- dropdowns -->
              <div class="dropdowns dropdowns--open">
                <div class="dropdowns__header">
                    <span class="dropdowns__legend">Title</span>
                    <span class="dropdowns__sub">subtitle</span>
                    <div class="dropdowns__controls">
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
              <!-- form-control-search -->
              <div class="form-control-search ">
               <label for="search" class="form-control-search__label">Search</label>
               <input type="search" name="q" title="Search" class="form-control-search__input  js-search-focus">
               <input class="form-control-search__submit icon-search" type="submit" value="Search">
              </div>
              <!-- form-control-search -->
            </div>
        </div>
    </div>
    <!-- info-box -->
    <div class="info-box" role="alert">
      <div class="info-box__wrapper">
        <a href="#">For more complex searches, use our Advanced Search tool</a>
      </div>
    </div>
    <!-- info-box -->
</section>

{% highlight markup %}
<!-- search module -->
<section class="search-module">
    <div class="search-module__top">
        <div class="search-module__wrapper">
            <div class="jumbotron jumbotron--narrow-theme search-module__content search-module__content--narrow">
                <h1 class="jumbotron-title">Title</h1>
                <p class="lede">The best place to find intelligence information<br/>
                <strong>Simpler, clearer, faster</strong>
                </p>
            </div>
            <div class="search-module__form-controls">
              <!-- dropdowns -->
              <div class="dropdowns dropdowns--closed">
                <div class="dropdowns__header">
                    <span class="dropdowns__legend">Title</span>
                    <span class="dropdowns__sub">subtitle</span>
                    <div class="dropdowns__controls">
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
              <!-- dropdowns -->
              <div class="dropdowns dropdowns--open">
                <div class="dropdowns__header">
                    <span class="dropdowns__legend">Title</span>
                    <span class="dropdowns__sub">subtitle</span>
                    <div class="dropdowns__controls">
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
              <!-- form-control-search -->
              <div class="form-control-search ">
               <label for="search" class="form-control-search__label">Search</label>
               <input type="search" name="q" title="Search" class="form-control-search__input  js-search-focus">
               <input class="form-control-search__submit icon-search" type="submit" value="Search">
              </div>
              <!-- form-control-search -->
            </div>
        </div>
    </div>
    <!-- info-box -->
    <div class="info-box" role="alert">
      <div class="info-box__wrapper">
        <a href="#">For more complex searches, use our Advanced Search tool</a>
      </div>
    </div>
    <!-- info-box -->
</section>
<!-- search module -->
{% endhighlight %}
