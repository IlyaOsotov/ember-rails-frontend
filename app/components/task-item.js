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
            let id = this.get('task.id');
            store.findRecord('task', id).then(function(task) {
                task.set('name', name);
                task.save();
            });
            this.set('isShowingModal', false);
        },
        selectTime(time) {
            let store = this.get('store');
            let date = new Date(time);
            let id = this.get('task.id');
            let isChecked = this.get('task.isChecked');
            if(isChecked) {
                store.findAll('task').then(function(scope) {
                    scope.filterBy('isChecked',true).setEach('time', date);
                    scope.save();
                })
            } else {
                store.findRecord('task', id).then(function(task) {
                    task.set('time', date);
                    task.save();
                });
            }
        },
        closeTimePicker() {
            this.set('isShowingTimePicker', false);
        },
        showTimePicker() {
            this.set('isShowingTimePicker', true);
        },
        showModal() {
            this.set('isShowingModal', true);
        },
        cancel() {
            this.set('isShowingModal', false);
        }
    }
});
