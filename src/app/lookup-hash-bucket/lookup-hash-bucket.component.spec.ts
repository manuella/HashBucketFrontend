import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LookupHashBucketComponent } from './lookup-hash-bucket.component';

describe('LookupHashBucketComponent', () => {
  let component: LookupHashBucketComponent;
  let fixture: ComponentFixture<LookupHashBucketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LookupHashBucketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LookupHashBucketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
