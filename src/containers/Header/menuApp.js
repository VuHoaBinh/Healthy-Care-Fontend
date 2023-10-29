export const adminMenu = [
  {
    //quan ly nguoi dung
    name: "Menu.admin.manager-user",
    menus: [
      {
        name: "Menu.admin.manager-doctor",
        link: "/system/UserManage",
      },
      {
        name: "Menu.admin.manager-admin",
        link: "/system/ProductManage",
      },
      {
        name: "Menu.admin.crud",
        link: "/system/crud",
      },
      {
        name: "Menu.admin.crudRedux",
        link: "/system/crudRedux",
      },
    ],
  },
  {
    //quan ly phong kham
    name: "Menu.admin.clinic",
    menus: [
      {
        name: "Menu.admin.manage-clinic",
        link: "/system/manage-clinic",
      },
    ],
  },
  {
    //quan ly chuyen khoa
    name: "Menu.admin.specialty",
    menus: [
      {
        name: "Menu.admin.manage-specialty",
        link: "/system/manage-specialty",
      },
    ],
  },
  {
    //quan ly cam nang
    name: "Menu.admin.handBook",
    menus: [
      {
        name: "Menu.admin.manage-handBook",
        link: "/system/manage-handBook",
      },
    ],
  },
];
