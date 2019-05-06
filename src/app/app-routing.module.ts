import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HashBucketComponent } from './hash-bucket/hash-bucket.component';
import { LookupHashBucketComponent } from './lookup-hash-bucket/lookup-hash-bucket.component';

const routes: Routes = [
  { path: 'hash-bucket', component: HashBucketComponent },
  { path: 'hash-bucket/:password', component: LookupHashBucketComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
