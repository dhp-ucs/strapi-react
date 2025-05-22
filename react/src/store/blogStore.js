import { create } from 'zustand';

import { devtools, persist } from 'zustand/middleware';

const blogStore = (set) => ({
  blogs: [],
  addBlog: (blog) => {
    set((state) => ({
      blogs: [blog, ...state.blogs],
    }));
  },

  removeBlogs: (courseId) => {
    set((state) => ({
      blogs: state.blogs.filter((c) => c.id !== courseId),
    }));
  },

  
});
