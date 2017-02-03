'use strict';

window.GOVUK = window.GOVUK || {};

window.GOVUK.delegate = function (el, type, selector, callback) {
  el = typeof el === 'string' ? document.querySelector(el) : el;
  if (!el) {
    return;
  }

  el.addEventListener(type, function (event) {
    var node = event.target;
    while (node && node !== el) {
      if (node.matches(selector)) {
        callback.call(node, event);
      }

      node = node.parentNode;
    }
  });
};

/**
 * Toggle element classes
 *
 * @param  {[]} elementClassList element classlist
 * @param  {string} add              [description]
 * @param  {string} remove           [description]
 */
function toggleClass(elementClassList, add, remove) {
  elementClassList.add(add);
  elementClassList.remove(remove);
}

/**
 * Collapsibles
 */
(function () {
  var collapsibles = document.querySelectorAll('.collapsible');
  var handler = function (e) {
    var node = e.target;
    while (node && node !== e) {
      if (node.matches('.collapsible-item')) {
        node.classList.toggle('open');
        break;
      }

      node = node.parentNode;
    }
  };

  for (var i = 0; i < collapsibles.length; i++) {
    window.GOVUK.delegate(collapsibles[i], 'click', '.collapsible-heading', handler);
  }

}());

/**
 * Tabs
 */
(function () {
  var pane;

  var tabs = document.querySelectorAll('[data-target="tabs"]');
  var handler = function (e) {
    var target = e.target;
    var children;
    var panes;
    var parent = target.closest('[data-target="tabs"]');
    var tablist = target.closest('[role="tablist"]');

    children = tablist.children;
    for (var i = 0; i < children.length; i++) {
      children[i].children[0].setAttribute('aria-selected', false);
    }

    target.setAttribute('aria-selected', true);
    panes = parent.querySelectorAll('[role="tabpanel"]');
    pane = parent.querySelector("[id='" + target.getAttribute('aria-controls') + "']");

    for (var i = 0; i < panes.length; i++) {
      panes[i].setAttribute('aria-hidden', true);
    }

    pane.setAttribute('aria-hidden', false);

    e.preventDefault();
    e.stopPropagation();
  };

  for (var i = 0; i < tabs.length; i++) {
    window.GOVUK.delegate(tabs[i], 'click', '[role="tab"]', handler);
  }
}());

/**
 * Keyword Filter
 */
(function () {
  var filters = document.querySelectorAll('.keywords-filter');
  var handleToggle = function (e) {
    var node = e.target;
    while (node && node !== e) {
      if (node.matches('.keyword-filter__item')) {
        node.classList.toggle('keyword-filter__item--closed');
        break;
      }

      node = node.parentNode;
    }
  };

  var openCloseHandler = function (filter, method) {
    if (method !== 'add' && method !== 'remove') {
      throw new Error('Invalid open/close method');
    }

    return function (e) {
      var items = filter.querySelectorAll('.keyword-filter__item');
      for (var i = 0; i < items.length; i++) {
        items[i].classList[method]('keyword-filter__item--closed');
      }
    };
  };

  for (var i = 0; i < filters.length; i++) {
    window.GOVUK.delegate(filters[i], 'click', '.keyword-filter__item', handleToggle);
    window.GOVUK.delegate(filters[i], 'click', '.filter-open-all', openCloseHandler(filters[i], 'remove'));
    window.GOVUK.delegate(filters[i], 'click', '.filter-close-all', openCloseHandler(filters[i], 'add'));
  }

}());

/**
 * Search Input
 */
(function () {
  var inputs = document.querySelectorAll('.form-control-search .form-control-search__input');

  for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('focus', handleFocus);
    inputs[i].addEventListener('blur', handleBlur);
  }

  // Functions

  /**
   * handleFocus
   *
   * @param  {event} e
   */
  function handleFocus(e) {
    var node = e.target;

    if (-1 === node.className.indexOf('--focus')) {
      node.classList.add('form-control-search__input--focus');
    }
  }

  /**
   * handleBlur
   *
   * @param  {event} e
   */
  function handleBlur(e) {
    var node = e.target;

    if (node.value === '' && node.className.indexOf('--focus') > 0) {
      node.classList.remove('form-control-search__input--focus');
    }
  }
}());

/**
 * Dropdowns
 */
(function () {
  var controlsArea = document.querySelectorAll('[data-target="dropdowns-toggle"]');

  for (var i = 0; i < controlsArea.length; i++) {
    controlsArea[i].addEventListener('click', handleClick);
  }

  // Functions

  /**
   * handleClick
   *
   * @param  {[event]} e
   */
  function handleClick(e) {
    var node = e.target;
    var targetElement = node.closest('.dropdowns');

    if (-1 === targetElement.className.indexOf('--opened')) {
      toggleClass(targetElement.classList, 'dropdowns--opened', 'dropdowns--closed');
    } else {
      toggleClass(targetElement.classList, 'dropdowns--closed', 'dropdowns--opened');
    }
  }
}());
