/*
 * @Author: Anxure
 * @Github: https://github.com/Anxure
 * @Date: 2020-11-25 17:49:23
 * @LastEditors: Anxure
 * @LastEditTime: 2021-04-29 17:44:00
 */
import { App } from 'vue'
import { Button, Col, Row, Layout, Breadcrumb, Affix, Dropdown, Menu, PageHeader, Pagination, Steps,
  AutoComplete, Cascader, Checkbox, DatePicker, Form, Input, InputNumber, Mentions, Radio,
  Rate, Select, Slider, Switch, TimePicker, Transfer, TreeSelect, Upload, Avatar, Badge, Calendar, Card,
  Carousel, Collapse, Comment, Descriptions, Empty, List, Popover, Statistic, Table, Tabs, Tag, Timeline,
  Tooltip, Tree, Alert, Drawer, Modal, Popconfirm, Progress, Result, Skeleton, Spin,
  Anchor, BackTop, ConfigProvider, Divider, message, notification } from 'ant-design-vue';

export const antd = (app: App) => {
  app.use(Button);
  app.use(Row);
  app.use(Col);
  app.use(Layout);
  app.use(Breadcrumb);
  app.use(Affix);
  app.use(Dropdown);
  app.use(Menu);
  app.use(PageHeader);
  app.use(Pagination);
  app.use(Steps);
  app.use(AutoComplete);
  app.use(Cascader);
  app.use(Checkbox);
  app.use(DatePicker);
  app.use(Form);
  app.use(Input);
  app.use(InputNumber);
  app.use(Mentions);
  app.use(Radio);
  app.use(Rate);
  app.use(Select);
  app.use(Slider);
  app.use(Switch);
  app.use(TimePicker);
  app.use(Transfer);
  app.use(TreeSelect);
  app.use(Upload);
  app.use(Avatar);
  app.use(Badge);
  app.use(Calendar);
  app.use(Card);
  app.use(Carousel);
  app.use(Collapse);
  app.use(Comment);
  app.use(Descriptions);
  app.use(Empty);
  app.use(List);
  app.use(Popover);
  app.use(Statistic);
  app.use(Table);
  app.use(Tabs);
  app.use(Tag);
  app.use(Timeline);
  app.use(Tooltip);
  app.use(Tree);
  app.use(Alert);
  app.use(Drawer);
  app.use(Modal);
  app.use(Popconfirm);
  app.use(Progress);
  app.use(Result);
  app.use(Skeleton);
  app.use(Spin);
  app.use(Anchor);
  app.use(BackTop);
  app.use(ConfigProvider);
  app.use(Divider);

  app.config.globalProperties.$message = message;
  app.config.globalProperties.$modal = Modal;
  app.config.globalProperties.$notification = notification;

}