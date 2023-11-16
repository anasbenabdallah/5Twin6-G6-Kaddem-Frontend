import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllUniversiteComponent } from './all-universite.component';

describe('AllUniversiteComponent', () => {
  let component: AllUniversiteComponent;
  let fixture: ComponentFixture<AllUniversiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllUniversiteComponent]
    });
    fixture = TestBed.createComponent(AllUniversiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
