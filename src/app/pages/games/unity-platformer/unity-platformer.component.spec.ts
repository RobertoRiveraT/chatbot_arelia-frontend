import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnityPlatformerComponent } from './unity-platformer.component';

describe('UnityPlatformerComponent', () => {
  let component: UnityPlatformerComponent;
  let fixture: ComponentFixture<UnityPlatformerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnityPlatformerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnityPlatformerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
