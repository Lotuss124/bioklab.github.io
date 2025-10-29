# 实验室展示网站 - Lab Introduction

这是一个基于 Vue 3 + TypeScript + Tailwind CSS 构建的医学实验室展示网站，用于展示实验室的研究方向、团队成员、发表论文、软件工具等信息。

## 目录

- [技术栈](#技术栈)
- [项目结构](#项目结构)
- [如何修改内容](#如何修改内容)
- [部署说明](#部署说明)

## 技术栈

- **框架**: Vue 3 (Composition API + TypeScript)
- **构建工具**: Vite
- **路由**: Vue Router 4
- **样式**: Tailwind CSS 4
- **动画**: GSAP
- **图标**: Bootstrap Icons
- **开发语言**: TypeScript

## 项目结构

```
Lab-introduction/
├── src/
│   ├── views/              # 页面文件              （主要修改这里的内容）
│   │   ├── Home.vue        # 首页 - 实验室简介和三大研究方向
│   │   ├── People.vue      # 团队成员页面
│   │   ├── Publications.vue # 论文页面
│   │   ├── Software.vue    # 软件页面
│   │   ├── Photos.vue      # 图片展示页面
│   │   ├── News.vue        # 新闻动态页面
│   │   ├── Join.vue        # 加入我们页面
│   │   └── Contact.vue     # 联系方式页面
│   ├── components/         # 公共组件
│   │   ├── Header.vue      # 导航栏                （这里要改）
│   │   ├── Footer.vue      # 页脚                  （这里要改）
│   │   ├── Carousel.vue    # 轮播图组件
│   │   ├── PersonCard.vue  # 人物卡片
│   │   ├── PersonModal.vue # 人物详情弹窗
│   │   ├── PublicationCard.vue # 论文卡片
│   │   └── SoftwareCard.vue    # 软件卡片
│   ├── composables/
│   │   └── useScrollAnimation.ts # 滚动动画
│   ├── router/             # 路由配置
│   │   └── index.ts
│   ├── assets/             # 静态资源
│   │   ├── images/         # 图片资源
│   │   └── main.css        # 全局样式
│   ├── App.vue             # 根组件
│   └── main.ts             # 入口文件
├── public/                 # 公共静态资源
├── dist/                   # 构建输出目录
├── package.json            # 项目配置
├── vite.config.ts          # Vite配置
└── tsconfig.json           # TypeScript配置
```

## 如何修改内容

### 1. 首页 (Home.vue)

**文件位置**: `src/views/Home.vue`

#### 修改轮播图

```typescript
const carouselImages = [
  {
    src: '图片URL',
    alt: '图片描述',
  },
  // 添加更多图片...
]
```

#### 修改欢迎文字

直接在模板中修改 `<h1>` 和 `<p>` 标签的内容。

#### 修改三个研究方向的图标

三个图标使用的是 Font Awesome SVG，可以替换为其他图标。注释标记了：

- `<!-- DNA图标 -->` - 第一个图标
- `<!-- 试管icon -->` - 第二个图标
- `<!-- 滴管icon -->` - 第三个图标

### 2. 团队成员页面 (People.vue)

**文件位置**: `src/views/People.vue`

#### 添加/修改团队成员

```typescript
const teams: TeamSection[] = [
  {
    title: '团队名称', // 如：Principal Investigator, Postdocs 等
    members: [
      {
        name: '成员姓名',
        role: '职位/角色',
        image: '头像图片URL',
        bio: '个人简介（支持多行文本）',
        links: [
          // 可选：社交链接
          {
            type: 'cv', // cv(简历), scholar(学术认证), email(邮箱), conference(会议)
            url: '链接地址', // 可选，为空时显示为不可点击的文本
            label: '显示文本',
          },
        ],
      },
    ],
  },
]
```

**链接类型说明**:

- `cv` - 简历（蓝色）
- `scholar` - 学术认证（绿色）
- `email` - 邮箱（灰色）
- `conference` - 会议（紫色）

**示例**:

```typescript
{
  name: 'John Doe',
  role: 'Postdoctoral Fellow',
  image: 'https://example.com/avatar.jpg',
  bio: 'Research interests: genomics, machine learning...',
  links: [
    { type: 'cv', url: 'https://example.com/cv.pdf', label: 'CV' },
    { type: 'scholar', url: '', label: 'Scholar' },  // 无URL，显示为纯文本
    { type: 'email', url: 'mailto:john@example.com', label: 'Email' }
  ]
}
```

### 3. 论文发表页面 (Publications.vue)

**文件位置**: `src/views/Publications.vue`

#### 添加/修改论文

```typescript
const sections: PublicationSection[] = [
  {
    title: '分类标题', // 如：Preprints, Publications
    items: [
      {
        authors: '作者列表（用逗号分隔）',
        year: 2025,
        title: '论文标题',
        journal: '期刊/会议名称',
        type: 'preprint', // preprint(预印本), journal(期刊), conference(会议)
        link: '论文链接', // 可选，为空则不显示链接
        correspondingAuthor: '通讯作者姓名', // 可选，指定要加粗的作者（不区分大小写）
      },
    ],
  },
]
```

**类型说明**:

- `preprint` - 预印本（琥珀色）
- `journal` - 期刊论文（蓝色）
- `conference` - 会议论文（紫色）

**示例**:

```typescript
{
  authors: 'Smith J*, Doe J*, McVicker G#, Wang L',
  year: 2025,
  title: 'A groundbreaking study on genomics',
  journal: 'Nature',
  type: 'journal',
  link: 'https://doi.org/10.1038/...',
  correspondingAuthor: 'McVicker G'  // 会将 McVicker G 加粗显示
}
```

**作者标记**:

- `*` - 共同第一作者
- `#` - 通讯作者

### 4. 软件工具页面 (Software.vue)

**文件位置**: `src/views/Software.vue`

#### 添加/修改软件工具

```typescript
const softwareList: Software[] = [
  {
    name: '软件名称',
    description: '软件描述',
    language: '编程语言', // 如：Python, R, JavaScript
    stars: 123, // GitHub stars数量（可选）
    link: 'GitHub链接',
    documentation: '文档链接', // 可选
  },
]
```

**示例**:

```typescript
{
  name: 'GenVarLoader',
  description: 'A fast dataloader for genomic data processing',
  language: 'Python',
  stars: 456,
  link: 'https://github.com/username/genvarloader',
  documentation: 'https://genvarloader.readthedocs.io'
}
```

### 5. 图片展示页面 (Photos.vue)

**文件位置**: `src/views/Photos.vue`

#### 添加/修改相册

```typescript
const galleries: Gallery[] = [
  {
    title: '相册标题',
    description: '相册描述',
    photos: [
      {
        src: '图片URL',
        alt: '图片描述',
        caption: '图片说明', // 可选
      },
    ],
  },
]
```

### 6. 新闻动态页面 (News.vue)

**文件位置**: `src/views/News.vue`

#### 添加/修改新闻

```typescript
const newsItems: NewsItem[] = [
  {
    date: '2025-01-15',
    title: '新闻标题',
    content: '新闻内容（支持多段文字）',
    image: '配图URL', // 可选
    link: '相关链接', // 可选
  },
]
```

### 7. 加入我们页面 (Join.vue)

**文件位置**: `src/views/Join.vue`

直接在文件中修改职位列表和申请要求的文本内容。

### 8. 联系方式页面 (Contact.vue)

**文件位置**: `src/views/Contact.vue`

修改实验室地址、邮箱、电话等联系信息，如果地图信息需要修改，可以联系我。

### 9. 导航栏 (Header.vue)

**文件位置**: `src/components/Header.vue`

#### 修改导航菜单

path 属性如不了解，请不要修改

```typescript
const menuItems = [
  { name: '菜单名称', path: '/路径' },
  // ...
]
```

### 10. 页脚 (Footer.vue)

**文件位置**: `src/components/Footer.vue`

修改版权信息和社交媒体链接。

## 样式修改

项目使用 Tailwind CSS，可以直接在组件中使用 Tailwind 的工具类。

如需自定义样式，编辑：

- `src/assets/main.css` - 全局样式
- 各组件的 `<style>` 标签 - 组件级样式

## 部署说明

### 环境要求

- Node.js: ^20.19.0 或 >=22.12.0

### 安装依赖

进入项目目录运行

```bash
npm install
```

### GitHub Pages 部署

1. `git` 链接上 `GitHub` 仓库

1. 修改 `vite.config.ts` 中的 `base` 配置为你的仓库名

```typescript
base: '/<仓库名>/'
```

2. 运行部署命令：

```bash
npm run deploy
```

3. 不出意外部署成功，可在 `github` 仓库的 `settings/page` 中查看，之后每次修改只用运行 `npm run deploy` 和提交修改即可，如有问题可联系我

### 其他部署平台

构建后的文件在 `dist` 目录，可以部署到：

- Vercel
- Netlify
- 云服务器（Nginx/Caddy）

## 一些问题

### Q: 如何修改网站标题和图标?

A: 替换 public 文件夹中的 favicon.ico 就可以了，注意新的图标名字和格式不要变。

### Q: 怎么引入图片

A: 在 Vite 项目中有两种图片引入方式：

#### 方式一：使用本地图片（推荐）

1. **放置图片文件**

   将图片放在 `src/assets/images` 对应的文件夹中：
   - `src/assets/images/avatar/` - 人物头像
   - `src/assets/images/carousel/` - 轮播图
   - `src/assets/images/photos/` - 相册图片

2. **在组件中导入图片**
    
    我已经写好了路劲映射 ：

    - `@avatar` → `src/assets/images/avatar`
    - `@carousel` → `src/assets/images/carousel`
    - `@photos` → `src/assets/images/photos`
    - `@images` → `src/assets/images`
    - `@` → `src`
    
    使用示例如下：

   ```typescript
   import avatar from '@avatar/avatar.jpg'
   import photo from '@photos/team-photo.jpg'
   import banner from '@carousel/banner.png'
   import bg from '@images/bg.png'
   ```

3. **使用导入的图片**

   ```typescript
   const member = {
     name: 'John Doe',
     image: avatar, // 使用导入的图片变量
   }
   ```



#### 方式二：使用在线图片 URL

直接使用图片的 URL 地址（如 CDN、图床、Unsplash 等）：

```typescript
const member = {
  name: 'Jane Doe',
  image: 'https://images.unsplash.com/photo-xxx?w=400&h=400',
}
```

#### 实际示例

参考 `src/views/People.vue` 中的用法：

```typescript
// 导入本地图片
import avatar from '@avatar/avatar.jpg'

const team = [
  {
    title: 'Principal Investigator',
    members: [
      {
        name: 'Graham McVicker',
        image: avatar, // 使用本地图片
      },
    ],
  },
  {
    title: 'Postdoctoral Scholars',
    members: [
      {
        name: 'Shanna Lavalle',
        image: 'https://images.unsplash.com/photo-xxx', // 使用在线URL
      },
    ],
  },
]
```

---

**最后更新**: 2025年10月29日
