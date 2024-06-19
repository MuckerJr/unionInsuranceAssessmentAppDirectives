import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AppComponent } from '../app.component';
import { ChangeColourOnHoverDirective } from './change-colour-on-hover.directive';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  standalone: true,
  template: '<h2 appChangeColourOnHover [defaultColour]="black">Test</h2>',
  imports:[ChangeColourOnHoverDirective]
})
class TestComponent {}

describe('ChangeColourOnHoverDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let el: DebugElement;

  beforeEach(waitForAsync(() => {
    
    TestBed.configureTestingModule({
      imports:[TestComponent],
      //declarations: [AppComponent]
    })

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
  }));
  
  it('should create an instance', () => {
    let mockElementRef = {
      nativeElement: document.createElement('h2')
    };
    let mockRenderer = jasmine.createSpyObj('Renderer2', ['setStyle', 'removeStyle']);
    const directive = new ChangeColourOnHoverDirective(mockElementRef, mockRenderer);
    expect(directive).toBeTruthy();
  });

  it('should change colour on hover', () => {
    let h2s = el.queryAll(By.css('h2'));
    let h20 = h2s[0];
    let h21 = h2s[1];

    h20.triggerEventHandler('mouseenter', {});
    fixture.detectChanges();
    expect(h20.nativeElement.style.color).toBe('red');
  })
});
