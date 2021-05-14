import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParqueaderoComponentComponent } from './parqueadero-component.component';

describe('ParqueaderoComponentComponent', () => {
  let component: ParqueaderoComponentComponent;
  let fixture: ComponentFixture<ParqueaderoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParqueaderoComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParqueaderoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
