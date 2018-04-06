import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VkeyComponent } from './vkey.component';

describe('VkeyComponent', () => {
  let component: VkeyComponent;
  let fixture: ComponentFixture<VkeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VkeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VkeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
