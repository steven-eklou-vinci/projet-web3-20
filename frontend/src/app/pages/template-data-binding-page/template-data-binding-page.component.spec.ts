import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDataBindingPageComponent } from './template-data-binding-page.component';

describe('TemplateDataBindingPageComponent', () => {
  let component: TemplateDataBindingPageComponent;
  let fixture: ComponentFixture<TemplateDataBindingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateDataBindingPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateDataBindingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
