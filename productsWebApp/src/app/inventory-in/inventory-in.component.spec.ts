import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryInComponent } from './inventory-in.component';

describe('InventoryInComponent', () => {
  let component: InventoryInComponent;
  let fixture: ComponentFixture<InventoryInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
