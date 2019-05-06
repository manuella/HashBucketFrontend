import { Injectable } from '@angular/core';
import { AES, SHA1 } from "crypto-js";
import { EncryptedKeyValue } from "../models/EncryptedKeyValue";
import { HttpClient, HttpHeaders, HttpParams } from'@angular/common/http';
import { Observable } from 'rxjs';
import {  tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json;charset=UTF-8',
  })
}

@Injectable({
  providedIn: 'root'
})
export class HashBucketService {

  constructor(private httpService : HttpClient) { }
  LocalURL =  "https://localhost:5001/api/HashBucket";
  EncryptedReturn : string;

  public setHash(password: string ,content: string)
  {
      var generatedEncryptedValue = AES.encrypt(content, password).toString();
      var generatedHashKey = SHA1(password).toString();

      console.log("Hash: " +
      generatedHashKey + "\nEncrypted Block: " + generatedEncryptedValue);
      
      var model =
        {
          "hashKey":generatedHashKey,
          "encryptedValue": generatedEncryptedValue
       };

      this.httpService.post<EncryptedKeyValue>(this.LocalURL, model).
      subscribe(
          data  => {
            console.log("POST Request is successful ", data,httpOptions);
          },
          error  => {
            console.log("Error", error);
          }
        );
  }

  public getValue(password:string) : Observable<EncryptedKeyValue>
  {
    console.log("Get request : " + password);
    var generatedHashKey = SHA1(password);
    let getURL = this.LocalURL + "/" + generatedHashKey;
    console.log("URL: " + getURL);
    return this.httpService.get<EncryptedKeyValue>(getURL);

    console.log("response: " + this.EncryptedReturn.toString());
  }
}
