import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
    name: DS.attr('string'),
    time: DS.attr('date', {
        defaultValue() { return new Date(); }
      }),
    formattedTime: computed('time', function() {
        let hours = this.get('time').getHours();
        if (hours.toString().length == 1) { 
            hours = "0" + hours;
        }
        let minutes = this.get('time').getMinutes();
        if (minutes.toString().length == 1) { 
            minutes = "0" + minutes;
        }
        return `${hours}:${minutes}`;
    })
});
