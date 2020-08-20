import React from 'react'
import PublishedPost from './PublishedPost';

export default {
    title: 'publishedPost',
    component:PublishedPost
}

const Template = (args) => <PublishedPost {...args} />;

export const value = Template.bind({});
// value.args = {
//     issearch:false,
//     // usearch:updatesearch,
//     post:state.posts,
//     searchpost:state.search,
//     add:postData,
//     search:searchPost
// };

