import { Directive, computed, input } from '@angular/core';
import { hlm } from '@spartan-ng/ui-core';
import type { ClassValue } from 'clsx';

@Directive({
  selector: '[hlmCmdEmpty]',
  standalone: true,
  host: {
    '[class]': '_computedClass()',
  },
})
export class HlmCommandEmptyDirective {
  public readonly userClass = input<ClassValue>('', { alias: 'class' });
  protected _computedClass = computed(() =>
    hlm('py-6 text-center text-sm', this.userClass()),
  );
}
