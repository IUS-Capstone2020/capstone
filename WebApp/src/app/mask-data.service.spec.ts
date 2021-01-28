import { TestBed } from '@angular/core/testing';

import { MaskDataService } from './mask-data.service';

describe('MaskDataService', () => {
  let service: MaskDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaskDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
