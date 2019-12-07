'use strict';

define("kids-painting-game/tests/helpers/ember-cli-clipboard", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.triggerSuccess = triggerSuccess;
  _exports.triggerError = triggerError;
  _exports.default = _default;

  /* === Integration Test Helpers === */

  /**
   * Fires `success` action for an instance of a copy-button component
   * @function triggerSuccess
   * @param {Object} context - integration test’s this context
   * @param {String|Element} selector - selector of the copy-button instance
   * @returns {Void}
   */
  function triggerSuccess(context, selector) {
    fireComponentAction(context, selector, 'success');
  }
  /**
   * Fires `error` action for an instance of a copy-button component
   * @function triggerError
   * @param {Object} context - integration test’s this context
   * @param {String|Element} selector - selector of the copy-button instance
   * @returns {Void}
   */


  function triggerError(context, selector) {
    fireComponentAction(context, selector, 'error');
  }
  /* === Acceptance Test Helpers === */

  /**
   * Default export is a function that registers acceptance test helpers
   */


  function _default() {
    Ember.Test.registerAsyncHelper('triggerCopySuccess', function (app, selector = '.copy-btn') {
      fireComponentActionFromApp(app, selector, 'success');
    });
    Ember.Test.registerAsyncHelper('triggerCopyError', function (app, selector = '.copy-btn') {
      fireComponentActionFromApp(app, selector, 'error');
    });
  }
  /* === Private Functions === */

  /**
   * Fires named action for an instance of a copy-button component in an app
   * @function fireComponentActionFromApp
   * @param {Object} app - Ember application
   * @param {String|Element} selector - selector of the copy-button instance
   * @param {String} actionName - name of action
   * @returns {Void}
   */


  function fireComponentActionFromApp(app, selector, actionName) {
    fireComponentAction({
      container: app.__container__,
      $: app.$
    }, selector, actionName);
  }
  /**
   * Fires named action for an instance of a copy-button component
   * @function fireComponentAction
   * @param {Object} context - test context
   * @param {String|Element} selector - selector of the copy-button instance
   * @param {String} actionName - name of action
   * @returns {Void}
   */


  function fireComponentAction(context, selector, actionName) {
    let component = getComponentBySelector(context, selector);
    fireActionByName(component, actionName);
  }
  /**
   * Fetches component reference for a given context and selector
   * @function getComponentBySelector
   * @param {Object} context - test context
   * @param {String|Element} selector - selector of the copy-button instance
   * @returns {Object} component object
   */


  function getComponentBySelector(context, selector = '.copy-btn') {
    let emberId = context.$(selector).attr('id');
    return context.container.lookup('-view-registry:main')[emberId];
  }
  /**
   * Fires a component's action given an action name
   * @function fireActionByName
   * @param {Ember.Component} component - component to fire action from
   * @param {String} actionName - name of action
   * @returns {Void}
   */


  function fireActionByName(component, actionName) {
    let action = component[actionName];
    Ember.run(() => {
      if (typeof action === 'string') {
        component.sendAction(action);
      } else {
        action();
      }
    });
  }
});
define("kids-painting-game/tests/integration/components/color-picker-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | color-picker', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <ColorPicker />
      */
      {
        id: "lUGNsstB",
        block: "{\"symbols\":[],\"statements\":[[5,\"color-picker\",[],[[],[]]]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <ColorPicker>
              template block text
            </ColorPicker>
          
      */
      {
        id: "mzxZOQsx",
        block: "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"color-picker\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("kids-painting-game/tests/integration/components/picture-grid-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | picture-grid', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <PictureGrid />
      */
      {
        id: "Xc5Lm4f/",
        block: "{\"symbols\":[],\"statements\":[[5,\"picture-grid\",[],[[],[]]]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <PictureGrid>
              template block text
            </PictureGrid>
          
      */
      {
        id: "lm6NweLS",
        block: "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"picture-grid\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("kids-painting-game/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('components/color-picker.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/color-picker.js should pass ESLint\n\n');
  });
  QUnit.test('components/picture-grid.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/picture-grid.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/design.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/design.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/play.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/play.js should pass ESLint\n\n');
  });
  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('routes/design.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/design.js should pass ESLint\n\n');
  });
  QUnit.test('routes/play.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/play.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/background-colors.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/background-colors.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/background-size.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/background-size.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/border-colors.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/border-colors.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/border-radius.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/border-radius.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/border-widths.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/border-widths.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/colors.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/colors.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/font-weights.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/font-weights.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/fonts.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/fonts.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/height.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/height.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/letter-spacing.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/letter-spacing.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/line-height.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/line-height.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/margin.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/margin.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/max-height.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/max-height.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/max-width.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/max-width.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/min-height.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/min-height.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/min-width.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/min-width.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/negative-margin.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/negative-margin.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/opacity.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/opacity.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/padding.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/padding.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/screens.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/screens.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/shadows.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/shadows.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/svg-fill.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/svg-fill.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/svg-stroke.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/svg-stroke.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/tailwind.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/tailwind.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/text-colors.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/text-colors.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/text-sizes.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/text-sizes.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/width.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/width.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/z-index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/z-index.js should pass ESLint\n\n');
  });
});
define("kids-painting-game/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('kids-painting-game/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'kids-painting-game/templates/application.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('kids-painting-game/templates/components/color-picker.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'kids-painting-game/templates/components/color-picker.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('kids-painting-game/templates/components/picture-grid.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'kids-painting-game/templates/components/picture-grid.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('kids-painting-game/templates/design.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'kids-painting-game/templates/design.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('kids-painting-game/templates/play.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'kids-painting-game/templates/play.hbs should pass TemplateLint.\n\n');
  });
});
define("kids-painting-game/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('integration/components/color-picker-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/color-picker-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/picture-grid-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/picture-grid-test.js should pass ESLint\n\n');
  });
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/controllers/design-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/design-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/controllers/play-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/play-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/design-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/design-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/play-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/play-test.js should pass ESLint\n\n');
  });
});
define("kids-painting-game/tests/test-helper", ["kids-painting-game/app", "kids-painting-game/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("kids-painting-game/tests/unit/controllers/design-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | design', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:design');
      assert.ok(controller);
    });
  });
});
define("kids-painting-game/tests/unit/controllers/play-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | play', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:play');
      assert.ok(controller);
    });
  });
});
define("kids-painting-game/tests/unit/routes/design-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | design', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:design');
      assert.ok(route);
    });
  });
});
define("kids-painting-game/tests/unit/routes/play-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | play', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:play');
      assert.ok(route);
    });
  });
});
define('kids-painting-game/config/environment', [], function() {
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

require('kids-painting-game/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
