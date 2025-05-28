import { create } from 'zustand';

export const useBlogPostStore = create((set) => ({
  blogs: [],
  setAllBlogs: (givenBlogs) => {
    set({ blogs: givenBlogs });
  },
  clearAllBlogs: () => {
    set({ blogs: [] });
  },
  clearBlogId: (id) => {
    set((state) => ({
      blogs: state.blogs.filter((el) => el.id !== id),
    }));
  },
}));
