import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HierarchyComponent } from './hierarchy.component';

describe('HierarchyComponent', () => {
  let component: HierarchyComponent;
  let fixture: ComponentFixture<HierarchyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HierarchyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HierarchyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
