import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FattureClientComponent } from './fatture-client.component';

describe('FattureClientComponent', () => {
  let component: FattureClientComponent;
  let fixture: ComponentFixture<FattureClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FattureClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FattureClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
