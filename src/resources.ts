import { CustomComponent } from "pages/custom";
import {PostCreate, PostEdit, PostList, PostShow} from "./pages/posts";
import {UserEdit, UserList} from "./pages/users";

export const resources = [
    {
        options: {
            label: 'Posts',
            route: 'post'
        },
        name: 'posts',
        list: PostList,
        create: PostCreate,
        edit: PostEdit,
        show: PostShow,
    },
    {
        options: {
            label: 'Users',
            route: 'user'
        },
        name: 'users',
        list: UserList,
        edit: UserEdit,
    },
    {
        options: {
            label: 'Custom',
            route: 'custom'
        },
        name: 'custom',
        list: CustomComponent,
    },
]
