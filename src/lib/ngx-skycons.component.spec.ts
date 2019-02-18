import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkyconsComponent } from './ngx-skycons.component';

describe('SkyconsComponent', () => {
  let component: SkyconsComponent;
  let fixture: ComponentFixture<SkyconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkyconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkyconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
