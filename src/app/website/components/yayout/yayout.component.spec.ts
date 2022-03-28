import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YayoutComponent } from './yayout.component';

describe('YayoutComponent', () => {
  let component: YayoutComponent;
  let fixture: ComponentFixture<YayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
