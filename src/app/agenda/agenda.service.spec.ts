/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { AgendaService } from './agenda.service';

describe('Agenda Service', () => {
  beforeEachProviders(() => [AgendaService]);

  it('should ...',
      inject([AgendaService], (service: AgendaService) => {
    expect(service).toBeTruthy();
  }));
});
