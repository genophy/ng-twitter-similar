import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  OnDestroy,
  Type,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-dialog',
  template: `
    <div class="root">
      <div class="container">
        <ng-template #container></ng-template>
      </div>
      <div class="overlay">
      </div>
    </div>
  `,
  styles: [
      `
      .container {
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 1002;
      }

      .overlay {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: #000000;
        opacity: 0.4;
        z-index: 1001;
      }
    `,
  ],
})
export class DialogComponent implements AfterViewInit, OnDestroy {

  // 组件引用
  componentRef: ComponentRef<any>;

  @ViewChild('container', {read: ViewContainerRef})
  containerTemp: ViewContainerRef;

  // 关闭方法的订阅广播
  private readonly _onClose = new Subject<any>();
  public onClose = this._onClose.asObservable();

  // 子组件 : 实例传入
  childComponent: Type<any>;

  /**
   * 构造方法
   * @param componentFactoryResolver 组件解析工厂
   * @param changeDetectorRef 变化监听器
   */
  constructor(private componentFactoryResolver: ComponentFactoryResolver, private changeDetectorRef: ChangeDetectorRef ) {
    setTimeout(() => {
    }, 0);

  }

  /**
   * 视图初始化完成
   */
  ngAfterViewInit() {
    // 加载子模块
    this.loadChildComponent(this.childComponent);
    // 强制检查组件变化
    this.changeDetectorRef.detectChanges();

  }

  /**
   * 加载子组件
   * @param component 需要加载的组件
   */
  loadChildComponent(component: Type<any>) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    // 清空容器
    this.containerTemp.clear();
    // 在容器内，创建组件工厂
    this.componentRef = this.containerTemp.createComponent(componentFactory);

  }

  /**
   * 当前组件销毁的方案
   */
  ngOnDestroy() {
    console.log('-------------ngOnDestroy');
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }

}
