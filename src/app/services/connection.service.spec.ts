import { TestBed } from '@angular/core/testing';

import { ConnectionService } from './connection.service';

describe('ConnectionService', () => {
  let service: ConnectionService<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
