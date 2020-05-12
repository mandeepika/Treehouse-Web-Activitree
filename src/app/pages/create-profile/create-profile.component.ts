import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, ElementRef, ViewChild, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.scss']
})
export class CreateProfileComponent implements OnInit {

  grades = [9,10,11,12];
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  
  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  subjectCtrl = new FormControl();
  filteredSubjects: Observable<string[]>;
  subjects: string[] = [];
  allSubjects: string[] = ['Calculus', 'Pre-Algebra', 'Geometry', 'Biology', 'Chemistry','Physics'];

  @ViewChild('subjectInput') subjectInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor(private _formBuilder: FormBuilder) {
    this.filteredSubjects = this.subjectCtrl.valueChanges.pipe(
        startWith(null),
        map((subject: string | null) => subject ? this._filter(subject) : this.allSubjects.slice()));
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.subjects.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.subjectCtrl.setValue(null);
  }

  remove(subject: string): void {
    const index = this.subjects.indexOf(subject);

    if (index >= 0) {
      this.subjects.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.subjects.push(event.option.viewValue);
    this.subjectInput.nativeElement.value = '';
    this.subjectCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allSubjects.filter(subject => subject.toLowerCase().indexOf(filterValue) === 0);
  }
 
}
