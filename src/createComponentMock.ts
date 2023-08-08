export function createComponentMock(
  className: string,
  selectorName?: string,
  template = ''
) {
  className.padStart(0)
  selectorName?.padStart(0)
  template.padStart(0)
  console.error(
    'createComponentMock has been removed. Use ng-mocks instead. See README.md for more information.'
  )
  throw new Error('createComponentMock has been removed.')
}
