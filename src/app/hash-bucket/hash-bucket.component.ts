import { Component, OnInit } from '@angular/core';
import { FormsModule,FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from'@angular/common/http';


@Component({
  selector: 'app-hash-bucket',
  templateUrl: './hash-bucket.component.html',
  styleUrls: ['./hash-bucket.component.css']
})
export class HashBucketComponent implements OnInit {

  LocalURL =  "https://localhost:5001/api/HashBucket";
  hashForm: FormGroup;

  constructor(private httpService : HttpClient) { }

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
      }
    }


}
