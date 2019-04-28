import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HashBucketComponent } from './hash-bucket.component';

describe('HashBucketComponent', () => {
  let component: HashBucketComponent;
  let fixture: ComponentFixture<HashBucketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HashBucketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HashBucketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
