import {Component, View, NgZone} from 'angular2/core';

import {bootstrap} from 'angular2-meteor';
//import {bootstrap} from 'angular2/platform/browser';

import {Parties} from 'collections/parties';

@Component({
    selector: 'app'
})
@View({
    templateUrl: 'client/app.html'
})
class Socially {

    parties: Mongo.Cursor<Object>;

    //constructor (zone: NgZone) {
    //    Tracker.autorun(() => zone.run(() => {
    //        this.parties = Parties.find().fetch();
    //    }));
    //}
    constructor () {
        this.parties = Parties.find();
    }
}
 
bootstrap(Socially);