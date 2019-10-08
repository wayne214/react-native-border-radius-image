这是一个可以设置圆角的Image组件，兼容Android和IOS,解决Android端设置圆角出现的问题
> overlayColor: string (Android)

  当图片有圆角的时候，指定一个颜色用于填充圆角处的空白。虽然一般情况下圆角处是透明的，但在某些情况下，Android 并不支持圆角透明，比如：

  某些 resize 模式比如'contain'
  GIF 动画
  常见的用法就是在不能圆角透明时，设置overlayColor和背景色一致。

### 安装
```
yarn add react-native-border-radius-image
```
### 使用方法
```
// 导入包
import RoundImage from 'react-native-border-radius-image'

// 页面中引用, render 方法中
// Icon 为设置的默认logo


render() {
    const imgUrl = itemData.logo_url ? {uri: itemData.logo_url} : Icon;
    return(
        <BorderRadiusImage
            source={imgUrl}
            size={40}
            style={{alignSelf: 'flex-start',
            marginTop: 2,}}
        />
    )
}
```

### 属性
- size 设置image的width,height
- style 自定义image的样式
- source image的数据源，图片地址
- rounded 是否设置为圆形图片
- resizeMode 设置图片的缩放模式