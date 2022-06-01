interface ProjectInfo {
  icon: string
  title: string
  content: string
  user: string
  date: string
}
interface DynamicInfo {
  icon: string
  title: string
  user: string
  date: string
}
interface QuickNav {
  icon: string
  title: string
}
export const projectInfo: ProjectInfo[] = [
  {
    icon: 'icon-huaban88',
    title: 'Github',
    content: '你不努力，永远到达不了自己想要到达的地方你不努力，永远到达不了自己想要到达的地方',
    user: 'Anxure',
    date: '9小时前'
  },
  {
    icon: 'icon-vue',
    title: 'Vue',
    content: '大佬，不要更新了，学不动了',
    user: '摸鱼组',
    date: '2021-05-21'
  },
  {
    icon: 'icon-react',
    title: 'React',
    content: '成长不是走斜坡，而是上台阶',
    user: '躺平组',
    date: '2021-06-07'
  },
  {
    icon: 'icon-angular',
    title: 'Angular',
    content: '记着你的脸色，是我等你的执着',
    user: '痴情组',
    date: '2021-06-08'
  },
  {
    icon: 'icon-css',
    title: 'Css',
    content: '一阵风、一场梦，爱是生命的莫测',
    user: '开发组',
    date: '2021-06-08'
  },
  {
    icon: 'icon-html5-dark',
    title: 'Html5',
    content: '两相忘从来未忘，只是记着，只是念着，只是珍藏',
    user: '架构组',
    date: '2021-06-08'
  }
]
export const dynamicInfo: DynamicInfo[] = [
  {
    icon: '#icon-avatar',
    user: 'Anxure',
    title: '在 <a>github</a> 创建了项目 <a>vue3-base-frame </a>',
    date: '2021-05-25'
  },
  {
    icon: '#icon-touxiangnvhai1',
    user: '小红',
    title: '在 <a>开源组</a> 提交了request',
    date: '2021-05-15'
  },
  {
    icon: '#icon-icon-test',
    user: '张大伟',
    title: '在 <a>vue3-base-frame</a> 提了一个bug',
    date: '9小时前'
  },
  {
    icon: '#icon-qiatongxingxiang',
    user: '云梦烟',
    title: '在 <a>vue3-base-frame</a> 创建了分支develop',
    date: '6小时前'
  },
  {
    icon: '#icon-touxiangnvhai',
    user: '孙晓月',
    title: '在 <a>vue3-base-frame</a> release了一个新的版本',
    date: '1小时前'
  }
]
export const quickNav: QuickNav[] = [
  {
    icon: '#icon-gongzuotai1',
    title: '工作台'
  },
  {
    icon: '#icon-biaodan1',
    title: '基础表单'
  },
  {
    icon: '#icon-zu23631',
    title: '高级表单'
  },
  {
    icon: '#icon-biaoge',
    title: '表格'
  },
  {
    icon: '#icon-icon-test2',
    title: '404页面'
  },
  {
    icon: '#icon-icon-test1',
    title: '403页面'
  }
]