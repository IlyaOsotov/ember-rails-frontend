import Component from '@ember/component';

export default Component.extend({
    store: Ember.inject.service(),

    actions: {
        removeTask(taskId) {
            let store = this.get('store');
            store.findRecord('task', taskId, { backgroundReload: false }).then(function (task) {
                task.destroyRecord();
            });
        }
    }
});
