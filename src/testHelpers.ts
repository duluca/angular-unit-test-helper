import { ComponentFixture } from '@angular/core/testing'
import { By } from '@angular/platform-browser'

export function getNativeElementByTestId<TComponent>(
  fixture: ComponentFixture<TComponent>,
  testId: string = ''
) {
  return fixture.debugElement.query(By.css(`[data-testid="${testId}"]`)).nativeElement
}
