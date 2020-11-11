import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaskDetailsComponent } from './mask-details.component';

describe('MaskDetailsComponent', () => {
  let component: MaskDetailsComponent;
  let fixture: ComponentFixture<MaskDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaskDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaskDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
