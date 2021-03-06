import Component from '@ember/component';
import { sort } from '@ember/object/computed';

export default Component.extend({
    store: Ember.inject.service(),
    sortedTasks: sort('taskList', 'sortDefinition'),
    sortDefinition: ['time'],

    actions: {
        newTask() {
            this.set('isShowingModal', true);
        },
        createTask() {
            let store = this.get('store');
            let name = this.get('taskName');
            let time = this.get('taskTime');
            let date = new Date(time.year, time.month, time.date, time.hour, time.minute);
            let task = store.createRecord('task', { name: name, time: date });
            task.save();
            this.set('isShowingModal', false);
        },
        cancel() {
            this.set('isShowingModal', false);
        }
    }
});
