import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
    serialize() {
        let model = this._super(...arguments);
    
        delete model.data.attributes['is-checked'];
    
        return model;
      }    
});
