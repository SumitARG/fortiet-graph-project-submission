import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextMenuComponent } from './context-menu.component';

describe('ContextMenuComponent', () => {
  let component: ContextMenuComponent;
  let fixture: ComponentFixture<ContextMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContextMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContextMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit event on delete or detach button click',() => {
    let deleteAction = fixture.debugElement.nativeElement.querySelector('.delete');
    deleteAction.click();
    fixture.whenStable().then(() => {
      expect(component.onClickAction).toHaveBeenCalled();
    });
  })

  it('should emit event on close button click',() => {
    let closeAction = fixture.debugElement.nativeElement.querySelector('.close');
    closeAction.click();
    fixture.whenStable().then(() => {
      expect(component.onCloseAction).toHaveBeenCalled();
    });
  })
});
