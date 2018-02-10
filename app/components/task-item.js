import Component from '@ember/component';

export default Component.extend({
    store: Ember.inject.service(),

    actions: {
        removeTask(taskId) {
            let store = this.get('store');
            store.findRecord('task', taskId, { backgroundReload: false }).then(function (task) {
                task.destroyRecord();
            });
        },

        updateTask() {
            let store = this.get('store');
            let name = this.get('task.name');
            let time = this.get('task.time');
            let id = this.get('task.id');
            store.findRecord('task', id).then(function(task) {
                task.set('name', name);
                task.set('time', time);
                task.save();
            });
            this.set('isShowingModal', false);
        },

        showModal() {
            this.set('isShowingModal', true);
        },
        cancel() {
            this.set('isShowingModal', false);
        }
    }
});
