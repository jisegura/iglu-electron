import { CurrencyNumberMaskPipe } from './currency-number-mask.pipe';

describe('CurrencyNumberMaskPipe', () => {
  it('create an instance', () => {
    const pipe = new CurrencyNumberMaskPipe();
    expect(pipe).toBeTruthy();
  });
});
