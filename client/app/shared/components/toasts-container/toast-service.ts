import { Injectable, TemplateRef } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ToastService {
  toasts: any[] = [];

  show(textOrTpl: string | TemplateRef<any>, options: any = {}) {
    this.toasts.push({ textOrTpl, ...options });
  }

  showSucces(textOrTpl: string | TemplateRef<any>, options: any = { classname: 'bg-success text-light', delay: 10000 }) {
    let paramOptions: any;
    paramOptions = { ...paramOptions, ...options };
    this.toasts.push({ textOrTpl, ...paramOptions });
  }

  showError(textOrTpl: string | TemplateRef<any>, options: any = { classname: 'bg-danger text-light', delay: 15000 }) {
    // this.toasts.push({ textOrTpl, ...options });
    let paramOptions: any;
    paramOptions = { ...paramOptions, ...options };
    this.toasts.push({ textOrTpl, ...paramOptions });
  }

  remove(toast: any) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }
}