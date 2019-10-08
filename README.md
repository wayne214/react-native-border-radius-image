这是一个可以设置圆角的Image组件，兼容Android和IOS
### 安装
```
yarn add react-native-border-radius-image
```
### 使用方法
```
// 导入包
import RoundImage from 'react-native-border-radius-image'

// 页面中引用
// Icon 为设置的默认logo
const imgUrl = itemData.logo_url ? {uri: itemData.logo_url} : Icon;
<BorderRadiusImage source={imgUrl} size={40} style={{alignSelf: 'flex-start',
            marginTop: 2,}}/>
```

### 属性
- size 设置image的width,height
- style 自定义image的样式
- source image的数据源，图片地址
- rounded 是否设置为圆形图片
- resizeMode 设置图片的缩放模式