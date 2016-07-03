/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { KyotoSitesService } from './kyoto-sites.service';

describe('KyotoSites Service', () => {
  beforeEachProviders(() => [KyotoSitesService]);

  it('should ...',
      inject([KyotoSitesService], (service: KyotoSitesService) => {
    expect(service).toBeTruthy();
  }));
});
