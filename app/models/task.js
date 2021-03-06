import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    time: DS.attr('date', {
        defaultValue() { return new Date(); }
      }),
    isChecked: DS.attr('boolean', {
        defaultValue() { return false; }
    })
});
