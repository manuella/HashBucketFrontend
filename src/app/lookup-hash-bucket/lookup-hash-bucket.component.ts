import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {HashBucketService } from '../services/hash-bucket-service.service';
import {EncryptedKeyValue} from '../models/EncryptedKeyValue';
import { AES, SHA1  } from "crypto-js";

@Component({
  selector: 'app-lookup-hash-bucket',
  templateUrl: './lookup-hash-bucket.component.html',
  styleUrls: ['./lookup-hash-bucket.component.css']
})
export class LookupHashBucketComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: HashBucketService) { }

  password: string;
  display: string;
  ngOnInit() {
    this.password = this.route.snapshot.paramMap.get("password");
    var generatedHashKey = SHA1(this.password).toString();

    this.service.getValue(generatedHashKey).subscribe(
      (data: EncryptedKeyValue) => this.Decrypt(data.encryptedValue.toString(), this.password));
    }

    private Decrypt(eVal: String, password: String )
    {
      console.log("Encrypted block: " + eVal);
      console.log("Password: " + this.password );

      this.display = AES.decrypt(eVal, password).toString(); 
      console.log(AES.decrypt(eVal, password).toString());
      console.log("MESSAGE : " + this.display);
    }
  }