import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { percySnapshot } from 'ember-percy';

module('Integration | Component | next-comp', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{next-comp}}`);
    percySnapshot('meter bar zero');
    assert.equal(this.element.textContent.trim(), 'lole');

    // // Template block usage:
    // await render(hbs`
    //   {{#next-comp}}
    //     template block text
    //   {{/next-comp}}
    // `);

    // assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
