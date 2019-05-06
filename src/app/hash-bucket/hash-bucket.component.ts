import { Component, OnInit } from '@angular/core';
import { FormsModule,FormControl, FormGroup } from '@angular/forms';
import { EncryptedKeyValue } from '../models/EncryptedKeyValue';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { HashBucketService } from '../services/hash-bucket-service.service';

@Component({
  selector: 'app-hash-bucket',
  templateUrl: './hash-bucket.component.html',
  styleUrls: ['./hash-bucket.component.css']
})
export class HashBucketComponent implements OnInit {

  hashForm: FormGroup;

  constructor(
              private route: ActivatedRoute,
              private router: Router,
              private service: HashBucketService) { }

  ngOnInit() {
    this.hashForm = new FormGroup({
      password: new FormControl(''),
      message: new FormControl('')
    });
  }

  submit() {
    if (this.hashForm.valid) {
      console.log("submit: " + this.hashForm.value.password + " , " +
                  this.hashForm.value.message);

      this.service.setHash(this.hashForm.value.password, this.hashForm.value.message)
      }
    }
}
