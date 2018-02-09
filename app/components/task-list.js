import Component from '@ember/component';

export default Component.extend({
    store: Ember.inject.service(),

    actions: {
        createTask() {
            let store = this.get('store');
            let task = store.createRecord('task', { name: 'test' });
            console.log(task);
            task.save();
        }
    }
});
