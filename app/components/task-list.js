import Component from '@ember/component';

export default Component.extend({
    store: Ember.inject.service(),

    actions: {
        newTask() {
            this.set('isShowingModal', true);
        },
        createTask() {
            let store = this.get('store');
            let name = this.get('taskName');
            let task = store.createRecord('task', { name: name });
            task.save();
            this.set('isShowingModal', false);
        },
        cancel() {
            this.set('isShowingModal', false);
        }
    }
});
