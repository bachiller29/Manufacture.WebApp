import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryOutComponent } from './inventory-out.component';

describe('InventoryOutComponent', () => {
  let component: InventoryOutComponent;
  let fixture: ComponentFixture<InventoryOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
