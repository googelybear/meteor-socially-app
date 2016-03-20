/**
 * Created by dennisri on 16-Mar-16.
 */
import {Component, View} from 'angular2/core';
import {FormBuilder, Control, ControlGroup, Validators} from 'angular2/common';
import {Parties} from 'collections/parties';

@Component({
    selector: 'parties-form'
})
@View({
    templateUrl: '/client/parties-form/parties-form.html'
})
export class PartiesForm {
    partiesForm: ControlGroup;

    constructor() {
        var fb = new FormBuilder();
        this.partiesForm = fb.group({
            name: new Control('', Validators.required),
            description: [''],
            location: ['', Validators.required]
        });
    }

    addParty(party)  {
        if (this.partiesForm.valid) {
            Parties.insert({
               name: party.name,
                description: party.description,
                location: party.location
            });
        }

        (<Control>this.partiesForm.controls['name']).updateValue('', true);
        (<Control>this.partiesForm.controls['description']).updateValue('', true);
        (<Control>this.partiesForm.controls['location']).updateValue('', true);
    }
}