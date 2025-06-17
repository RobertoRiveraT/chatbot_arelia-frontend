import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenguinTwitchBattleComponent } from './penguin-twitch-battle.component';

describe('PenguinTwitchBattleComponent', () => {
  let component: PenguinTwitchBattleComponent;
  let fixture: ComponentFixture<PenguinTwitchBattleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PenguinTwitchBattleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PenguinTwitchBattleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
