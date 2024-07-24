import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharkeyComponent } from './sharkey.component';

describe('SharkeyComponent', () => {
  let component: SharkeyComponent;
  let fixture: ComponentFixture<SharkeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharkeyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SharkeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
