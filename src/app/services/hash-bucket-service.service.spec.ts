import { TestBed } from '@angular/core/testing';
import { HashBucketService } from './hash-bucket-service.service';

describe('HashBucketServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HashBucketService = TestBed.get(HashBucketService);
    expect(service).toBeTruthy();
  });
});
