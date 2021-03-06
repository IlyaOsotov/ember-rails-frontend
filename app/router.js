import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.resource('tasks');
  this.route('tasks', function() {
    this.route('show', { path: '/:task_id'});
  });
});

export default Router;
