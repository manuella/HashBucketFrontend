import { Injectable } from '@angular/core';
import { AES, SHA1, enc } from "crypto-js";
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
      var generatedEncryptedValue = AES.encrypt(content, password);
      var ge = generatedEncryptedValue.toString();
      var generatedHashKey = SHA1(password).toString();

      console.log("Hash: " +
      generatedHashKey + "\nEncrypted Block: " + ge);

      console.log("password: " + password + " content: " + content);
      console.log("Decrypt local: " + AES.decrypt(ge, password).toString(enc.Utf8)); 

      var model =
        {
          "hashKey":generatedHashKey,
          "encryptedValue": ge
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

  public getValue(hashKey:string) : Observable<EncryptedKeyValue>
  {
    let getURL = this.LocalURL + "/" + hashKey;
    console.log("URL: " + getURL);
    return this.httpService.get<EncryptedKeyValue>(getURL);
  }
}
