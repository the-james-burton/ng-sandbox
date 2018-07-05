
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { SandboxNavigationComponent } from './sandbox-navigation.component';

describe('SandboxNavigationComponent', () => {
  let component: SandboxNavigationComponent;
  let fixture: ComponentFixture<SandboxNavigationComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SandboxNavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SandboxNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
