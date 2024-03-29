'use strict';



;define("kids-painting-game/adapters/-json-api", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("kids-painting-game/app", ["exports", "kids-painting-game/resolver", "ember-load-initializers", "kids-painting-game/config/environment"], function (_exports, _resolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class App extends Ember.Application {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);

      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);

      _defineProperty(this, "Resolver", _resolver.default);
    }

  }

  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("kids-painting-game/components/color-picker", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({});

  _exports.default = _default;
});
;define("kids-painting-game/components/copy-button", ["exports", "ember-cli-clipboard/components/copy-button"], function (_exports, _copyButton) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _copyButton.default;
    }
  });
});
;define("kids-painting-game/components/etw/module-section", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    tagName: ''
  });

  _exports.default = _default;
});
;define("kids-painting-game/components/etw/module-style-detail", ["exports", "ember-cli-tailwind/utils/classes-for-module-style"], function (_exports, _classesForModuleStyle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    etwTailwindStyleguide: Ember.inject.service(),
    moduleStyle: Ember.computed.reads('etwTailwindStyleguide.selectedModuleStyle'),
    activeResponsiveClass: 'all',
    activeState: 'none',
    detailStyles: Ember.computed('moduleStyle', 'activeResponsiveClass', 'activeState', function () {
      let moduleStyle = this.moduleStyle;
      let activeResponsiveClass = this.activeResponsiveClass;
      let responsivePrefix = activeResponsiveClass === 'all' ? '' : `${activeResponsiveClass}:`;
      let activeState = this.activeState;
      let statePrefix = activeState === 'none' ? '' : `${activeState}:`;
      return (0, _classesForModuleStyle.default)(moduleStyle).map(cssClass => {
        return `${responsivePrefix}${statePrefix}${cssClass}`;
      });
    }),
    actions: {
      highlightStyle(style) {
        this.set('highlightedStyle', style);
        Ember.run.later(() => {
          this.set('highlightedStyle', null);
        }, 1500);
      }

    }
  });

  _exports.default = _default;
});
;define("kids-painting-game/components/etw/module-style-example", ["exports", "ember-cli-tailwind/utils/classes-for-module-style"], function (_exports, _classesForModuleStyle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    tagName: '',
    etwTailwindStyleguide: Ember.inject.service(),
    // Passed in
    moduleStyle: null,
    classesForModuleStyle: Ember.computed('moduleStyle', function () {
      return (0, _classesForModuleStyle.default)(this.moduleStyle);
    }),
    actions: {
      selectModuleStyle() {
        this.etwTailwindStyleguide.set('selectedModuleStyle', this.moduleStyle);
      }

    }
  });

  _exports.default = _default;
});
;define("kids-painting-game/components/picture-grid", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({});

  _exports.default = _default;
});
;define("kids-painting-game/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define("kids-painting-game/controllers/application-tailwind", ["exports", "kids-painting-game/tailwind/config/colors", "kids-painting-game/tailwind/config/screens", "kids-painting-game/tailwind/config/fonts", "kids-painting-game/tailwind/config/text-sizes", "kids-painting-game/tailwind/config/font-weights", "kids-painting-game/tailwind/config/line-height", "kids-painting-game/tailwind/config/letter-spacing", "kids-painting-game/tailwind/config/border-widths", "kids-painting-game/tailwind/config/border-radius", "kids-painting-game/tailwind/config/width", "kids-painting-game/tailwind/config/height", "kids-painting-game/tailwind/config/min-width", "kids-painting-game/tailwind/config/min-height", "kids-painting-game/tailwind/config/max-width", "kids-painting-game/tailwind/config/max-height", "kids-painting-game/tailwind/config/padding", "kids-painting-game/tailwind/config/margin", "kids-painting-game/tailwind/config/negative-margin", "kids-painting-game/tailwind/config/shadows", "kids-painting-game/tailwind/config/z-index", "kids-painting-game/tailwind/config/opacity", "kids-painting-game/tailwind/config/svg-fill", "kids-painting-game/tailwind/config/svg-stroke"], function (_exports, _colors, _screens, _fonts, _textSizes, _fontWeights, _lineHeight, _letterSpacing, _borderWidths, _borderRadius, _width, _height, _minWidth, _minHeight, _maxWidth, _maxHeight, _padding, _margin, _negativeMargin, _shadows, _zIndex, _opacity, _svgFill, _svgStroke) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const modules = {
    colors: _colors.default,
    screens: _screens.default,
    fonts: _fonts.default,
    textSizes: _textSizes.default,
    fontWeights: _fontWeights.default,
    leading: _lineHeight.default,
    tracking: _letterSpacing.default,
    borderWidths: _borderWidths.default,
    borderRadius: _borderRadius.default,
    width: _width.default,
    height: _height.default,
    minWidth: _minWidth.default,
    minHeight: _minHeight.default,
    maxWidth: _maxWidth.default,
    maxHeight: _maxHeight.default,
    padding: _padding.default,
    margin: _margin.default,
    negativeMargin: _negativeMargin.default,
    shadows: _shadows.default,
    zIndex: _zIndex.default,
    opacity: _opacity.default,
    svgFill: _svgFill.default,
    svgStroke: _svgStroke.default
  };

  var _default = Ember.Controller.extend({
    /*
      A module style is an object that looks like
       {
        module: 'border-radius',
        name: 'lg',
        value: '.5rem'
      }
    */
    moduleStyles: Ember.computed(function () {
      return Object.keys(modules).reduce((allModules, moduleName) => {
        let hash = modules[moduleName];
        allModules[moduleName] = Object.keys(hash).map(key => {
          return {
            module: Ember.String.dasherize(moduleName),
            name: key,
            value: hash[key]
          };
        });
        return allModules;
      }, {});
    })
  });

  _exports.default = _default;
});
;define("kids-painting-game/controllers/design", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({});

  _exports.default = _default;
});
;define("kids-painting-game/controllers/play", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    color: 'blue'
  });

  _exports.default = _default;
});
;define("kids-painting-game/ember-cli-tailwind/tests/addon.lint-test", [], function () {
  "use strict";
});
;define("kids-painting-game/ember-cli-tailwind/tests/app.lint-test", [], function () {
  "use strict";
});
;define("kids-painting-game/ember-cli-tailwind/tests/templates.template.lint-test", [], function () {
  "use strict";
});
;define("kids-painting-game/helpers/and", ["exports", "ember-truth-helpers/helpers/and"], function (_exports, _and) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _and.default;
    }
  });
  Object.defineProperty(_exports, "and", {
    enumerable: true,
    get: function () {
      return _and.and;
    }
  });
});
;define("kids-painting-game/helpers/app-version", ["exports", "kids-painting-game/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});
;define("kids-painting-game/helpers/append", ["exports", "ember-composable-helpers/helpers/append"], function (_exports, _append) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _append.default;
    }
  });
  Object.defineProperty(_exports, "append", {
    enumerable: true,
    get: function () {
      return _append.append;
    }
  });
});
;define("kids-painting-game/helpers/array", ["exports", "ember-composable-helpers/helpers/array"], function (_exports, _array) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _array.default;
    }
  });
  Object.defineProperty(_exports, "array", {
    enumerable: true,
    get: function () {
      return _array.array;
    }
  });
});
;define("kids-painting-game/helpers/cancel-all", ["exports", "ember-concurrency/helpers/cancel-all"], function (_exports, _cancelAll) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _cancelAll.default;
    }
  });
});
;define("kids-painting-game/helpers/chunk", ["exports", "ember-composable-helpers/helpers/chunk"], function (_exports, _chunk) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _chunk.default;
    }
  });
  Object.defineProperty(_exports, "chunk", {
    enumerable: true,
    get: function () {
      return _chunk.chunk;
    }
  });
});
;define("kids-painting-game/helpers/compact", ["exports", "ember-composable-helpers/helpers/compact"], function (_exports, _compact) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _compact.default;
    }
  });
});
;define("kids-painting-game/helpers/compute", ["exports", "ember-composable-helpers/helpers/compute"], function (_exports, _compute) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _compute.default;
    }
  });
  Object.defineProperty(_exports, "compute", {
    enumerable: true,
    get: function () {
      return _compute.compute;
    }
  });
});
;define("kids-painting-game/helpers/contains", ["exports", "ember-composable-helpers/helpers/contains"], function (_exports, _contains) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _contains.default;
    }
  });
  Object.defineProperty(_exports, "contains", {
    enumerable: true,
    get: function () {
      return _contains.contains;
    }
  });
});
;define("kids-painting-game/helpers/dec", ["exports", "ember-composable-helpers/helpers/dec"], function (_exports, _dec) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _dec.default;
    }
  });
  Object.defineProperty(_exports, "dec", {
    enumerable: true,
    get: function () {
      return _dec.dec;
    }
  });
});
;define("kids-painting-game/helpers/drop", ["exports", "ember-composable-helpers/helpers/drop"], function (_exports, _drop) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _drop.default;
    }
  });
});
;define("kids-painting-game/helpers/eq", ["exports", "ember-truth-helpers/helpers/equal"], function (_exports, _equal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _equal.default;
    }
  });
  Object.defineProperty(_exports, "equal", {
    enumerable: true,
    get: function () {
      return _equal.equal;
    }
  });
});
;define("kids-painting-game/helpers/filter-by", ["exports", "ember-composable-helpers/helpers/filter-by"], function (_exports, _filterBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _filterBy.default;
    }
  });
});
;define("kids-painting-game/helpers/filter", ["exports", "ember-composable-helpers/helpers/filter"], function (_exports, _filter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _filter.default;
    }
  });
});
;define("kids-painting-game/helpers/find-by", ["exports", "ember-composable-helpers/helpers/find-by"], function (_exports, _findBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _findBy.default;
    }
  });
});
;define("kids-painting-game/helpers/flatten", ["exports", "ember-composable-helpers/helpers/flatten"], function (_exports, _flatten) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _flatten.default;
    }
  });
  Object.defineProperty(_exports, "flatten", {
    enumerable: true,
    get: function () {
      return _flatten.flatten;
    }
  });
});
;define("kids-painting-game/helpers/group-by", ["exports", "ember-composable-helpers/helpers/group-by"], function (_exports, _groupBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _groupBy.default;
    }
  });
});
;define("kids-painting-game/helpers/gt", ["exports", "ember-truth-helpers/helpers/gt"], function (_exports, _gt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gt.default;
    }
  });
  Object.defineProperty(_exports, "gt", {
    enumerable: true,
    get: function () {
      return _gt.gt;
    }
  });
});
;define("kids-painting-game/helpers/gte", ["exports", "ember-truth-helpers/helpers/gte"], function (_exports, _gte) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gte.default;
    }
  });
  Object.defineProperty(_exports, "gte", {
    enumerable: true,
    get: function () {
      return _gte.gte;
    }
  });
});
;define("kids-painting-game/helpers/has-next", ["exports", "ember-composable-helpers/helpers/has-next"], function (_exports, _hasNext) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _hasNext.default;
    }
  });
  Object.defineProperty(_exports, "hasNext", {
    enumerable: true,
    get: function () {
      return _hasNext.hasNext;
    }
  });
});
;define("kids-painting-game/helpers/has-previous", ["exports", "ember-composable-helpers/helpers/has-previous"], function (_exports, _hasPrevious) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _hasPrevious.default;
    }
  });
  Object.defineProperty(_exports, "hasPrevious", {
    enumerable: true,
    get: function () {
      return _hasPrevious.hasPrevious;
    }
  });
});
;define("kids-painting-game/helpers/inc", ["exports", "ember-composable-helpers/helpers/inc"], function (_exports, _inc) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _inc.default;
    }
  });
  Object.defineProperty(_exports, "inc", {
    enumerable: true,
    get: function () {
      return _inc.inc;
    }
  });
});
;define("kids-painting-game/helpers/intersect", ["exports", "ember-composable-helpers/helpers/intersect"], function (_exports, _intersect) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _intersect.default;
    }
  });
});
;define("kids-painting-game/helpers/invoke", ["exports", "ember-composable-helpers/helpers/invoke"], function (_exports, _invoke) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _invoke.default;
    }
  });
  Object.defineProperty(_exports, "invoke", {
    enumerable: true,
    get: function () {
      return _invoke.invoke;
    }
  });
});
;define("kids-painting-game/helpers/is-array", ["exports", "ember-truth-helpers/helpers/is-array"], function (_exports, _isArray) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isArray.default;
    }
  });
  Object.defineProperty(_exports, "isArray", {
    enumerable: true,
    get: function () {
      return _isArray.isArray;
    }
  });
});
;define("kids-painting-game/helpers/is-clipboard-supported", ["exports", "ember-cli-clipboard/helpers/is-clipboard-supported"], function (_exports, _isClipboardSupported) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isClipboardSupported.default;
    }
  });
  Object.defineProperty(_exports, "isClipboardSupported", {
    enumerable: true,
    get: function () {
      return _isClipboardSupported.isClipboardSupported;
    }
  });
});
;define("kids-painting-game/helpers/is-empty", ["exports", "ember-truth-helpers/helpers/is-empty"], function (_exports, _isEmpty) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isEmpty.default;
    }
  });
});
;define("kids-painting-game/helpers/is-equal", ["exports", "ember-truth-helpers/helpers/is-equal"], function (_exports, _isEqual) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isEqual.default;
    }
  });
  Object.defineProperty(_exports, "isEqual", {
    enumerable: true,
    get: function () {
      return _isEqual.isEqual;
    }
  });
});
;define("kids-painting-game/helpers/join", ["exports", "ember-composable-helpers/helpers/join"], function (_exports, _join) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _join.default;
    }
  });
});
;define("kids-painting-game/helpers/lt", ["exports", "ember-truth-helpers/helpers/lt"], function (_exports, _lt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lt.default;
    }
  });
  Object.defineProperty(_exports, "lt", {
    enumerable: true,
    get: function () {
      return _lt.lt;
    }
  });
});
;define("kids-painting-game/helpers/lte", ["exports", "ember-truth-helpers/helpers/lte"], function (_exports, _lte) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lte.default;
    }
  });
  Object.defineProperty(_exports, "lte", {
    enumerable: true,
    get: function () {
      return _lte.lte;
    }
  });
});
;define("kids-painting-game/helpers/map-by", ["exports", "ember-composable-helpers/helpers/map-by"], function (_exports, _mapBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mapBy.default;
    }
  });
});
;define("kids-painting-game/helpers/map", ["exports", "ember-composable-helpers/helpers/map"], function (_exports, _map) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _map.default;
    }
  });
});
;define("kids-painting-game/helpers/next", ["exports", "ember-composable-helpers/helpers/next"], function (_exports, _next) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _next.default;
    }
  });
  Object.defineProperty(_exports, "next", {
    enumerable: true,
    get: function () {
      return _next.next;
    }
  });
});
;define("kids-painting-game/helpers/noop", ["exports", "ember-composable-helpers/helpers/noop"], function (_exports, _noop) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _noop.default;
    }
  });
  Object.defineProperty(_exports, "noop", {
    enumerable: true,
    get: function () {
      return _noop.noop;
    }
  });
});
;define("kids-painting-game/helpers/not-eq", ["exports", "ember-truth-helpers/helpers/not-equal"], function (_exports, _notEqual) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _notEqual.default;
    }
  });
  Object.defineProperty(_exports, "notEq", {
    enumerable: true,
    get: function () {
      return _notEqual.notEq;
    }
  });
});
;define("kids-painting-game/helpers/not", ["exports", "ember-truth-helpers/helpers/not"], function (_exports, _not) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _not.default;
    }
  });
  Object.defineProperty(_exports, "not", {
    enumerable: true,
    get: function () {
      return _not.not;
    }
  });
});
;define("kids-painting-game/helpers/object-at", ["exports", "ember-composable-helpers/helpers/object-at"], function (_exports, _objectAt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _objectAt.default;
    }
  });
  Object.defineProperty(_exports, "objectAt", {
    enumerable: true,
    get: function () {
      return _objectAt.objectAt;
    }
  });
});
;define("kids-painting-game/helpers/optional", ["exports", "ember-composable-helpers/helpers/optional"], function (_exports, _optional) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _optional.default;
    }
  });
  Object.defineProperty(_exports, "optional", {
    enumerable: true,
    get: function () {
      return _optional.optional;
    }
  });
});
;define("kids-painting-game/helpers/or", ["exports", "ember-truth-helpers/helpers/or"], function (_exports, _or) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _or.default;
    }
  });
  Object.defineProperty(_exports, "or", {
    enumerable: true,
    get: function () {
      return _or.or;
    }
  });
});
;define("kids-painting-game/helpers/perform", ["exports", "ember-concurrency/helpers/perform"], function (_exports, _perform) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _perform.default;
    }
  });
});
;define("kids-painting-game/helpers/pipe-action", ["exports", "ember-composable-helpers/helpers/pipe-action"], function (_exports, _pipeAction) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pipeAction.default;
    }
  });
});
;define("kids-painting-game/helpers/pipe", ["exports", "ember-composable-helpers/helpers/pipe"], function (_exports, _pipe) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pipe.default;
    }
  });
  Object.defineProperty(_exports, "pipe", {
    enumerable: true,
    get: function () {
      return _pipe.pipe;
    }
  });
});
;define("kids-painting-game/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("kids-painting-game/helpers/previous", ["exports", "ember-composable-helpers/helpers/previous"], function (_exports, _previous) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _previous.default;
    }
  });
  Object.defineProperty(_exports, "previous", {
    enumerable: true,
    get: function () {
      return _previous.previous;
    }
  });
});
;define("kids-painting-game/helpers/queue", ["exports", "ember-composable-helpers/helpers/queue"], function (_exports, _queue) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _queue.default;
    }
  });
  Object.defineProperty(_exports, "queue", {
    enumerable: true,
    get: function () {
      return _queue.queue;
    }
  });
});
;define("kids-painting-game/helpers/range", ["exports", "ember-composable-helpers/helpers/range"], function (_exports, _range) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _range.default;
    }
  });
  Object.defineProperty(_exports, "range", {
    enumerable: true,
    get: function () {
      return _range.range;
    }
  });
});
;define("kids-painting-game/helpers/reduce", ["exports", "ember-composable-helpers/helpers/reduce"], function (_exports, _reduce) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _reduce.default;
    }
  });
});
;define("kids-painting-game/helpers/reject-by", ["exports", "ember-composable-helpers/helpers/reject-by"], function (_exports, _rejectBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rejectBy.default;
    }
  });
});
;define("kids-painting-game/helpers/repeat", ["exports", "ember-composable-helpers/helpers/repeat"], function (_exports, _repeat) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _repeat.default;
    }
  });
  Object.defineProperty(_exports, "repeat", {
    enumerable: true,
    get: function () {
      return _repeat.repeat;
    }
  });
});
;define("kids-painting-game/helpers/reverse", ["exports", "ember-composable-helpers/helpers/reverse"], function (_exports, _reverse) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _reverse.default;
    }
  });
});
;define("kids-painting-game/helpers/shuffle", ["exports", "ember-composable-helpers/helpers/shuffle"], function (_exports, _shuffle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _shuffle.default;
    }
  });
  Object.defineProperty(_exports, "shuffle", {
    enumerable: true,
    get: function () {
      return _shuffle.shuffle;
    }
  });
});
;define("kids-painting-game/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("kids-painting-game/helpers/slice", ["exports", "ember-composable-helpers/helpers/slice"], function (_exports, _slice) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _slice.default;
    }
  });
});
;define("kids-painting-game/helpers/sort-by", ["exports", "ember-composable-helpers/helpers/sort-by"], function (_exports, _sortBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _sortBy.default;
    }
  });
});
;define("kids-painting-game/helpers/take", ["exports", "ember-composable-helpers/helpers/take"], function (_exports, _take) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _take.default;
    }
  });
});
;define("kids-painting-game/helpers/task", ["exports", "ember-concurrency/helpers/task"], function (_exports, _task) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _task.default;
    }
  });
});
;define("kids-painting-game/helpers/toggle-action", ["exports", "ember-composable-helpers/helpers/toggle-action"], function (_exports, _toggleAction) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _toggleAction.default;
    }
  });
});
;define("kids-painting-game/helpers/toggle", ["exports", "ember-composable-helpers/helpers/toggle"], function (_exports, _toggle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
  Object.defineProperty(_exports, "toggle", {
    enumerable: true,
    get: function () {
      return _toggle.toggle;
    }
  });
});
;define("kids-painting-game/helpers/union", ["exports", "ember-composable-helpers/helpers/union"], function (_exports, _union) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _union.default;
    }
  });
});
;define("kids-painting-game/helpers/without", ["exports", "ember-composable-helpers/helpers/without"], function (_exports, _without) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _without.default;
    }
  });
  Object.defineProperty(_exports, "without", {
    enumerable: true,
    get: function () {
      return _without.without;
    }
  });
});
;define("kids-painting-game/helpers/xor", ["exports", "ember-truth-helpers/helpers/xor"], function (_exports, _xor) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _xor.default;
    }
  });
  Object.defineProperty(_exports, "xor", {
    enumerable: true,
    get: function () {
      return _xor.xor;
    }
  });
});
;define("kids-painting-game/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "kids-painting-game/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("kids-painting-game/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }

  };
  _exports.default = _default;
});
;define("kids-painting-game/initializers/ember-concurrency", ["exports", "ember-concurrency/initializers/ember-concurrency"], function (_exports, _emberConcurrency) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberConcurrency.default;
    }
  });
});
;define("kids-painting-game/initializers/ember-data", ["exports", "ember-data/setup-container", "ember-data"], function (_exports, _setupContainer, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
    This code initializes EmberData in an Ember application.
  
    It ensures that the `store` service is automatically injected
    as the `store` property on all routes and controllers.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("kids-painting-game/initializers/export-application-global", ["exports", "kids-painting-game/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("kids-painting-game/instance-initializers/ember-cli-tailwind", ["exports", "kids-painting-game/router"], function (_exports, _router) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;
  const TailwindApplicationRoute = Ember.Route.extend({
    router: Ember.inject.service('-routing'),

    renderTemplate() {
      this.render('applicationTailwind', {
        controller: this.controllerFor('applicationTailwind')
      });
    }

  });

  function initialize(appInstance) {
    let fastboot = appInstance.lookup('service:fastboot');
    let fastbootIsInstalled = fastboot;
    let fastbootIsNotInstalled = !fastboot;
    let notUsingFastboot = fastbootIsNotInstalled || fastbootIsInstalled && !fastboot.get('isFastBoot');

    let router = appInstance.lookup('service:router')._router;

    let initialURL = router.initialURL || (window && window.location ? window.location.href : ''); // fastboot guard :/

    if (notUsingFastboot && initialURL.match('/tailwind')) {
      appInstance.register('route:application', TailwindApplicationRoute);

      _router.default.map(function () {
        this.route('tailwind');
      });
    }
  }

  var _default = {
    initialize
  };
  _exports.default = _default;
});
;define("kids-painting-game/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (_exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'ember-data',
    initialize: _initializeStoreService.default
  };
  _exports.default = _default;
});
;define("kids-painting-game/resolver", ["exports", "ember-resolver"], function (_exports, _emberResolver) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _emberResolver.default;
  _exports.default = _default;
});
;define("kids-painting-game/router", ["exports", "kids-painting-game/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class Router extends Ember.Router {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "location", _environment.default.locationType);

      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }

  }

  _exports.default = Router;
  Router.map(function () {
    this.route('play');
    this.route('design');
  });
});
;define("kids-painting-game/routes/design", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({});

  _exports.default = _default;
});
;define("kids-painting-game/routes/play", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({});

  _exports.default = _default;
});
;define("kids-painting-game/serializers/-default", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _json.default;
    }
  });
});
;define("kids-painting-game/serializers/-json-api", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("kids-painting-game/serializers/-rest", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rest.default;
    }
  });
});
;define("kids-painting-game/services/etw-tailwind-styleguide", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Service.extend({// body
  });

  _exports.default = _default;
});
;define("kids-painting-game/tailwind/config/background-colors", ["exports", "kids-painting-game/tailwind/config/colors"], function (_exports, _colors) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  |-----------------------------------------------------------------------------
  | Background colors             https://tailwindcss.com/docs/background-color
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your background colors. By default these use
  | the color palette we defined above, however you're welcome to set
  | these independently if that makes sense for your project.
  |
  | Class name: .bg-{color}
  | CSS property: background-color
  |
  */
  var _default = _colors.default;
  _exports.default = _default;
});
;define("kids-painting-game/tailwind/config/background-size", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  |-----------------------------------------------------------------------------
  | Background sizes               https://tailwindcss.com/docs/background-size
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your background sizes. We provide some common
  | values that are useful in most projects, but feel free to add other sizes
  | that are specific to your project here as well.
  |
  | Class name: .bg-{size}
  | CSS property: background-size
  |
  */
  var _default = {
    'auto': 'auto',
    'cover': 'cover',
    'contain': 'contain'
  };
  _exports.default = _default;
});
;define("kids-painting-game/tailwind/config/border-colors", ["exports", "kids-painting-game/tailwind/config/colors"], function (_exports, _colors) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  |-----------------------------------------------------------------------------
  | Border colors                     https://tailwindcss.com/docs/border-color
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your border colors. By default these use the
  | color palette we defined above, however you're welcome to set these
  | independently if that makes sense for your project.
  |
  | Take note that border colors require a special "default" value set
  | as well. This is the color that will be used when you do not
  | specify a border color.
  |
  | Class name: .border-{color}
  | CSS property: border-color
  |
  */
  var _default = Object.assign({
    default: _colors.default['grey-light']
  }, _colors.default);

  _exports.default = _default;
});
;define("kids-painting-game/tailwind/config/border-radius", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  |-----------------------------------------------------------------------------
  | Border radius                    https://tailwindcss.com/docs/border-radius
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your border radius values. If a `default` radius
  | is provided, it will be made available as the non-suffixed `.rounded`
  | utility.
  |
  | If your scale includes a `0` value to reset already rounded corners, it's
  | a good idea to put it first so other values are able to override it.
  |
  | Class name: .rounded{-side?}{-size?}
  | CSS property: border-radius
  |
  */
  var _default = {
    'none': '0',
    'sm': '.125rem',
    default: '.25rem',
    'lg': '.5rem',
    'full': '9999px'
  };
  _exports.default = _default;
});
;define("kids-painting-game/tailwind/config/border-widths", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  |-----------------------------------------------------------------------------
  | Border widths                     https://tailwindcss.com/docs/border-width
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your border widths. Take note that border
  | widths require a special "default" value set as well. This is the
  | width that will be used when you do not specify a border width.
  |
  | Class name: .border{-side?}{-width?}
  | CSS property: border-width
  |
  */
  var _default = {
    default: '1px',
    '0': '0',
    '2': '2px',
    '4': '4px',
    '8': '8px'
  };
  _exports.default = _default;
});
;define("kids-painting-game/tailwind/config/colors", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  |-------------------------------------------------------------------------------
  | Colors                                    https://tailwindcss.com/docs/colors
  |-------------------------------------------------------------------------------
  |
  | Here you can specify the colors used in your project. To get you started,
  | we've provided a generous palette of great looking colors that are perfect
  | for prototyping, but don't hesitate to change them for your project. You
  | own these colors, nothing will break if you change everything about them.
  |
  | We've used literal color names ("red", "blue", etc.) for the default
  | palette, but if you'd rather use functional names like "primary" and
  | "secondary", or even a numeric scale like "100" and "200", go for it.
  |
  */
  var _default = {
    'transparent': 'transparent',
    'black': '#22292f',
    'grey-darkest': '#3d4852',
    'grey-darker': '#606f7b',
    'grey-dark': '#8795a1',
    'grey': '#b8c2cc',
    'grey-light': '#dae1e7',
    'grey-lighter': '#f1f5f8',
    'grey-lightest': '#f8fafc',
    'white': '#ffffff',
    'red-darkest': '#3b0d0c',
    'red-darker': '#621b18',
    'red-dark': '#cc1f1a',
    'red': '#e3342f',
    'red-light': '#ef5753',
    'red-lighter': '#f9acaa',
    'red-lightest': '#fcebea',
    'orange-darkest': '#462a16',
    'orange-darker': '#613b1f',
    'orange-dark': '#de751f',
    'orange': '#f6993f',
    'orange-light': '#faad63',
    'orange-lighter': '#fcd9b6',
    'orange-lightest': '#fff5eb',
    'yellow-darkest': '#453411',
    'yellow-darker': '#684f1d',
    'yellow-dark': '#f2d024',
    'yellow': '#ffed4a',
    'yellow-light': '#fff382',
    'yellow-lighter': '#fff9c2',
    'yellow-lightest': '#fcfbeb',
    'green-darkest': '#0f2f21',
    'green-darker': '#1a4731',
    'green-dark': '#1f9d55',
    'green': '#38c172',
    'green-light': '#51d88a',
    'green-lighter': '#a2f5bf',
    'green-lightest': '#e3fcec',
    'teal-darkest': '#0d3331',
    'teal-darker': '#20504f',
    'teal-dark': '#38a89d',
    'teal': '#4dc0b5',
    'teal-light': '#64d5ca',
    'teal-lighter': '#a0f0ed',
    'teal-lightest': '#e8fffe',
    'blue-darkest': '#12283a',
    'blue-darker': '#1c3d5a',
    'blue-dark': '#2779bd',
    'blue': '#3490dc',
    'blue-light': '#6cb2eb',
    'blue-lighter': '#bcdefa',
    'blue-lightest': '#eff8ff',
    'indigo-darkest': '#191e38',
    'indigo-darker': '#2f365f',
    'indigo-dark': '#5661b3',
    'indigo': '#6574cd',
    'indigo-light': '#7886d7',
    'indigo-lighter': '#b2b7ff',
    'indigo-lightest': '#e6e8ff',
    'purple-darkest': '#21183c',
    'purple-darker': '#382b5f',
    'purple-dark': '#794acf',
    'purple': '#9561e2',
    'purple-light': '#a779e9',
    'purple-lighter': '#d6bbfc',
    'purple-lightest': '#f3ebff',
    'pink-darkest': '#451225',
    'pink-darker': '#6f213f',
    'pink-dark': '#eb5286',
    'pink': '#f66d9b',
    'pink-light': '#fa7ea8',
    'pink-lighter': '#ffbbca',
    'pink-lightest': '#ffebef'
  };
  _exports.default = _default;
});
;define("kids-painting-game/tailwind/config/font-weights", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  |-----------------------------------------------------------------------------
  | Font weights                       https://tailwindcss.com/docs/font-weight
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your font weights. We've provided a list of
  | common font weight names with their respective numeric scale values
  | to get you started. It's unlikely that your project will require
  | all of these, so we recommend removing those you don't need.
  |
  | Class name: .font-{weight}
  | CSS property: font-weight
  |
  */
  var _default = {
    'hairline': 100,
    'thin': 200,
    'light': 300,
    'normal': 400,
    'medium': 500,
    'semibold': 600,
    'bold': 700,
    'extrabold': 800,
    'black': 900
  };
  _exports.default = _default;
});
;define("kids-painting-game/tailwind/config/fonts", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  |-----------------------------------------------------------------------------
  | Fonts                                    https://tailwindcss.com/docs/fonts
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your project's font stack, or font families.
  | Keep in mind that Tailwind doesn't actually load any fonts for you.
  | If you're using custom fonts you'll need to import them prior to
  | defining them here.
  |
  | By default we provide a native font stack that works remarkably well on
  | any device or OS you're using, since it just uses the default fonts
  | provided by the platform.
  |
  | Class name: .font-{name}
  | CSS property: font-family
  |
  */
  var _default = {
    'sans': ['system-ui', 'BlinkMacSystemFont', '-apple-system', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'],
    'serif': ['Constantia', 'Lucida Bright', 'Lucidabright', 'Lucida Serif', 'Lucida', 'DejaVu Serif', 'Bitstream Vera Serif', 'Liberation Serif', 'Georgia', 'serif'],
    'mono': ['Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace']
  };
  _exports.default = _default;
});
;define("kids-painting-game/tailwind/config/height", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  |-----------------------------------------------------------------------------
  | Height                                  https://tailwindcss.com/docs/height
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your height utility sizes. These can be
  | percentage based, pixels, rems, or any other units. By default
  | we provide a sensible rem based numeric scale plus some other
  | common use-cases. You can, of course, modify these values as
  | needed.
  |
  | Class name: .h-{size}
  | CSS property: height
  |
  */
  var _default = {
    'auto': 'auto',
    'px': '1px',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '8': '2rem',
    '10': '2.5rem',
    '12': '3rem',
    '16': '4rem',
    '24': '6rem',
    '32': '8rem',
    '48': '12rem',
    '64': '16rem',
    'full': '100%',
    'screen': '100vh'
  };
  _exports.default = _default;
});
;define("kids-painting-game/tailwind/config/letter-spacing", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  |-----------------------------------------------------------------------------
  | Tracking (letter spacing)       https://tailwindcss.com/docs/letter-spacing
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your letter spacing values, or as we call
  | them in Tailwind, tracking.
  |
  | Class name: .tracking-{size}
  | CSS property: letter-spacing
  |
  */
  var _default = {
    'tight': '-0.05em',
    'normal': '0',
    'wide': '0.05em'
  };
  _exports.default = _default;
});
;define("kids-painting-game/tailwind/config/line-height", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  |-----------------------------------------------------------------------------
  | Leading (line height)              https://tailwindcss.com/docs/line-height
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your line height values, or as we call
  | them in Tailwind, leadings.
  |
  | Class name: .leading-{size}
  | CSS property: line-height
  |
  */
  var _default = {
    'none': 1,
    'tight': 1.25,
    'normal': 1.5,
    'loose': 2
  };
  _exports.default = _default;
});
;define("kids-painting-game/tailwind/config/margin", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  |-----------------------------------------------------------------------------
  | Margin                                  https://tailwindcss.com/docs/margin
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your margin utility sizes. These can be
  | percentage based, pixels, rems, or any other units. By default we
  | provide a sensible rem based numeric scale plus a couple other
  | common use-cases like "1px". You can, of course, modify these
  | values as needed.
  |
  | Class name: .m{side?}-{size}
  | CSS property: margin
  |
  */
  var _default = {
    'auto': 'auto',
    'px': '1px',
    '0': '0',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '8': '2rem',
    '10': '2.5rem',
    '12': '3rem',
    '16': '4rem',
    '20': '5rem',
    '24': '6rem',
    '32': '8rem'
  };
  _exports.default = _default;
});
;define("kids-painting-game/tailwind/config/max-height", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  |-----------------------------------------------------------------------------
  | Maximum height                      https://tailwindcss.com/docs/max-height
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your maximum height utility sizes. These can
  | be percentage based, pixels, rems, or any other units. We provide a
  | couple common use-cases by default. You can, of course, modify
  | these values as needed.
  |
  | Class name: .max-h-{size}
  | CSS property: max-height
  |
  */
  var _default = {
    'full': '100%',
    'screen': '100vh'
  };
  _exports.default = _default;
});
;define("kids-painting-game/tailwind/config/max-width", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  |-----------------------------------------------------------------------------
  | Maximum width                        https://tailwindcss.com/docs/max-width
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your maximum width utility sizes. These can
  | be percentage based, pixels, rems, or any other units. By default
  | we provide a sensible rem based scale and a "full width" size,
  | which is basically a reset utility. You can, of course,
  | modify these values as needed.
  |
  | Class name: .max-w-{size}
  | CSS property: max-width
  |
  */
  var _default = {
    'xs': '20rem',
    'sm': '30rem',
    'md': '40rem',
    'lg': '50rem',
    'xl': '60rem',
    '2xl': '70rem',
    '3xl': '80rem',
    '4xl': '90rem',
    '5xl': '100rem',
    'full': '100%'
  };
  _exports.default = _default;
});
;define("kids-painting-game/tailwind/config/min-height", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  |-----------------------------------------------------------------------------
  | Minimum height                      https://tailwindcss.com/docs/min-height
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your minimum height utility sizes. These can
  | be percentage based, pixels, rems, or any other units. We provide a
  | few common use-cases by default. You can, of course, modify these
  | values as needed.
  |
  | Class name: .min-h-{size}
  | CSS property: min-height
  |
  */
  var _default = {
    '0': '0',
    'full': '100%',
    'screen': '100vh'
  };
  _exports.default = _default;
});
;define("kids-painting-game/tailwind/config/min-width", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  |-----------------------------------------------------------------------------
  | Minimum width                        https://tailwindcss.com/docs/min-width
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your minimum width utility sizes. These can
  | be percentage based, pixels, rems, or any other units. We provide a
  | couple common use-cases by default. You can, of course, modify
  | these values as needed.
  |
  | Class name: .min-w-{size}
  | CSS property: min-width
  |
  */
  var _default = {
    '0': '0',
    'full': '100%'
  };
  _exports.default = _default;
});
;define("kids-painting-game/tailwind/config/negative-margin", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  |-----------------------------------------------------------------------------
  | Negative margin                https://tailwindcss.com/docs/negative-margin
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your negative margin utility sizes. These can
  | be percentage based, pixels, rems, or any other units. By default we
  | provide matching values to the padding scale since these utilities
  | generally get used together. You can, of course, modify these
  | values as needed.
  |
  | Class name: .-m{side?}-{size}
  | CSS property: margin
  |
  */
  var _default = {
    'px': '1px',
    '0': '0',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '8': '2rem',
    '10': '2.5rem',
    '12': '3rem',
    '16': '4rem',
    '20': '5rem',
    '24': '6rem',
    '32': '8rem'
  };
  _exports.default = _default;
});
;define("kids-painting-game/tailwind/config/opacity", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  |-----------------------------------------------------------------------------
  | Opacity                                https://tailwindcss.com/docs/opacity
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your opacity utility values. By default we
  | provide a sensible numeric scale. You can, of course, modify these
  | values as needed.
  |
  | Class name: .opacity-{name}
  | CSS property: opacity
  |
  */
  var _default = {
    '0': '0',
    '25': '.25',
    '50': '.5',
    '75': '.75',
    '100': '1'
  };
  _exports.default = _default;
});
;define("kids-painting-game/tailwind/config/padding", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  |-----------------------------------------------------------------------------
  | Padding                                https://tailwindcss.com/docs/padding
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your padding utility sizes. These can be
  | percentage based, pixels, rems, or any other units. By default we
  | provide a sensible rem based numeric scale plus a couple other
  | common use-cases like "1px". You can, of course, modify these
  | values as needed.
  |
  | Class name: .p{side?}-{size}
  | CSS property: padding
  |
  */
  var _default = {
    'px': '1px',
    '0': '0',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '8': '2rem',
    '10': '2.5rem',
    '12': '3rem',
    '16': '4rem',
    '20': '5rem',
    '24': '6rem',
    '32': '8rem'
  };
  _exports.default = _default;
});
;define("kids-painting-game/tailwind/config/screens", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  |-----------------------------------------------------------------------------
  | Screens                      https://tailwindcss.com/docs/responsive-design
  |-----------------------------------------------------------------------------
  |
  | Screens in Tailwind are translated to CSS media queries. They define the
  | responsive breakpoints for your project. By default Tailwind takes a
  | "mobile first" approach, where each screen size represents a minimum
  | viewport width. Feel free to have as few or as many screens as you
  | want, naming them in whatever way you'd prefer for your project.
  |
  | Tailwind also allows for more complex screen definitions, which can be
  | useful in certain situations. Be sure to see the full responsive
  | documentation for a complete list of options.
  |
  | Class name: .{screen}:{utility}
  |
  */
  var _default = {
    'sm': '576px',
    'md': '768px',
    'lg': '992px',
    'xl': '1200px'
  };
  _exports.default = _default;
});
;define("kids-painting-game/tailwind/config/shadows", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  |-----------------------------------------------------------------------------
  | Shadows                                https://tailwindcss.com/docs/shadows
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your shadow utilities. As you can see from
  | the defaults we provide, it's possible to apply multiple shadows
  | per utility using comma separation.
  |
  | If a `default` shadow is provided, it will be made available as the non-
  | suffixed `.shadow` utility.
  |
  | Class name: .shadow-{size?}
  | CSS property: box-shadow
  |
  */
  var _default = {
    default: '0 2px 4px 0 rgba(0,0,0,0.10)',
    'md': '0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)',
    'lg': '0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)',
    'inner': 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
    'outline': '0 0 0 3px rgba(52,144,220,0.5)',
    'none': 'none'
  };
  _exports.default = _default;
});
;define("kids-painting-game/tailwind/config/svg-fill", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  |-----------------------------------------------------------------------------
  | SVG fill                                   https://tailwindcss.com/docs/svg
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your SVG fill colors. By default we just provide
  | `fill-current` which sets the fill to the current text color. This lets you
  | specify a fill color using existing text color utilities and helps keep the
  | generated CSS file size down.
  |
  | Class name: .fill-{name}
  | CSS property: fill
  |
  */
  var _default = {
    'current': 'currentColor'
  };
  _exports.default = _default;
});
;define("kids-painting-game/tailwind/config/svg-stroke", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  |-----------------------------------------------------------------------------
  | SVG stroke                                 https://tailwindcss.com/docs/svg
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your SVG stroke colors. By default we just provide
  | `stroke-current` which sets the stroke to the current text color. This lets
  | you specify a stroke color using existing text color utilities and helps
  | keep the generated CSS file size down.
  |
  | Class name: .stroke-{name}
  | CSS property: stroke
  |
  */
  var _default = {
    'current': 'currentColor'
  };
  _exports.default = _default;
});
;define("kids-painting-game/tailwind/config/tailwind", ["exports", "tailwindcss/plugins/container", "kids-painting-game/tailwind/config/colors", "kids-painting-game/tailwind/config/screens", "kids-painting-game/tailwind/config/fonts", "kids-painting-game/tailwind/config/text-sizes", "kids-painting-game/tailwind/config/font-weights", "kids-painting-game/tailwind/config/line-height", "kids-painting-game/tailwind/config/letter-spacing", "kids-painting-game/tailwind/config/text-colors", "kids-painting-game/tailwind/config/background-colors", "kids-painting-game/tailwind/config/background-size", "kids-painting-game/tailwind/config/border-widths", "kids-painting-game/tailwind/config/border-colors", "kids-painting-game/tailwind/config/border-radius", "kids-painting-game/tailwind/config/width", "kids-painting-game/tailwind/config/height", "kids-painting-game/tailwind/config/min-width", "kids-painting-game/tailwind/config/min-height", "kids-painting-game/tailwind/config/max-width", "kids-painting-game/tailwind/config/max-height", "kids-painting-game/tailwind/config/padding", "kids-painting-game/tailwind/config/margin", "kids-painting-game/tailwind/config/negative-margin", "kids-painting-game/tailwind/config/shadows", "kids-painting-game/tailwind/config/z-index", "kids-painting-game/tailwind/config/opacity", "kids-painting-game/tailwind/config/svg-fill", "kids-painting-game/tailwind/config/svg-stroke"], function (_exports, _container, _colors, _screens, _fonts, _textSizes, _fontWeights, _lineHeight, _letterSpacing, _textColors, _backgroundColors, _backgroundSize, _borderWidths, _borderColors, _borderRadius, _width, _height, _minWidth, _minHeight, _maxWidth, _maxHeight, _padding, _margin, _negativeMargin, _shadows, _zIndex, _opacity, _svgFill, _svgStroke) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    colors: _colors.default,
    screens: _screens.default,
    fonts: _fonts.default,
    textSizes: _textSizes.default,
    fontWeights: _fontWeights.default,
    leading: _lineHeight.default,
    tracking: _letterSpacing.default,
    textColors: _textColors.default,
    backgroundColors: _backgroundColors.default,
    backgroundSize: _backgroundSize.default,
    borderWidths: _borderWidths.default,
    borderColors: _borderColors.default,
    borderRadius: _borderRadius.default,
    width: _width.default,
    height: _height.default,
    minWidth: _minWidth.default,
    minHeight: _minHeight.default,
    maxWidth: _maxWidth.default,
    maxHeight: _maxHeight.default,
    padding: _padding.default,
    margin: _margin.default,
    negativeMargin: _negativeMargin.default,
    shadows: _shadows.default,
    zIndex: _zIndex.default,
    opacity: _opacity.default,
    svgFill: _svgFill.default,
    svgStroke: _svgStroke.default,

    /*
    |-----------------------------------------------------------------------------
    | Modules                  https://tailwindcss.com/docs/configuration#modules
    |-----------------------------------------------------------------------------
    |
    | Here is where you control which modules are generated and what variants are
    | generated for each of those modules.
    |
    | Currently supported variants:
    |   - responsive
    |   - hover
    |   - focus
    |   - focus-within
    |   - active
    |   - group-hover
    |
    | To disable a module completely, use `false` instead of an array.
    |
    */
    modules: {
      appearance: ['responsive'],
      backgroundAttachment: ['responsive'],
      backgroundColors: ['responsive', 'hover', 'focus'],
      backgroundPosition: ['responsive'],
      backgroundRepeat: ['responsive'],
      backgroundSize: ['responsive'],
      borderCollapse: [],
      borderColors: ['responsive', 'hover', 'focus'],
      borderRadius: ['responsive'],
      borderStyle: ['responsive'],
      borderWidths: ['responsive'],
      cursor: ['responsive'],
      display: ['responsive'],
      flexbox: ['responsive'],
      float: ['responsive'],
      fonts: ['responsive'],
      fontWeights: ['responsive', 'hover', 'focus'],
      height: ['responsive'],
      leading: ['responsive'],
      lists: ['responsive'],
      margin: ['responsive'],
      maxHeight: ['responsive'],
      maxWidth: ['responsive'],
      minHeight: ['responsive'],
      minWidth: ['responsive'],
      negativeMargin: ['responsive'],
      objectFit: false,
      objectPosition: false,
      opacity: ['responsive'],
      outline: ['focus'],
      overflow: ['responsive'],
      padding: ['responsive'],
      pointerEvents: ['responsive'],
      position: ['responsive'],
      resize: ['responsive'],
      shadows: ['responsive', 'hover', 'focus'],
      svgFill: [],
      svgStroke: [],
      tableLayout: ['responsive'],
      textAlign: ['responsive'],
      textColors: ['responsive', 'hover', 'focus'],
      textSizes: ['responsive'],
      textStyle: ['responsive', 'hover', 'focus'],
      tracking: ['responsive'],
      userSelect: ['responsive'],
      verticalAlign: ['responsive'],
      visibility: ['responsive'],
      whitespace: ['responsive'],
      width: ['responsive'],
      zIndex: ['responsive']
    },

    /*
    |-----------------------------------------------------------------------------
    | Plugins                                https://tailwindcss.com/docs/plugins
    |-----------------------------------------------------------------------------
    |
    | Here is where you can register any plugins you'd like to use in your
    | project. Tailwind's built-in `container` plugin is enabled by default to
    | give you a Bootstrap-style responsive container component out of the box.
    |
    | Be sure to view the complete plugin documentation to learn more about how
    | the plugin system works.
    |
    */
    plugins: [(0, _container.default)({// center: true,
      // padding: '1rem',
    })],

    /*
    |-----------------------------------------------------------------------------
    | Advanced Options         https://tailwindcss.com/docs/configuration#options
    |-----------------------------------------------------------------------------
    |
    | Here is where you can tweak advanced configuration options. We recommend
    | leaving these options alone unless you absolutely need to change them.
    |
    */
    options: {
      prefix: '',
      important: false,
      separator: ':'
    }
  };
  _exports.default = _default;
});
;define("kids-painting-game/tailwind/config/text-colors", ["exports", "kids-painting-game/tailwind/config/colors"], function (_exports, _colors) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  |-----------------------------------------------------------------------------
  | Text colors                         https://tailwindcss.com/docs/text-color
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your text colors. By default these use the
  | color palette we defined above, however you're welcome to set these
  | independently if that makes sense for your project.
  |
  | Class name: .text-{color}
  | CSS property: color
  |
  */
  var _default = _colors.default;
  _exports.default = _default;
});
;define("kids-painting-game/tailwind/config/text-sizes", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  |-----------------------------------------------------------------------------
  | Text sizes                         https://tailwindcss.com/docs/text-sizing
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your text sizes. Name these in whatever way
  | makes the most sense to you. We use size names by default, but
  | you're welcome to use a numeric scale or even something else
  | entirely.
  |
  | By default Tailwind uses the "rem" unit type for most measurements.
  | This allows you to set a root font size which all other sizes are
  | then based on. That said, you are free to use whatever units you
  | prefer, be it rems, ems, pixels or other.
  |
  | Class name: .text-{size}
  | CSS property: font-size
  |
  */
  var _default = {
    'xs': '.75rem',
    // 12px
    'sm': '.875rem',
    // 14px
    'base': '1rem',
    // 16px
    'lg': '1.125rem',
    // 18px
    'xl': '1.25rem',
    // 20px
    '2xl': '1.5rem',
    // 24px
    '3xl': '1.875rem',
    // 30px
    '4xl': '2.25rem',
    // 36px
    '5xl': '3rem' // 48px

  };
  _exports.default = _default;
});
;define("kids-painting-game/tailwind/config/width", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  |-----------------------------------------------------------------------------
  | Width                                    https://tailwindcss.com/docs/width
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your width utility sizes. These can be
  | percentage based, pixels, rems, or any other units. By default
  | we provide a sensible rem based numeric scale, a percentage
  | based fraction scale, plus some other common use-cases. You
  | can, of course, modify these values as needed.
  |
  |
  | It's also worth mentioning that Tailwind automatically escapes
  | invalid CSS class name characters, which allows you to have
  | awesome classes like .w-2/3.
  |
  | Class name: .w-{size}
  | CSS property: width
  |
  */
  var _default = {
    'auto': 'auto',
    'px': '1px',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '8': '2rem',
    '10': '2.5rem',
    '12': '3rem',
    '16': '4rem',
    '24': '6rem',
    '32': '8rem',
    '48': '12rem',
    '64': '16rem',
    '1/2': '50%',
    '1/3': '33.33333%',
    '2/3': '66.66667%',
    '1/4': '25%',
    '3/4': '75%',
    '1/5': '20%',
    '2/5': '40%',
    '3/5': '60%',
    '4/5': '80%',
    '1/6': '16.66667%',
    '5/6': '83.33333%',
    'full': '100%',
    'screen': '100vw'
  };
  _exports.default = _default;
});
;define("kids-painting-game/tailwind/config/z-index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  |-----------------------------------------------------------------------------
  | Z-index                                https://tailwindcss.com/docs/z-index
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your z-index utility values. By default we
  | provide a sensible numeric scale. You can, of course, modify these
  | values as needed.
  |
  | Class name: .z-{index}
  | CSS property: z-index
  |
  */
  var _default = {
    'auto': 'auto',
    '0': 0,
    '10': 10,
    '20': 20,
    '30': 30,
    '40': 40,
    '50': 50
  };
  _exports.default = _default;
});
;define("kids-painting-game/templates/application-tailwind", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "VT3anS9z",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\",true],[10,\"class\",\"etw-px-4 etw-my-8 etw-max-w-3xl etw-mx-auto etw-font-sans\"],[8],[0,\"\\n  \"],[7,\"div\",true],[10,\"class\",\"etw-flex etw-mt-6\"],[8],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"etw-w-3/4 etw-pr-6\"],[8],[0,\"\\n      \"],[7,\"h1\",true],[10,\"class\",\"etw-pt-8 etw-text-3xl etw-font-bold\"],[8],[0,\"Your Tailwind styles\"],[9],[0,\"\\n      \"],[7,\"p\",true],[10,\"class\",\"etw-mt-3 etw-mb-4 etw-text-lg\"],[8],[0,\"A reference for every generated class in your app.\"],[9],[0,\"\\n\\n      \"],[1,[28,\"etw/module-section\",null,[[\"title\",\"codeSnippets\",\"moduleStyles\"],[\"Border radius\",[28,\"array\",[\".rounded{-side?}{-size?}\"],null],[24,[\"moduleStyles\",\"borderRadius\"]]]]],false],[0,\"\\n\\n      \"],[1,[28,\"etw/module-section\",null,[[\"title\",\"codeSnippets\",\"moduleStyles\"],[\"Borders\",[28,\"array\",[\".border{-side?}{-width?}\"],null],[24,[\"moduleStyles\",\"borderWidths\"]]]]],false],[0,\"\\n\\n      \"],[1,[28,\"etw/module-section\",null,[[\"title\",\"codeSnippets\",\"moduleStyles\"],[\"Colors\",[28,\"array\",[\".text-{color}\",\".bg-{color}\",\".border-{color}\"],null],[24,[\"moduleStyles\",\"colors\"]]]]],false],[0,\"\\n\\n      \"],[1,[28,\"etw/module-section\",null,[[\"title\",\"codeSnippets\",\"moduleStyles\"],[\"Font weights\",[28,\"array\",[\".font-{weight}\"],null],[24,[\"moduleStyles\",\"fontWeights\"]]]]],false],[0,\"\\n\\n      \"],[1,[28,\"etw/module-section\",null,[[\"title\",\"codeSnippets\",\"moduleStyles\"],[\"Height\",[28,\"array\",[\".h-{size}\"],null],[24,[\"moduleStyles\",\"height\"]]]]],false],[0,\"\\n\\n      \"],[1,[28,\"etw/module-section\",null,[[\"title\",\"codeSnippets\",\"moduleStyles\"],[\"Letter spacing\",[28,\"array\",[\".tracking-{size}\"],null],[24,[\"moduleStyles\",\"letterSpacing\"]]]]],false],[0,\"\\n\\n      \"],[1,[28,\"etw/module-section\",null,[[\"title\",\"codeSnippets\",\"moduleStyles\"],[\"Line height\",[28,\"array\",[\".leading-{size}\"],null],[24,[\"moduleStyles\",\"lineHeight\"]]]]],false],[0,\"\\n\\n      \"],[1,[28,\"etw/module-section\",null,[[\"title\",\"codeSnippets\",\"moduleStyles\"],[\"Margin\",[28,\"array\",[\".m{side?}-{size}\"],null],[24,[\"moduleStyles\",\"margin\"]]]]],false],[0,\"\\n\\n      \"],[1,[28,\"etw/module-section\",null,[[\"title\",\"codeSnippets\",\"moduleStyles\"],[\"Max height\",[28,\"array\",[\".max-h-{size}\"],null],[24,[\"moduleStyles\",\"maxHeight\"]]]]],false],[0,\"\\n\\n      \"],[1,[28,\"etw/module-section\",null,[[\"title\",\"codeSnippets\",\"moduleStyles\"],[\"Max width\",[28,\"array\",[\".max-w-{size}\"],null],[24,[\"moduleStyles\",\"maxWidth\"]]]]],false],[0,\"\\n\\n      \"],[1,[28,\"etw/module-section\",null,[[\"title\",\"codeSnippets\",\"moduleStyles\"],[\"Min height\",[28,\"array\",[\".min-h-{size}\"],null],[24,[\"moduleStyles\",\"minHeight\"]]]]],false],[0,\"\\n\\n      \"],[1,[28,\"etw/module-section\",null,[[\"title\",\"codeSnippets\",\"moduleStyles\"],[\"Min width\",[28,\"array\",[\".min-w-{size}\"],null],[24,[\"moduleStyles\",\"minWidth\"]]]]],false],[0,\"\\n\\n      \"],[1,[28,\"etw/module-section\",null,[[\"title\",\"codeSnippets\",\"moduleStyles\"],[\"Negative margin\",[28,\"array\",[\".-m{side?}-{size}\"],null],[24,[\"moduleStyles\",\"negativeMargin\"]]]]],false],[0,\"\\n\\n      \"],[1,[28,\"etw/module-section\",null,[[\"title\",\"codeSnippets\",\"moduleStyles\"],[\"Opacity\",[28,\"array\",[\".opacity-{name}\"],null],[24,[\"moduleStyles\",\"opacity\"]]]]],false],[0,\"\\n\\n      \"],[1,[28,\"etw/module-section\",null,[[\"title\",\"codeSnippets\",\"moduleStyles\"],[\"Padding\",[28,\"array\",[\".p{side?}-{size}\"],null],[24,[\"moduleStyles\",\"padding\"]]]]],false],[0,\"\\n\\n      \"],[1,[28,\"etw/module-section\",null,[[\"title\",\"codeSnippets\",\"moduleStyles\"],[\"Shadows\",[28,\"array\",[\".shadow-{size?}\"],null],[24,[\"moduleStyles\",\"shadows\"]]]]],false],[0,\"\\n\\n      \"],[1,[28,\"etw/module-section\",null,[[\"title\",\"codeSnippets\",\"moduleStyles\"],[\"SVG fill\",[28,\"array\",[\".fill-{name}\"],null],[24,[\"moduleStyles\",\"svgFill\"]]]]],false],[0,\"\\n\\n      \"],[1,[28,\"etw/module-section\",null,[[\"title\",\"codeSnippets\",\"moduleStyles\"],[\"SVG stroke\",[28,\"array\",[\".stroke-{name}\"],null],[24,[\"moduleStyles\",\"svgStroke\"]]]]],false],[0,\"\\n\\n      \"],[1,[28,\"etw/module-section\",null,[[\"title\",\"codeSnippets\",\"moduleStyles\"],[\"Text sizes\",[28,\"array\",[\".text-{size}\"],null],[24,[\"moduleStyles\",\"textSizes\"]]]]],false],[0,\"\\n\\n      \"],[1,[28,\"etw/module-section\",null,[[\"title\",\"codeSnippets\",\"moduleStyles\"],[\"Width\",[28,\"array\",[\".w-{size}\"],null],[24,[\"moduleStyles\",\"width\"]]]]],false],[0,\"\\n\\n      \"],[1,[28,\"etw/module-section\",null,[[\"title\",\"codeSnippets\",\"moduleStyles\"],[\"Z index\",[28,\"array\",[\".z-{index}\"],null],[24,[\"moduleStyles\",\"zIndex\"]]]]],false],[0,\"\\n\\n    \"],[9],[0,\"\\n\\n    \"],[7,\"div\",true],[10,\"class\",\"etw-w-1/4 etw-relative\"],[8],[0,\"\\n      \"],[1,[22,\"etw/module-style-detail\"],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "kids-painting-game/templates/application-tailwind.hbs"
    }
  });

  _exports.default = _default;
});
;define("kids-painting-game/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "kA/jMqqV",
    "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[1,[22,\"outlet\"],false],[0,\"\\n\\n\"],[7,\"div\",true],[10,\"class\",\"pin-b fixed bg-black p-2\"],[8],[0,\"\\n  \"],[4,\"link-to\",null,[[\"classNames\",\"route\"],[\"text-white\",\"play\"]],{\"statements\":[[0,\"Play\"]],\"parameters\":[]},null],[0,\"\\n  \"],[4,\"link-to\",null,[[\"classNames\",\"route\"],[\"text-white\",\"design\"]],{\"statements\":[[0,\"Design\"]],\"parameters\":[]},null],[0,\"\\n\"],[9]],\"hasEval\":false}",
    "meta": {
      "moduleName": "kids-painting-game/templates/application.hbs"
    }
  });

  _exports.default = _default;
});
;define("kids-painting-game/templates/components/color-picker", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "q+S0gL2F",
    "block": "{\"symbols\":[\"color\",\"@color\"],\"statements\":[[7,\"div\",true],[10,\"class\",\"flex m-4 shadow-md\"],[8],[0,\"\\n\"],[4,\"each\",[[28,\"array\",[\"red\",\"teal\",\"yellow\",\"blue\",\"green\",\"grey\",\"white\",\"black\",\"purple\",\"orange\",\"pink\",\"indigo\"],null]],null,{\"statements\":[[0,\"    \"],[7,\"div\",true],[11,\"class\",[29,[\"flex-1 text-center text-2xl align-middle p-4 cursor-pointer \",[28,\"concat\",[\"bg-\",[23,1,[]]],null]]]],[8],[0,\"\\n\"],[4,\"if\",[[28,\"eq\",[[23,2,[]],[23,1,[]]],null]],null,{\"statements\":[[0,\"        🖌\\n\"]],\"parameters\":[]},null],[0,\"    \"],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[9]],\"hasEval\":false}",
    "meta": {
      "moduleName": "kids-painting-game/templates/components/color-picker.hbs"
    }
  });

  _exports.default = _default;
});
;define("kids-painting-game/templates/components/etw/module-section", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "X8dlgeh0",
    "block": "{\"symbols\":[\"moduleStyle\",\"snippet\"],\"statements\":[[7,\"section\",true],[8],[0,\"\\n  \"],[7,\"h2\",true],[10,\"class\",\"etw-pt-8 etw-mb-6 etw-text-lg etw-font-bold\"],[8],[1,[22,\"title\"],false],[9],[0,\"\\n\\n  \"],[7,\"ul\",true],[10,\"class\",\"etw-list-reset etw-leading-normal\"],[8],[0,\"\\n\"],[4,\"each\",[[24,[\"codeSnippets\"]]],null,{\"statements\":[[0,\"      \"],[7,\"li\",true],[8],[7,\"code\",true],[8],[1,[23,2,[]],false],[9],[9],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"  \"],[9],[0,\"\\n\\n  \"],[7,\"div\",true],[10,\"class\",\"etw-mt-8 etw-flex etw-flex-wrap\"],[8],[0,\"\\n\"],[4,\"each\",[[24,[\"moduleStyles\"]]],null,{\"statements\":[[0,\"      \"],[1,[28,\"etw/module-style-example\",null,[[\"moduleStyle\"],[[23,1,[]]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "kids-painting-game/templates/components/etw/module-section.hbs"
    }
  });

  _exports.default = _default;
});
;define("kids-painting-game/templates/components/etw/module-style-detail", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "c8c0dWdE",
    "block": "{\"symbols\":[\"style\",\"state\",\"breakpoint\"],\"statements\":[[7,\"div\",true],[10,\"class\",\"etw-shadow-lg etw-fixed etw-mr-4 etw-px-4 etw-pt-4 etw-pb-14 etw-bg-white etw-w-64 etw-mt-8 overflow-y-auto etw-h-screen\"],[8],[0,\"\\n  \"],[7,\"h3\",true],[8],[0,\"Detail\"],[9],[0,\"\\n\\n\"],[4,\"if\",[[24,[\"moduleStyle\"]]],null,{\"statements\":[[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"etw-my-8\"],[8],[0,\"\\n      \"],[1,[28,\"etw/module-style-example\",null,[[\"moduleStyle\"],[[24,[\"moduleStyle\"]]]]],false],[0,\"\\n    \"],[9],[0,\"\\n\\n    \"],[7,\"div\",true],[10,\"class\",\"etw-mt-4\"],[8],[0,\"\\n      \"],[7,\"h4\",true],[10,\"class\",\"etw-inline-block etw-pr-2\"],[8],[0,\"Responsive: \"],[9],[0,\"\\n      \"],[7,\"div\",true],[10,\"class\",\"etw-mt-2 etw-text-sm etw-inline-block\"],[8],[0,\"\\n\"],[4,\"each\",[[28,\"array\",[\"all\",\"sm\",\"md\",\"lg\",\"xl\"],null]],null,{\"statements\":[[0,\"          \"],[7,\"a\",false],[12,\"href\",\"#\"],[12,\"class\",[29,[\"\\n              etw-no-underline\\n              etw-text-black\\n              etw-pr-2\\n              \",[28,\"if\",[[28,\"eq\",[[24,[\"activeResponsiveClass\"]],[23,3,[]]],null],\"etw-opacity-100\",\"etw-opacity-25\"],null],\"\\n            \"]]],[3,\"action\",[[23,0,[]],[28,\"mut\",[[24,[\"activeResponsiveClass\"]]],null],[23,3,[]]]],[8],[0,\"\\n            \"],[1,[23,3,[]],false],[0,\"\\n          \"],[9],[0,\"\\n\"]],\"parameters\":[3]},null],[0,\"      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\\n    \"],[7,\"div\",true],[10,\"class\",\"etw-mt-4\"],[8],[0,\"\\n      \"],[7,\"h4\",true],[10,\"class\",\"etw-inline-block etw-pr-2\"],[8],[0,\"State: \"],[9],[0,\"\\n      \"],[7,\"div\",true],[10,\"class\",\"etw-mt-2 etw-text-sm etw-inline-block\"],[8],[0,\"\\n\"],[4,\"each\",[[28,\"array\",[\"none\",\"hover\",\"focus\"],null]],null,{\"statements\":[[0,\"          \"],[7,\"a\",false],[12,\"href\",\"#\"],[12,\"class\",[29,[\"\\n              etw-no-underline\\n              etw-text-black\\n              etw-pr-2\\n              \",[28,\"if\",[[28,\"eq\",[[24,[\"activeState\"]],[23,2,[]]],null],\"etw-opacity-100\",\"etw-opacity-25\"],null],\"\\n            \"]]],[3,\"action\",[[23,0,[]],[28,\"mut\",[[24,[\"activeState\"]]],null],[23,2,[]]]],[8],[0,\"\\n            \"],[1,[23,2,[]],false],[0,\"\\n          \"],[9],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\\n    \"],[7,\"div\",true],[10,\"class\",\"etw-mt-8 etw-mb-4\"],[8],[0,\"\\n      \"],[7,\"p\",true],[10,\"class\",\"etw-text-right etw-text-xs etw-opacity-50\"],[8],[0,\"\\n\"],[4,\"if\",[[24,[\"highlightedStyle\"]]],null,{\"statements\":[[0,\"          Copied!\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"          Click to copy\\n\"]],\"parameters\":[]}],[0,\"      \"],[9],[0,\"\\n\\n      \"],[7,\"ul\",true],[10,\"class\",\"etw-mt-3 etw-list-reset\"],[8],[0,\"\\n\"],[4,\"each\",[[24,[\"detailStyles\"]]],null,{\"statements\":[[0,\"          \"],[7,\"li\",true],[10,\"class\",\"etw-mt-4\"],[8],[0,\"\\n\"],[4,\"copy-button\",null,[[\"class\",\"clipboardText\",\"title\",\"success\"],[[28,\"concat\",[\"etw-bg-grey-light etw-opacity-75 hover:etw-opacity-100 \",\"etw-px-1 etw-py-2 etw-w-full etw-text-left etw-transition \",[28,\"if\",[[28,\"eq\",[[24,[\"highlightedStyle\"]],[23,1,[]]],null],\"etw-bg-green etw-text-white\"],null]],null],[23,1,[]],\"Copy\",[28,\"action\",[[23,0,[]],\"highlightStyle\",[23,1,[]]],null]]],{\"statements\":[[0,\"              \"],[7,\"code\",true],[8],[0,\".\"],[1,[23,1,[]],false],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"          \"],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"\\n    \"],[7,\"p\",true],[10,\"class\",\"etw-mt-4 etw-text-grey etw-italic\"],[8],[0,\"Select a module for more detail.\"],[9],[0,\"\\n\\n\"]],\"parameters\":[]}],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "kids-painting-game/templates/components/etw/module-style-detail.hbs"
    }
  });

  _exports.default = _default;
});
;define("kids-painting-game/templates/components/etw/module-style-example", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "NIilT933",
    "block": "{\"symbols\":[],\"statements\":[[7,\"a\",false],[12,\"class\",\"etw-mb-8 etw-w-1/5 etw-p-2\"],[3,\"action\",[[23,0,[]],\"selectModuleStyle\"]],[8],[0,\"\\n  \"],[7,\"div\",true],[10,\"class\",\"etw-text-center etw-m-4 etw-text-sm \"],[8],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"etw-text-center etw-m-4 etw-text-sm \"],[8],[0,\"\\n\\n\"],[4,\"if\",[[28,\"eq\",[[24,[\"moduleStyle\",\"module\"]],\"border-radius\"],null]],null,{\"statements\":[[0,\"\\n        \"],[7,\"div\",true],[11,\"class\",[29,[\"\\n          etw-mx-auto etw-w-24 etw-h-24 etw-border\\n          etw-border-solid etw-border-grey\\n          etw-bg-grey-lighter\\n          \",[24,[\"classesForModuleStyle\",\"0\"]],\"\\n        \"]]],[8],[9],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[28,\"eq\",[[24,[\"moduleStyle\",\"module\"]],\"border-widths\"],null]],null,{\"statements\":[[0,\"        \"],[7,\"div\",true],[11,\"class\",[29,[\"\\n          etw-mx-auto etw-w-24 etw-h-24\\n          etw-border-red etw-bg-grey-lighter etw-border-solid\\n          \",[24,[\"classesForModuleStyle\",\"0\"]],\"\\n        \"]]],[8],[9],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[28,\"eq\",[[24,[\"moduleStyle\",\"module\"]],\"colors\"],null]],null,{\"statements\":[[0,\"        \"],[7,\"div\",true],[11,\"class\",[29,[\"etw-marginx-auto etw-w-full etw-h-24 bg-\",[24,[\"moduleStyle\",\"name\"]]]]],[8],[9],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[28,\"eq\",[[24,[\"moduleStyle\",\"module\"]],\"font-weights\"],null]],null,{\"statements\":[[0,\"        \"],[7,\"p\",true],[11,\"class\",[29,[\"font-\",[24,[\"moduleStyle\",\"name\"]]]]],[8],[0,\"\\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit.\\n        \"],[9],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[28,\"eq\",[[24,[\"moduleStyle\",\"module\"]],\"height\"],null]],null,{\"statements\":[[0,\"        \"],[7,\"div\",true],[11,\"class\",[29,[\"\\n          etw-mx-auto etw-w-24 etw-h-24\\n          etw-border etw-border-solid etw-border-grey\\n          etw-bg-grey-lighter\\n          \",[24,[\"classesForModuleStyle\",\"0\"]],\"\\n        \"]]],[8],[9],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[28,\"eq\",[[24,[\"moduleStyle\",\"module\"]],\"letter-spacing\"],null]],null,{\"statements\":[[0,\"        \"],[7,\"p\",true],[11,\"class\",[29,[\"text-left tracking-\",[24,[\"moduleStyle\",\"name\"]]]]],[8],[0,\"\\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\\n        \"],[9],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[28,\"eq\",[[24,[\"moduleStyle\",\"module\"]],\"line-height\"],null]],null,{\"statements\":[[0,\"        \"],[7,\"p\",true],[11,\"class\",[29,[\"text-left leading-\",[24,[\"moduleStyle\",\"name\"]]]]],[8],[0,\"\\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\\n        \"],[9],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[28,\"eq\",[[24,[\"moduleStyle\",\"module\"]],\"margin\"],null]],null,{\"statements\":[[0,\"        \"],[7,\"div\",true],[11,\"class\",[29,[\"etw-bg-red etw-w-24 etw-mx-auto etw-border-t etw-border-solid \",[28,\"if\",[[28,\"eq\",[[24,[\"moduleStyle\",\"name\"]],\"auto\"],null],\"\",\"etw-border-transparent\"],null]]]],[8],[0,\"\\n          \"],[7,\"div\",true],[11,\"class\",[29,[\"\\n            etw-mx-auto etw-w-24 etw-h-24 etw-border\\n             etw-bg-grey-lighter\\n            mt-\",[24,[\"moduleStyle\",\"name\"]],\"\\n          \"]]],[8],[9],[0,\"\\n        \"],[9],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[28,\"eq\",[[24,[\"moduleStyle\",\"module\"]],\"max-height\"],null]],null,{\"statements\":[[0,\"        \"],[7,\"div\",true],[11,\"class\",[29,[\"\\n          etw-mx-auto etw-w-24 etw-h-24 etw-bg-grey-lighter\\n          etw-border etw-border-solid etw-border-grey\\n          max-h-\",[24,[\"moduleStyle\",\"name\"]],\"\\n        \"]]],[8],[9],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[28,\"eq\",[[24,[\"moduleStyle\",\"module\"]],\"max-width\"],null]],null,{\"statements\":[[0,\"        \"],[7,\"div\",true],[11,\"class\",[29,[\"\\n          etw-mx-auto etw-w-24 etw-h-24 etw-bg-grey-lighter\\n          etw-border etw-border-solid etw-border-grey\\n          max-w-\",[24,[\"moduleStyle\",\"name\"]],\"\\n        \"]]],[8],[9],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[28,\"eq\",[[24,[\"moduleStyle\",\"module\"]],\"min-height\"],null]],null,{\"statements\":[[0,\"        \"],[7,\"div\",true],[11,\"class\",[29,[\"\\n          etw-mx-auto etw-w-24 etw-h-24 etw-bg-grey-lighter\\n          etw-border etw-border-solid etw-border-grey\\n          min-h-\",[24,[\"moduleStyle\",\"name\"]],\"\\n        \"]]],[8],[9],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[28,\"eq\",[[24,[\"moduleStyle\",\"module\"]],\"min-width\"],null]],null,{\"statements\":[[0,\"        \"],[7,\"div\",true],[11,\"class\",[29,[\"\\n          etw-mx-auto etw-w-24 etw-h-24 etw-bg-grey-lighter\\n          etw-border etw-border-solid etw-border-grey\\n          min-w-\",[24,[\"moduleStyle\",\"name\"]],\"\\n        \"]]],[8],[9],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[28,\"eq\",[[24,[\"moduleStyle\",\"module\"]],\"negative-margin\"],null]],null,{\"statements\":[[0,\"        \"],[7,\"div\",true],[10,\"class\",\"etw-mb-8 etw-bg-red etw-px-4 etw-pb-4 etw-mx-auto etw-h-32 etw-relative\"],[8],[0,\"\\n          \"],[7,\"div\",true],[10,\"class\",\"etw-absolute etw-pin-x\"],[8],[0,\"\\n            \"],[7,\"div\",true],[11,\"class\",[29,[\"\\n            etw-mx-auto etw-w-24 etw-h-24 etw-border\\n            etw-bg-grey-lighter etw-shadow-lg\\n            -mt-\",[24,[\"moduleStyle\",\"name\"]],\"\\n            \"]]],[8],[9],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[28,\"eq\",[[24,[\"moduleStyle\",\"module\"]],\"opacity\"],null]],null,{\"statements\":[[0,\"        \"],[7,\"div\",true],[11,\"class\",[29,[\"\\n          etw-mx-auto etw-w-24 etw-h-24 etw-border\\n          etw-border-grey etw-bg-grey-lighter\\n          opacity-\",[24,[\"moduleStyle\",\"name\"]],\"\\n        \"]]],[8],[9],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[28,\"eq\",[[24,[\"moduleStyle\",\"module\"]],\"padding\"],null]],null,{\"statements\":[[0,\"        \"],[7,\"div\",true],[10,\"class\",\"etw-bg-red etw-w-24 etw-mx-auto\"],[8],[0,\"\\n          \"],[7,\"div\",true],[11,\"class\",[29,[\"\\n            etw-mx-auto etw-w-24 etw-h-24 etw-border\\n             etw-bg-grey-lighter\\n            pt-\",[24,[\"moduleStyle\",\"name\"]],\"\\n          \"]]],[8],[0,\"\\n            \"],[7,\"p\",true],[10,\"class\",\"etw-text-grey-darker\"],[8],[0,\"Lorem\"],[9],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[28,\"eq\",[[24,[\"moduleStyle\",\"module\"]],\"shadows\"],null]],null,{\"statements\":[[0,\"        \"],[7,\"div\",true],[11,\"class\",[29,[\"\\n          etw-mx-auto etw-w-24 etw-h-24 etw-bg-white\\n          \",[24,[\"classesForModuleStyle\",\"0\"]],\"\\n        \"]]],[8],[0,\"\\n        \"],[9],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[28,\"eq\",[[24,[\"moduleStyle\",\"module\"]],\"svg-fill\"],null]],null,{\"statements\":[[0,\"        \"],[7,\"div\",true],[10,\"class\",\"etw-bg-grey-lighter etw-text-red etw-py-4\"],[8],[0,\"\\n          \"],[7,\"svg\",true],[10,\"class\",\"fill-current inline-block h-12 w-12\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[10,\"viewBox\",\"0 0 20 20\"],[8],[0,\"\\n            \"],[7,\"path\",true],[10,\"d\",\"M18 9.87V20H2V9.87a4.25 4.25 0 0 0 3-.38V14h10V9.5a4.26 4.26 0 0 0 3 .37zM3 0h4l-.67 6.03A3.43 3.43 0 0 1 3 9C1.34 9 .42 7.73.95 6.15L3 0zm5 0h4l.7 6.3c.17 1.5-.91 2.7-2.42 2.7h-.56A2.38 2.38 0 0 1 7.3 6.3L8 0zm5 0h4l2.05 6.15C19.58 7.73 18.65 9 17 9a3.42 3.42 0 0 1-3.33-2.97L13 0z\"],[8],[9],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[28,\"eq\",[[24,[\"moduleStyle\",\"module\"]],\"svg-stroke\"],null]],null,{\"statements\":[[0,\"        \"],[7,\"div\",true],[10,\"class\",\"etw-bg-grey-lighter etw-text-red etw-py-4\"],[8],[0,\"\\n          \"],[7,\"svg\",true],[10,\"class\",\"stroke-current inline-block h-12 w-12\"],[10,\"viewBox\",\"0 0 24 24\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[10,\"fill\",\"none\"],[10,\"stroke-width\",\"2\"],[10,\"stroke-linecap\",\"round\"],[10,\"stroke-linejoin\",\"round\"],[8],[0,\"\\n              \"],[7,\"circle\",true],[10,\"cx\",\"8\"],[10,\"cy\",\"21\"],[10,\"r\",\"2\"],[8],[9],[0,\"\\n              \"],[7,\"circle\",true],[10,\"cx\",\"20\"],[10,\"cy\",\"21\"],[10,\"r\",\"2\"],[8],[9],[0,\"\\n              \"],[7,\"path\",true],[10,\"d\",\"M5.67 6H23l-1.68 8.39a2 2 0 0 1-2 1.61H8.75a2 2 0 0 1-2-1.74L5.23 2.74A2 2 0 0 0 3.25 1H1\"],[8],[9],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[28,\"eq\",[[24,[\"moduleStyle\",\"module\"]],\"text-sizes\"],null]],null,{\"statements\":[[0,\"        \"],[7,\"p\",true],[11,\"class\",[29,[\"text-left text-\",[24,[\"moduleStyle\",\"name\"]]]]],[8],[0,\"\\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit.\\n        \"],[9],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[28,\"eq\",[[24,[\"moduleStyle\",\"module\"]],\"width\"],null]],null,{\"statements\":[[0,\"        \"],[7,\"div\",true],[11,\"class\",[29,[\"\\n          etw-mx-auto etw-w-24 etw-h-24 etw-border\\n          etw-border-grey etw-bg-grey-lighter\\n          \",[24,[\"classesForModuleStyle\",\"0\"]],\"\\n        \"]]],[8],[9],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[28,\"eq\",[[24,[\"moduleStyle\",\"module\"]],\"z-index\"],null]],null,{\"statements\":[[0,\"        \"],[7,\"div\",true],[11,\"class\",[29,[\"\\n          etw-mx-auto etw-w-24 etw-h-24 etw-border\\n          etw-border-grey etw-bg-grey-lighter\\n          \",[24,[\"classesForModuleStyle\",\"0\"]],\"\\n        \"]]],[8],[9],[0,\"\\n\\n      \"]],\"parameters\":[]},null]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}],[0,\"\\n      \"],[7,\"div\",true],[10,\"class\",\"etw-mt-3 etw-leading-normal\"],[8],[0,\"\\n        \"],[7,\"p\",true],[8],[1,[24,[\"moduleStyle\",\"name\"]],false],[9],[0,\"\\n        \"],[7,\"p\",true],[10,\"class\",\"etw-opacity-50\"],[8],[1,[24,[\"moduleStyle\",\"value\"]],false],[9],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "kids-painting-game/templates/components/etw/module-style-example.hbs"
    }
  });

  _exports.default = _default;
});
;define("kids-painting-game/templates/components/picture-grid", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "l5LT0suQ",
    "block": "{\"symbols\":[\"&default\"],\"statements\":[[14,1]],\"hasEval\":false}",
    "meta": {
      "moduleName": "kids-painting-game/templates/components/picture-grid.hbs"
    }
  });

  _exports.default = _default;
});
;define("kids-painting-game/templates/design", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "BcFocpQp",
    "block": "{\"symbols\":[],\"statements\":[[7,\"h1\",true],[8],[0,\"design hbs\"],[9],[0,\"\\n\\n\"],[1,[22,\"outlet\"],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "kids-painting-game/templates/design.hbs"
    }
  });

  _exports.default = _default;
});
;define("kids-painting-game/templates/play", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "e4ImNrhw",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\",true],[10,\"class\",\"pin fixed flex-col\"],[8],[0,\"\\n  \"],[7,\"div\",true],[10,\"class\",\"flex-shrink flex bg-black h-16\"],[8],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"flex-1 bg-yellow\"],[8],[0,\"Left\"],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"flex-1 bg-pink\"],[8],[0,\" \\n      \"],[5,\"color-picker\",[[3,\"action\",[[23,0,[]],[28,\"mut\",[[24,[\"color\"]]],null]]]],[[\"@color\",\"@onchange\"],[[22,\"color\"],\"\"]]],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[7,\"div\",true],[10,\"class\",\"flex-1 flex\"],[8],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"flex-1 border-r-2 border-gray-dark border-dashed p-4\"],[8],[0,\"\\n      grid\\n    \"],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"flex-1 p-4\"],[8],[0,\"\\n      grid\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}",
    "meta": {
      "moduleName": "kids-painting-game/templates/play.hbs"
    }
  });

  _exports.default = _default;
});
;define("kids-painting-game/transforms/boolean", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.BooleanTransform;
    }
  });
});
;define("kids-painting-game/transforms/date", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.DateTransform;
    }
  });
});
;define("kids-painting-game/transforms/number", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.NumberTransform;
    }
  });
});
;define("kids-painting-game/transforms/string", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.StringTransform;
    }
  });
});
;

;define('kids-painting-game/config/environment', [], function() {
  var prefix = 'kids-painting-game';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("kids-painting-game/app")["default"].create({"name":"kids-painting-game","version":"0.0.0"});
          }
        
//# sourceMappingURL=kids-painting-game.map
