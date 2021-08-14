import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicadorQuestaoComponent } from './indicador-questao.component';

describe('IndicadorQuestaoComponent', () => {
  let component: IndicadorQuestaoComponent;
  let fixture: ComponentFixture<IndicadorQuestaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndicadorQuestaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicadorQuestaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
