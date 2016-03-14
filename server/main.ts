/**
 * Created by dennisri on 11-Mar-16.
 */
//import 'collections/parties';
import {loadParties} from './load-parties';

Meteor.startup(loadParties);