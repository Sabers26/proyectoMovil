import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabsGeneralPage } from './tabs-general.page';

describe('TabsGeneralPage', () => {
  let component: TabsGeneralPage;
  let fixture: ComponentFixture<TabsGeneralPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TabsGeneralPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
