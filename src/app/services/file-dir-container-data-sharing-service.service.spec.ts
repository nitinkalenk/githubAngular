import { TestBed, inject } from '@angular/core/testing';

import { FileDirContainerDataSharingService } from './file-dir-container-data-sharing-service.service';

describe('FileDirContainerDataSharingServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FileDirContainerDataSharingService]
    });
  });

  it('should be created', inject([FileDirContainerDataSharingService], (service: FileDirContainerDataSharingService) => {
    expect(service).toBeTruthy();
  }));
});
