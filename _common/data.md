---
layout: page
title: Data
permalink: /data/
---

<h4 class="heading-medium">Tabular data</h4>

<h5>Table with caption</h5>

<div class="example">
<table>
  <caption>Select case to view further details</caption>
  <thead>
    <tr>
      <th scope="col">LeadID</th>
      <th scope="col">CaseID</th>
      <th scope="col">Full Name</th>
      <th scope="col">DOB</th>
      <th scope="col" class="numeric">Age</th>
      <th scope="col">Nationality</th>
      <th scope="col">Gender</th>
      <th scope="col" class="numeric">No. in Case</th>
      <th scope="col">Score</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>12345654</td>
      <td>12345654</td>
      <td>SUKHDEEP DHILLON</td>
      <td>04/05/74</td>
      <td class="numeric">42</td>
      <td>INDIA</td>
      <td>M</td>
      <td class="numeric">4</td>
      <td><span class="red">Red</span></td>
    </tr>
    <tr>
      <td>12345654</td>
      <td>12345654</td>
      <td>SUKHDEEP DHILLON</td>
      <td>04/05/74</td>
      <td class="numeric">42</td>
      <td>INDIA</td>
      <td>M</td>
      <td class="numeric">4</td>
      <td><span class="green">Green</span></td>
    </tr>
    <tr>
      <td>12345654</td>
      <td>12345654</td>
      <td>SUKHDEEP DHILLON</td>
      <td>04/05/74</td>
      <td class="numeric">42</td>
      <td>INDIA</td>
      <td>M</td>
      <td class="numeric">4</td>
      <td><span class="red">Red</span></td>
    </tr>
    <tr>
      <td>12345654</td>
      <td>12345654</td>
      <td>SUKHDEEP DHILLON</td>
      <td>04/05/74</td>
      <td class="numeric">42</td>
      <td>INDIA</td>
      <td>M</td>
      <td class="numeric">4</td>
      <td><span class="red">Red</span></td>
    </tr>
  </tbody>
  </table>
</div>

{% highlight markup %}
<!-- table with caption -->
<table>
  <caption>Select case to view further details</caption>
  <thead>
    <tr>
      <th scope="col">LeadID</th>
      <th scope="col">CaseID</th>
      <th scope="col">Full Name</th>
      <th scope="col">DOB</th>
      <th scope="col" class="numeric">Age</th>
      <th scope="col">Nationality</th>
      <th scope="col">Gender</th>
      <th scope="col" class="numeric">No. in Case</th>
      <th scope="col">Score</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>12345654</td>
      <td>12345654</td>
      <td>SUKHDEEP DHILLON</td>
      <td>04/05/74</td>
      <td class="numeric">42</td>
      <td>INDIA</td>
      <td>M</td>
      <td class="numeric">4</td>
      <td><span class="red">Red</span></td>
    </tr>
  </tbody>
</table>
<!-- table with caption -->
{% endhighlight %}

<br/>

<h5>Table with expanding rows</h5>

<div class="example">

<!-- datagrids -->
<section class="data-grids">
  <table>
    <caption>Select case to view further details</caption>
    <thead>
      <tr>
        <th scope="col">LeadID</th>
        <th scope="col">CaseID</th>
        <th scope="col">Full Name</th>
        <th scope="col">DOB</th>
        <th scope="col" class="numeric">Age</th>
        <th scope="col">Nationality</th>
        <th scope="col">Gender</th>
        <th scope="col" class="numeric">No.Case</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr class="data-grids__row data-grids__row--expanded" data-parent="12345654">
        <td><b>12345654</b></td>
        <td><a href="#">12345654</a></td>
        <td>SUKHDEEP DHILLON</td>
        <td>04/05/74</td>
        <td class="numeric">42</td>
        <td>INDIA</td>
        <td>M</td>
        <td class="numeric">4</td>
        <td>
          <div class="data-grids--opened">
          </div>
        </td>
      </tr>
      <tr class="data-grids__sub-row" data-child="12345654">
        <td class="data-grids--no-border"></td>
        <td><a href="#">12345654</a></td>
        <td>SUKHDEEP DHILLON</td>
        <td>04/05/74</td>
        <td class="numeric">42</td>
        <td>INDIA</td>
        <td>M</td>
        <td class="numeric">4</td>
      </tr>
      <tr class="data-grids__sub-row" data-child="12345654">
        <td></td>
        <td><a href="#">12345654</a></td>
        <td>SUKHDEEP DHILLON</td>
        <td>04/05/74</td>
        <td class="numeric">42</td>
        <td>INDIA</td>
        <td>M</td>
        <td class="numeric">4</td>
      </tr>
      <tr class="data-grids__row" data-parent="12345655">
        <td><b>12345655</b></td>
        <td><a href="#">12345654</a></td>
        <td>SUKHDEEP DHILLON</td>
        <td>04/05/74</td>
        <td class="numeric">42</td>
        <td>INDIA</td>
        <td>M</td>
        <td class="numeric">1</td>
        <td>
        </td>
      </tr>
    </tbody>
  </table>
</section>
<!-- datagrids -->

</div>


{% highlight markup %}

<!-- datagrids -->
<section class="data-grids">
  <table>
    <caption>Select case to view further details</caption>
    <thead>
      <tr>
        <th scope="col">LeadID</th>
        <th scope="col">CaseID</th>
        <th scope="col">Full Name</th>
        <th scope="col">DOB</th>
        <th scope="col" class="numeric">Age</th>
        <th scope="col">Nationality</th>
        <th scope="col">Gender</th>
        <th scope="col" class="numeric">No.Case</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr class="data-grids__row data-grids__row--expanded" data-parent="12345654">
        <td><b>12345654</b></td>
        <td><a href="#">12345654</a></td>
        <td>SUKHDEEP DHILLON</td>
        <td>04/05/74</td>
        <td class="numeric">42</td>
        <td>INDIA</td>
        <td>M</td>
        <td class="numeric">4</td>
        <td>
          <div class="data-grids--opened">
          </div>
        </td>
      </tr>
      <tr class="data-grids__sub-row" data-child="12345654">
        <td class="data-grids--no-border"></td>
        <td><a href="#">12345654</a></td>
        <td>SUKHDEEP DHILLON</td>
        <td>04/05/74</td>
        <td class="numeric">42</td>
        <td>INDIA</td>
        <td>M</td>
        <td class="numeric">4</td>
      </tr>
      <tr class="data-grids__sub-row" data-child="12345654">
        <td></td>
        <td><a href="#">12345654</a></td>
        <td>SUKHDEEP DHILLON</td>
        <td>04/05/74</td>
        <td class="numeric">42</td>
        <td>INDIA</td>
        <td>M</td>
        <td class="numeric">4</td>
      </tr>
      <tr class="data-grids__row" data-parent="12345655">
        <td><b>12345655</b></td>
        <td><a href="#">12345654</a></td>
        <td>SUKHDEEP DHILLON</td>
        <td>04/05/74</td>
        <td class="numeric">42</td>
        <td>INDIA</td>
        <td>M</td>
        <td class="numeric">1</td>
        <td>
        </td>
      </tr>
    </tbody>
  </table>
</section>
<!-- datagrids -->

{% endhighlight %}

<h5>Table with grouped rows</h5>

<div class="example">

<!-- datagrids -->
<section class="data-grids data-grids--grouped">
  <table>
    <thead>
      <tr class="data-grids__grouped-header">
        <th scope="col" class="text-align-center">
          <input type="checkbox"/>
        </th>
        <th scope="col" class="text-nowrap">Case ID</th>
        <th scope="col" class="text-nowrap">Full Name</th>
        <th scope="col">Nationality</th>
        <th scope="col" class="numeric">Biometrics</th>
      </tr>
    </thead>
    <tbody>
      <tr class="data-grids__grouped-inner-header">
        <td scope="col" class="text-align-center">
          <input type="checkbox"/>
        </td>
        <td colspan="4">
          <b>Group 1</b>
        </td>
      </tr>
      <tr class="data-grids__row">
        <td class="text-align-center">
          <input type="checkbox"/>
        </td>
        <td>
          12345655
        </td>
        <td>SUKHDEEP DHILLON</td>
        <td>
          INDIA
        </td>
        <td class="numeric">
          04/05/2014
        </td>
      </tr>
    </tbody>
  </table>
</section>
<!-- datagrids -->

</div>


{% highlight markup %}

<!-- datagrids -->
<section class="data-grids data-grids--grouped">
  <table>
    <thead>
      <tr class="data-grids__grouped-header">
        <th scope="col" class="text-align-center">
          <input type="checkbox"/>
        </th>
        <th scope="col" class="text-nowrap">Case ID</th>
        <th scope="col" class="text-nowrap">Full Name</th>
        <th scope="col">Nationality</th>
        <th scope="col" class="numeric">Biometrics</th>
      </tr>
    </thead>
    <tbody>
      <tr class="data-grids__grouped-inner-header">
        <td scope="col" class="text-align-center">
          <input type="checkbox"/>
        </td>
        <td colspan="4">
          <b>Group 1</b>
        </td>
      </tr>
      <tr class="data-grids__row">
        <td class="text-align-center">
          <input type="checkbox"/>
        </td>
        <td>
          12345655
        </td>
        <td>SUKHDEEP DHILLON</td>
        <td>
          INDIA
        </td>
        <td class="numeric">
          04/05/2014
        </td>
      </tr>
    </tbody>
  </table>
</section>
<!-- datagrids -->

{% endhighlight %}




<h4 class="heading-medium">Indicators</h4>

<div class="example">
  <!-- indicators -->
  <ol class="indicators">
    <li>Prior HR Grant <span>Y</span></li>
    <li>'Brit'/'GBR' noted <span>Y</span></li>
    <li>Dep child 7+ <span>Y</span></li>
    <li>Birth Cert <span>N</span></li>
    <li>British Sponsor <span>Y</span></li>
    <li>Spouse/Partner App <span>N</span></li>
    <li>Previous Tier 4 <span>Y</span></li>
    <li>Fee Issue <span>Y</span></li>
    <li>Previous LOTR <span>Y</span></li>
    <li>CID Grants <span>2</span></li>
    <li>WI Trace <span>1</span></li>
    <li>Rep Score <span>4</span></li>
    <li>Multicase types <span>2</span></li>
  </ol>
  <!-- indicators -->
</div>

<div class="example">

  <div class="grid-row">

   <div class="column-one-third">
      <!-- indicators -->
      <ol class="indicators">
        <li>Prior HR Grant <span>Y</span></li>
        <li>'Brit'/'GBR' noted <span>Y</span></li>
        <li>Dep child 7+ <span>Y</span></li>
        <li>Birth Cert <span>N</span></li>
        <li>British Sponsor <span>Y</span></li>
        <li>Spouse/Partner App <span>N</span></li>
     </ol>
     <!-- indicators -->
   </div>

   <div class="column-one-third">
      <!-- indicators -->
      <ol class="indicators">
        <li>Previous Tier 4 <span>Y</span></li>
        <li>Fee Issue <span>Y</span></li>
        <li>Previous LOTR <span>Y</span></li>
        <li>CID Grants <span>2</span></li>
        <li>WI Trace <span>1</span></li>
        <li>Rep Score <span>4</span></li>
      </ol>
      <!-- indicators -->
   </div>

   <div class="column-one-third">
      <!-- indicators -->
      <ol class="indicators">
          <li>Multicase types <span>2</span></li>
      </ol>
     <!-- indicators -->
   </div>

 </div>

</div>

{% highlight markup %}

<!-- indicators -->
<ol class="indicators">
  <li>Prior HR Grant <span>Y</span></li>
  <li>'Brit'/'GBR' noted <span>Y</span></li>
  <li>Dep child 7+ <span>Y</span></li>
  <li>Birth Cert <span>N</span></li>
  <li>British Sponsor <span>Y</span></li>
  <li>Spouse/Partner App <span>N</span></li>
  <li>Previous Tier 4 <span>Y</span></li>
  <li>Fee Issue <span>Y</span></li>
  <li>Previous LOTR <span>Y</span></li>
  <li>CID Grants <span>2</span></li>
  <li>WI Trace <span>1</span></li>
  <li>Rep Score <span>4</span></li>
  <li>MDualtta c masiger taytpioens <span>2</span></li>
</ol>
<!-- indicators -->

{% endhighlight %}


<h4 class="heading-medium">Case Overview</h4>

<div class="example">

  <div class="grid-row panel report">
    <div class="column-one-third">
      <h1>Sandip Bhogal</h1>
      <h2>Case ID: 1234567</h2>
      <dl class="report">
        <dt>Nationality</dt>
        <dd>IND</dd>
        <dt>Gender</dt>
        <dd>M</dd>
        <dt>Age at Application</dt>
        <dd>32</dd>
        <dt>Case Relationship</dt>
        <dd>Main</dd>
      </dl>
    </div>
    <div class="column-one-third">
      <dl class="chart">
        <dt>Compliant</dt>
        <dd class="percentage positive percentage-72">72</dd>
        <dt>Non-compliant</dt>
        <dd class="percentage negative percentage-28">28</dd>
      </dl>
    </div>
    <div class="column-one-third">
    </div>
  </div>

</div>


<h4 class="heading-large">Bar data</h4>
<h5 class="heading-medium">Vertical</h5>

<div class="example">
  <div class="grid-row panel">
    <div class="column-one-third">
      <dl class="chart">
        <dt>Compliant</dt>
        <dd class="percentage positive percentage-80">80</dd>
        <dt>Non-compliant</dt>
        <dd class="percentage negative percentage-20">20</dd>
      </dl>
    </div>
    <div class="column-one-third">
      <dl class="chart">
        <dt>Compliant</dt>
        <dd class="percentage positive percentage-50">50</dd>
        <dt>Non-compliant</dt>
        <dd class="percentage negative percentage-50">50</dd>
      </dl>
    </div>
    <div class="column-one-third">
      <dl class="chart">
        <dt>Compliant</dt>
        <dd class="percentage positive percentage-22">22</dd>
        <dt>Non-compliant</dt>
        <dd class="percentage negative percentage-78">78</dd>
      </dl>
    </div>
  </div>
</div>

{% highlight markup %}

<!-- bar data -->
<dl class="chart">
  <dt>Compliant</dt>
  <dd class="percentage positive percentage-80">80</dd>
  <dt>Non-compliant</dt>
  <dd class="percentage negative percentage-20">20</dd>
</dl>
<!-- bar data -->

{% endhighlight %}

<h4 class="heading-medium">Swatch</h4>

<div class="example">

<!-- swatch -->
<div class="swatch swatch--super-purple"></div>
<div class="swatch swatch--purple"></div>
<div class="swatch swatch--super-green"></div>
<div class="swatch swatch--green"></div>
<div class="swatch swatch--orange"></div>
<!-- swatch -->

</div>

{% highlight markup %}

<!-- swatch -->
<div class="swatch swatch--super-purple"></div>
<div class="swatch swatch--purple"></div>
<div class="swatch swatch--super-green"></div>
<div class="swatch swatch--green"></div>
<div class="swatch swatch--orange"></div>
<!-- swatch -->

{% endhighlight %}
