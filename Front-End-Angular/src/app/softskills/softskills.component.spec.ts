import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftskillsComponent } from './softskills.component';

describe('SoftskillsComponent', () => {
  let component: SoftskillsComponent;
  let fixture: ComponentFixture<SoftskillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftskillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftskillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
