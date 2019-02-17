# Jest-learning-react-test

**1.文档说明**<br>
- [博客地址](https://www.jianshu.com/p/bf8070c33824)

**2.配置**
- 克隆代码
- `npm i` 安装依赖
- 安装测试所需要的包` npm i react-test-renderer enzyme enzyme-adapter-react-16 jest -D`


**3.根目录下新建`.babelrc`文件，文件内容为：**
```js
{
    "presets":[
        "es2015",
        "react"
    ]
}
```
- 此内容本为`webpack.config.js`中 `module` 的 `rules` 字段 `babel` 的编译配置。因为Jest测试需要调用`.babelrc`文件，因此需要配置

**4.在要测试的组件目录下新建`__test__`文件夹，并在文件夹里新建`**.test.jsx`（零配置的前提下），并添加测试**
- 例如，为了测试`item`组件，新建`src/item/__test__/item.test.jsx`，文件内容为：
```js
import React from 'react'
import Enzyme,{shallow} from 'enzyme'     //本例子只以shallow(浅渲染，只渲染父组件)为例
import Item from '../../item'     //导入需测试的组件

import Adapter from 'enzyme-adapter-react-16'; //适应React-16
Enzyme.configure({ adapter: new Adapter() })    //适应React-16，初始化

test('Item',()=>{
    const item = shallow(<Item item="test"/>); //传入数据'item'

    expect(item.text()).toBe('test')
    expect(item.hasClass('item')).toBe(true)
    expect(item.hasClass('item-selected')).toBe(false)
})

test('Item Clicked',()=>{
    const item = shallow(<Item item="test" />)

    item.simulate('click')
    expect(item.hasClass('item')).toBe(true)
    expect(item.hasClass('item-selected')).toBe(true)
})
```
**测试（必定出错，请往下看）：**
![出错示例](http://upload-images.jianshu.io/upload_images/6991256-adb74a01743fdc81.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**5.以上出错是因为没屏蔽CSS，因为在`index.jsx`中`import 
 './index.css'`，CSS并不是以模块的形式引入的。所以我们需要自定义Mocks屏蔽CSS，具体如下：**
- 在根目录下新建`__mocks__`并新建`styleMock.js`，内容为：
```js
module.exports = {}
```
- 在`package.json`中添加字段
```js
"scripts":{...
},
"jest": {
    "moduleNameMapper": {
      "\\.css$": "<rootDir>/__mocks__/styleMock.js"
    }
  },
```
**测试：**<br>
![成功示例](http://upload-images.jianshu.io/upload_images/6991256-5f81e55efd3baad4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
