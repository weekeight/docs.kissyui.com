/**
@module overlay
*/

/**
悬浮层，如果配置里面不修改"prefixCls"默认值"ks-"的话，使用前要加上如下样式：
```
<style>
    .ks-overlay {
        position:absolute;
        left:-9999px;
        top:-9999px;
    }
    .ks-overlay-hidden {
        visibility: hidden;
    }

    .ks-overlay-mask-hidden {
        display: none;
    }

    .ks-overlay-shown {
        visibility: visible;
    }

    .ks-overlay-mask-shown{
        display: block;
    }
</style>
```
@class Overlay
@constructor
@extends Component.Container
@uses Shim
@uses Align
@param config {Object}
*/

/**
可选, 显示或隐藏时的特效支持, 对象包含以下配置:
- effect.target {String|KISSY.Node} 可选,动画的参考元素
- effect.effect {String} 可取值 ‘fade’(渐隐显示), ‘slide’(滑动显示)
- effect.easing {String}  同 [Anim](/5.0/api/classes/Anim.html) 的 easing 参数配置
- effect.duration {Number} 可选, 动画持续时间, 以秒为单位.例如：
```
{
    target:'',        // {String|KISSY.Node} - 可选，动画的参考元素
    effect:'none',    // {String} - 可选, 默认为'none', 'none'(无特效), 'fade'(渐隐显示), 'slide'(滑动显示).
    easing:'',        // {String} - 可选, 同 KISSY.Anim 的 easing 参数配置.
    duration:3        // {Number} - 可选, 动画持续时间, 以秒为单位.
}
```
@attribute effect
*/

/**
对话框右上角是否包括关闭按钮
@attribute closable {Boolean}
*/

/**
点击关闭按钮的动作。默认 “hide” 隐藏，也可设置 “destroy” 销毁该组件
@attribute closeAction {String}
*/

/**
mask的相关配置：
- 当为Boolean时，表示组件显示时是否使用遮罩层盖住页面其他元素
- 当为Object时，有如下配置：
    - mask.closeOnClick {Boolean} 可选. 点击遮罩层是否关闭 overlay. (具体隐藏或销毁依赖 closeAction)
    - mask.effect {String} 可选. 遮罩层显示隐藏效果. (取值 ‘fade’,’slide’)
    - mask.duration {Number} 可选. 效果持续时间. 单位秒
@attribute mask {Boolean|Object} 
*/

/**
可选, 动画持续时间, 以秒为单位.
@attribute duration {Number} 
@optional
*/

/**
设置后显示或隐藏关闭按钮
@attribute closable
@type {Boolean}
*/

/**
遮罩层节点
@attribute maskNode
@type {KISSY.Node}
*/

/**
生成一个加载盖住当前组件内容
@method loading
*/

/**
隐藏生成的加载层
@method unloading
*/






/**
对话框
@class Dialog
@constructor
@namespace Overlay
@extends Overlay
@param config {Object}
@example

对话框的 DOM 结构为：
```
<div class='dialog'> <!-- 对话框根节点 -->
    <div class='content'> <!-- 对话框内容节点 -->
        <div class='header'> <!-- 对话框标题节点 -->
        </div>

        <div class='body'> <!-- 对话框体节点 -->
        </div>

        <div class='footer'> <!-- 对话框底部节点 -->
        </div>
    </div>
</div>
```
*/

/**
组件的标题 html
@attribute headerContent {String}
*/

/**
默认 true. escape 键是否触发 close 动作
@attribute escapeToClose {Boolean}
@default true
*/

/**
组件的体 html
@attribute bodyContent {String} 
*/

/**
组件的底部 html
@attribute footerContent {String} 
*/

/**
组件的标题内联样式
@attribute headerStyle {Object} 
*/

/**
组件体的内联样式.
@attribute bodyStyle {Object}
*/

/**
组件的底部内联样式
@attribute footerStyle {Object}
*/

/**
只读, 组件的头部节点
@attribute header {KISSY.Node}
@readonly
*/

/**
只读, 组件的体部节点
@attribute body {KISSY.Node}
@readonly
*/

/**
只读, 组件的底部节点
@attribute footer {KISSY.Node}
@readonly
*/

/**
可读写. 组件的标题 html.
@attribute headerContent {String}
*/

/**
可读写. 组件的体html.
@attribute bodyContent {String}
*/

/**
可读写. 组件的底部 html.
@attribute footerContent {String}
*/




/**
弹出框
@class Popup
@constructor
@namespace Overlay
@extends Overlay
@param config {Object} 
*/

/**
触点集合
@attribute trigger {String|HTMLElement[]|KISSY.NodeList} 
*/

/**
可选, 默认为 ‘click’, 触发类型, 可选 ‘click’, ‘mouse’.
@attribute triggerType {String}
@default "click"
*/

/**
单位秒. 可选, triggerType 为 mouse 时, Popup 显示的延迟时间, 默认为 0.1.
@attribute mouseDelay {Number} 
@default 0.1
*/

/**
可选, triggerType 为 click 时, Popup 是否有toggle功能，默认为false，不开启
@attribute toggle {Boolean} 
@default false
*/

/**
当前的 trigger 节点
@attribute currentTrigger {KISSY.Node}
*/

/**
当 currentTrigger 改变后触发
@event afterCurrentTriggerChange
@param ev.newVal {KISSY.Node} 新的 trigger 元素
*/