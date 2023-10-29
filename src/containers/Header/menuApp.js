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
        link: "/system/UserManage",
      },
      {
        name: "Menu.admin.crudRedux",
        link: "/system/UserManage",
      },
    ],
  },
  {
    //quan ly phong kham
    name: "Menu.admin.clinic",
    menus: [
      {
        name: "Menu.admin.manager-clinic",
        link: "/system/manager-clinic",
      },
    ],
  },
  {
    //quan ly chuyen khoa
    name: "Menu.admin.specialty",
    menus: [
      {
        name: "Menu.admin.manager-specialty",
        link: "/system/manager-specialty",
      },
    ],
  },
  {
    //quan ly cam nang
    name: "Menu.admin.handBook",
    menus: [
      {
        name: "Menu.admin.manager-handBook",
        link: "/system/manager-handBook",
      },
    ],
  },
];
