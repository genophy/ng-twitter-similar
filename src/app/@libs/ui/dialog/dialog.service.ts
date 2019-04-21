import {ApplicationRef, ComponentFactoryResolver, ComponentRef, EmbeddedViewRef, Injectable, Injector, Type} from '@angular/core';
import {DialogComponent} from './dialog.component';
import {DialogRef} from './dialog.ref';
import {DialogInjector} from './dialog.injector';
import {DialogParams} from './dialog.params';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  dialogComponentRef: ComponentRef<DialogComponent>;

  /**
   * 构造方法
   * @param componentFactoryResolver
   * @param appRef
   * @param injector
   * @param router
   */
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector,
    private router: Router) {

    // 监听路由变动
    this.router.events.subscribe(event => {
      if (this.dialogComponentRef) {
        this.removeDialogComponentFromBody();
      }

    });

  }

  /**
   * 打开对话框
   * @param component
   * @param params
   */
  public open(component: Type<any>, params: any) {

    // 追加对话框到html-body，并返回引用
    const dialogRef = this.appendDialogComponentToBody(params);
    // 传入实例参数
    this.dialogComponentRef.instance.childComponent = component;
    // 返回对话框引用
    return dialogRef;

  }

  /**
   * 追加对话框到html-body，并返回引用
   * @param params
   */
  appendDialogComponentToBody(params?: {}) {

    // 实例化对话框引用
    const dialogRef = new DialogRef();
    // 实例化map
    const map = new WeakMap();
    map.set(DialogParams, params);
    map.set(DialogRef, dialogRef);
    // 当对话框关闭后，取消订阅
    const sub = dialogRef.afterClosed.subscribe(() => {
      this.removeDialogComponentFromBody();
      sub.unsubscribe();
    });

    // 组件工厂
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(DialogComponent);
    // 组件引用
    const componentRef = componentFactory.create(new DialogInjector(this.injector, map));
    // app引用附加上组件视图引用
    this.appRef.attachView(componentRef.hostView);
    // 获取组件的dom元素
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    // body追加dom元素
    document.body.appendChild(domElem);

    this.dialogComponentRef = componentRef;

    this.dialogComponentRef.instance.onClose.subscribe(() => {
      this.removeDialogComponentFromBody();
    });

    return dialogRef;
  }

  // 从dom中移除元素
  private removeDialogComponentFromBody() {
    this.appRef.detachView(this.dialogComponentRef.hostView);
    this.dialogComponentRef.destroy();
  }
}
